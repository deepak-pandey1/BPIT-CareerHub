import axios from "axios";
import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { auth, provider, githubProvider  } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUsername } = useContext(UserContext);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://bpit-careerhub.onrender.com/api/user/login",
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      localStorage.setItem("jwt", data.token);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("loggedIn", "true");
      setUsername(data.user.username);

      toast.success(data.message || "Logged in successfully");
      navigateTo("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error?.response?.data?.errors || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      localStorage.setItem("username", user.displayName);
      localStorage.setItem("email", user.email);
      localStorage.setItem("photoURL", user.photoURL);
      localStorage.setItem("loggedIn", "true");

      setUsername(user.displayName);
      toast.success(`Welcome, ${user.displayName}`);
      navigateTo("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Google Sign-In failed");
    }
  };



  const handleGithubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
  
      localStorage.setItem("username", user.displayName || user.email);
      localStorage.setItem("email", user.email);
      localStorage.setItem("photoURL", user.photoURL);
      localStorage.setItem("loggedIn", "true");
  
      setUsername(user.displayName || user.email);
      toast.success(`Welcome, ${user.displayName || user.email}`);
      navigateTo("/");
    } catch (error) {
      console.error("GitHub sign-in error:", error);
      toast.error("GitHub Sign-In failed");
    }
  };
  



  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>

        <form onSubmit={handleLogin}>
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn animated-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span> Logging in...
              </>
            ) : (
              <>
                💻 Login
              </>
            )}
          </button>

          <div className="divider">OR</div>

          <button type="button" onClick={handleGoogleSignIn} className="google-btn animated-btn">
          <img
              src="https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png"
              alt=""
              className="google-icon"
            />
            Sign in with Google
          </button>

          <button type="button" onClick={handleGithubSignIn} className="google-btn animated-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="google-icon"
            />
            Sign in with GitHub
          </button>


          <p className="signup-text">
            New user?{" "}
            <Link to="/signup" className="signup-link">
              Create Account
            </Link>
          </p>
        </form>
      </div>

      {/* Custom Styles */}
      <style>
        {`

           .google-icon {
  width: 20px;
  height: 20px;
}

/* Medium screens */
@media (max-width: 768px) {
  .google-icon {
    width: 18px;
    height: 18px;
  }
}

/* Small screens (mobile) */
@media (max-width: 480px) {
  .google-icon {
    width: 16px;
    height: 16px;
  }
}



          .login-wrapper {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: #e7eaf6;
          }

          .login-card {
            width: 100%;
            max-width: 450px;
            background: #fff;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            animation: fadeIn 0.7s ease-in-out;
            margin-top: -75px;
          }

          .login-title {
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

          .login-btn,
          .google-btn {
            width: 100%;
            padding: 12px;
            border: none;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .login-btn {
            background-color: #2a9d8f;
            color: white;
            margin-bottom: 1rem;
          }

          .google-btn {
            background-color: #fff;
            border: 1px solid #ccc;
            color: #333;
          }

          .login-btn:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          .animated-btn:hover {
            transform: scale(1.03);
            box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          }

          .animated-btn:active {
            transform: scale(0.98);
          }

          .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid white;
            border-top: 2px solid transparent;
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
            display: inline-block;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          .divider {
            text-align: center;
            margin: 1.2rem 0;
            color: #888;
            font-weight: 500;
          }

          .signup-text {
            text-align: center;
            margin-top: 1.5rem;
            color: #666;
            font-size: 0.95rem;
          }

          .signup-link {
            color: #2a9d8f;
            text-decoration: none;
            font-weight: 500;
          }

          .signup-link:hover {
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .login-card {
              margin-top: -200px;
              padding: 1.5rem;
            }

            .form-input {
              padding: 10px 14px;
              font-size: 0.95rem;
            }

            .login-btn,
            .google-btn {
              font-size: 1rem;
              padding: 10px;
            }
          }

          @media (max-width: 480px) {
            .login-card {
              padding: 1.2rem;
              border-radius: 14px;

              margin-top: -130px;
            }

            .login-title {
              font-size: 1.5rem;
            }

            .signup-text {
              font-size: 0.9rem;
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default Login;
