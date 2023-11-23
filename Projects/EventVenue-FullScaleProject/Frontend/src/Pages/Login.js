import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const validateInput = () => {
    if (!email || !password) {
      setError("Email and Password are required >:(");
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
      const response = await axios.post("http://localhost:5100/user/login", {
        email,
        password,
      });
      console.log(response.data);
      sessionStorage.setItem("authToken", response.data.data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="card">
      <h2> Login </h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
