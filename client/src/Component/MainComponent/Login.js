import axios from "axios";
import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext"; // Adjust path if needed

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUsername } = useContext(UserContext);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/user/login", // ✅ Relative path for Render fullstack
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      // Save to localStorage & update context
      localStorage.setItem("jwt", data.token);
      localStorage.setItem("username", data.user.username);
      setUsername(data.user.username);

      toast.success(data.message || "Logged in successfully");
      navigateTo("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error?.response?.data?.errors || "Login failed");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#e7eaf6" }}
    >
      <div
        className="card shadow p-4"
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "20px",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <h2 className="text-center mb-4" style={{ fontWeight: "700", color: "#264653" }}>
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ transition: "all 0.3s" }}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ transition: "all 0.3s" }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-lg w-100 text-white"
            style={{
              backgroundColor: "#2a9d8f",
              border: "none",
              borderRadius: "12px",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#21867a")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2a9d8f")}
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="mt-3 text-center text-muted">
            New user?{" "}
            <Link to="/signup" style={{ color: "#2a9d8f", fontWeight: "500", textDecoration: "none" }}>
              Create Account
            </Link>
          </p>
        </form>
      </div>

      {/* Fade In Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          input:focus {
            box-shadow: 0 0 6px #2a9d8f !important;
            border-color: #2a9d8f !important;
          }
        `}
      </style>
    </div>
  );
}

export default Login;
