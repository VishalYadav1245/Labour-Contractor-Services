import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // dummy login
    setUser({
      name: "Demo User",
      role: "Labour",
    });

    navigate("/dashboard");
  }

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="register-title">✨ Welcome Back</h2>
        <p className="register-subtitle">
          Login to Labour & Contractor Platform
        </p>

        <form onSubmit={handleSubmit}>
          <div className="glow-input">
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="glow-input">
            <input type="password" required />
            <label>Password</label>
          </div>

          <button className="glow-btn">Login</button>
        </form>

        <p className="switch-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}
