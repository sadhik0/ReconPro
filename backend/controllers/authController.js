const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendOTPEmail = require("../utils/sendEmail");

console.log("🔥 AUTH CONTROLLER VERSION 2 LOADED");
// =========================
// Register User
// =========================
exports.register = async (req, res) => {
  try {
    console.log("===== REGISTER REQUEST =====");
    console.log(req.body);

    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("User Created:", user.email);

    return res.status(201).json({
      message: "Registration Successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {

    console.error("========== REGISTER ERROR ==========");
    console.error(err);
    console.error(err.stack);
    console.error("====================================");

    return res.status(500).json({
      message: err.message,
    });

  }
};

// =========================
// Login User
// =========================
exports.login = async (req, res) => {
  try {

    console.log("===== LOGIN REQUEST =====");
    console.log(req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    console.log("Login Success:", user.email);

    return res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {

    console.error("=========== LOGIN ERROR ===========");
    console.error(err);
    console.error(err.stack);
    console.error("===================================");

    return res.status(500).json({
      message: err.message,
    });

  }
};

// =========================
// Get Logged-in User Profile
// =========================
exports.getProfile = async (req, res) => {
  try {

    console.log("===== PROFILE REQUEST =====");

    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json(user);

  } catch (err) {

    console.error("========== PROFILE ERROR ==========");
    console.error(err);
    console.error(err.stack);
    console.error("===================================");

    return res.status(500).json({
      message: err.message,
    });

  }
};

// =========================
// Forgot Password — send OTP
// =========================
exports.forgotPassword = async (req, res) => {
  try {

    console.log("===== FORGOT PASSWORD REQUEST =====");

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "No account found with this email",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes

    await user.save();

    await sendOTPEmail(user.email, otp);

    console.log("OTP sent to:", user.email);

    return res.json({
      message: "OTP sent to your email",
    });

  } catch (err) {

    console.error("========== FORGOT PASSWORD ERROR ==========");
    console.error(err);
    console.error(err.stack);
    console.error("============================================");

    return res.status(500).json({
      message: err.message,
    });

  }
};

// =========================
// Reset Password — verify OTP
// =========================
exports.resetPassword = async (req, res) => {
  try {

    console.log("===== RESET PASSWORD REQUEST =====");

    const { email, otp, newPassword } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "No account found with this email",
      });
    }

    if (
      !user.otp ||
      user.otp !== otp ||
      !user.otpExpiry ||
      Date.now() > user.otpExpiry
    ) {
      return res.status(400).json({
        message: "Invalid or expired OTP",
      });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.otp = null;
    user.otpExpiry = null;

    await user.save();

    console.log("Password reset successful for:", user.email);

    return res.json({
      message: "Password reset successful",
    });

  } catch (err) {

    console.error("========== RESET PASSWORD ERROR ==========");
    console.error(err);
    console.error(err.stack);
    console.error("===========================================");

    return res.status(500).json({
      message: err.message,
    });

  }
};