import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate(); // ✅ hook at top level

  function handleSubmit(e) {
    e.preventDefault();

    // dummy login
    setUser({
      name: "Demo User",
      role: "Labour",
    });

    navigate("/dashboard"); // ✅ proper navigation
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">
          Login to manage jobs & workers
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <p className="switch-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}
