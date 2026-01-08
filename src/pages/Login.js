import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("token", "dummy-token");
      navigate("/");
    } else {
      alert("Please enter email & password");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2 className="logo">Your Logo</h2>

        <h3>Login</h3>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="forgot">
            <span>Forgot Password?</span>
          </div>

          <button type="submit">Sign in</button>
        </form>

        <p className="or">or continue with</p>

        <div className="socials">
          <button>G</button>
          <button>GH</button>
          <button>F</button>
        </div>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
