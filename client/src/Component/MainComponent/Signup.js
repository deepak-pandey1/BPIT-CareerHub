import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Client-side validation with toasts
    if (!username || !email || !password) {
      return toast.warn("All fields are required!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
      });
    }

    if (password.length < 6) {
      return toast.info("Password must be at least 6 characters long.", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
      });
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://bpit-careerhub.onrender.com/api/user/signup",
        { username, email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("jwt", data.token);
      toast.success("Signup successful! Redirecting to login...", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
      });
      setTimeout(() => navigateTo("/login"), 3000);
      setUserName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      const errMsg =
        error?.response?.data?.message || "Signup failed. Please try again.";
      toast.error(errMsg, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-wrapper">
      <ToastContainer />
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-input"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-btn animated-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span> Creating Account...
              </>
            ) : (
              <>🚀 Sign Up</>
            )}
          </button>
          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Styles */}
      <style>
        {`
          .signup-wrapper {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: #e7eaf6;
          }

          .signup-card {
            width: 100%;
            max-width: 450px;
            background: #fff;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            animation: fadeIn 0.7s ease-in-out;
            margin-top: -75px;
          }

          .signup-title {
            text-align: center;
            color: #264653;
            font-weight: 700;
            margin-bottom: 1.5rem;
          }

          .form-group {
            margin-bottom: 1.2rem;
          }

          .form-label {
            display: block;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #333;
          }

          .form-input {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid #ccc;
            border-radius: 10px;
            transition: all 0.3s ease;
            font-size: 1rem;
          }

          .form-input:focus {
            outline: none;
            border-color: #2a9d8f;
            box-shadow: 0 0 6px #2a9d8f;
          }

          .signup-btn {
            width: 100%;
            padding: 12px;
            border: none;
            background-color: #2a9d8f;
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            transition: background 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .signup-btn:hover {
            background-color: #21867a;
          }

          .signup-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid white;
            border-top: 2px solid #2a9d8f;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .login-text {
            text-align: center;
            margin-top: 1.5rem;
            color: #666;
            font-size: 0.95rem;
          }

          .login-link {
            color: #2a9d8f;
            text-decoration: none;
            font-weight: 500;
          }

          .login-link:hover {
            text-decoration: underline;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .signup-card {
              padding: 1.5rem;
              margin-top: -200px;
            }

            .form-input {
              padding: 10px 14px;
              font-size: 0.95rem;
            }

            .signup-btn {
              font-size: 1rem;
              padding: 10px;
            }

            .signup-title {
              font-size: 1.6rem;
            }
          }

          @media (max-width: 480px) {
            .signup-card {
              padding: 1.2rem;
              border-radius: 14px;
              margin-top: -130px;
            }

            .signup-title {
              font-size: 1.4rem;
            }

            .form-input {
              padding: 9px 12px;
              font-size: 0.9rem;
            }

            .signup-btn {
              font-size: 0.95rem;
              padding: 9px;
            }

            .login-text {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Signup;
