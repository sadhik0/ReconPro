import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [robotChecked, setRobotChecked] = useState(false);

  const [otpSent, setOtpSent] = useState(false);

  const [otp, setOtp] = useState("");

  const generatedOTP = "123456";

  const sendOTP = () => {

    if (!email) {
      alert("Enter Email");
      return;
    }

    if (password.length < 6) {
      alert("Password should contain at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!robotChecked) {
      alert("Please verify you are not a robot");
      return;
    }

    alert("OTP Sent Successfully!\n\nDemo OTP : 123456");

    setOtpSent(true);

  };

  const verifyOTP = () => {

    if (otp !== generatedOTP) {
      alert("Invalid OTP");
      return;
    }

    alert("Registration Successful");

    navigate("/");

  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-2xl w-[470px] p-8">

        <h1 className="text-4xl font-bold text-blue-600 text-center">

          ReconPro

        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">

          Create Your Account

        </p>

        {!otpSent && (

          <>

            <label>Email</label>

            <input
              type="email"
              className="border w-full rounded-lg p-3 mt-2 mb-5"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              className="border w-full rounded-lg p-3 mt-2 mb-5"
              placeholder="Create Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <label>Confirm Password</label>

            <input
              type="password"
              className="border w-full rounded-lg p-3 mt-2"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />

            <div className="mt-6 flex items-center">

              <input
                type="checkbox"
                checked={robotChecked}
                onChange={(e)=>setRobotChecked(e.target.checked)}
              />

              <span className="ml-3">

                I'm not a robot

              </span>

            </div>

            <button

              onClick={sendOTP}

              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 mt-8"

            >

              Send OTP

            </button>

          </>

        )}

        {otpSent && (

          <>

            <h2 className="text-xl font-semibold text-center">

              OTP Verification

            </h2>

            <p className="text-center text-gray-500 mb-6">

              Enter the OTP sent to

              <br />

              <b>{email}</b>

            </p>

            <input
              type="text"
              className="border w-full rounded-lg p-3 text-center text-xl tracking-[10px]"
              placeholder="------"
              value={otp}
              onChange={(e)=>setOtp(e.target.value)}
            />

            <button

              onClick={verifyOTP}

              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 mt-8"

            >

              Verify OTP

            </button>

          </>

        )}

        <div className="text-center mt-8">

          Already have an account?

          <Link

            to="/"

            className="text-blue-600 font-semibold ml-2"

          >

            Login

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Register;