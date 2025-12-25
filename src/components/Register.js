import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate(); // ✅ hook at top level

  function handleSubmit(e) {
    e.preventDefault();

    // dummy register success
    navigate("/login"); // ✅ go to login page
  }

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="register-title">✨ Create Account</h2>
        <p className="register-subtitle">
          Join Labour & Contractor Platform
        </p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="glow-input">
            <input type="text" required />
            <label>Full Name</label>
          </div>

          <div className="glow-input">
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="glow-input">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="role-box">
            <label>
              <input type="radio" name="role" required />
              <span>👷 Labour</span>
            </label>

            <label>
              <input type="radio" name="role" />
              <span>🏗 Contractor</span>
            </label>
          </div>

          <button className="glow-btn">Create Account</button>
        </form>

        <p className="switch-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}
