import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4001/user/signup",
        { username, email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("jwt", data.token);
      navigateTo("/login");
      setUserName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#e7eaf6" }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: "450px", width: "100%", borderRadius: "20px", background: "#fff", animation: "fadeIn 1s ease-in-out" }}>
        <h2 className="text-center mb-4" style={{ fontWeight: "700", color: "#264653" }}>Create Account</h2>
        <form onSubmit={handleRegister}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">Username</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
              style={{ transition: "all 0.3s" }}
            />
          </div>
          {/* Email */}
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
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ transition: "all 0.3s" }}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-primary btn-lg w-100"
            style={{
              backgroundColor: "#2a9d8f",
              border: "none",
              transition: "all 0.3s",
              borderRadius: "12px"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#21867a")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2a9d8f")}
          >
            Sign Up
          </button>

          {/* Login link */}
          <p className="mt-3 text-center text-muted">
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#2a9d8f", textDecoration: "none", fontWeight: "500" }}>
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          input:focus {
            box-shadow: 0 0 5px #2a9d8f !important;
            border-color: #2a9d8f !important;
          }
        `}
      </style>
    </div>
  );
}

export default Signup;
