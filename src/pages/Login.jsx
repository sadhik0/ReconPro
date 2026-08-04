function Login() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h1>ReconPro</h1>

        <p>Financial Reconciliation Platform</p>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "90%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "90%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "8px",
          }}
        />

        <br />

        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;