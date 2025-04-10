import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import {
  FaLinkedin,
  FaInfoCircle,
  FaPhoneAlt,
  FaQuestionCircle,
  FaBuilding,
} from "react-icons/fa";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [setUsername]);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    setUsername("");
    navigate("/login");
  };

  const getInitial = (name) => name?.charAt(0)?.toUpperCase();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 👇 Scroll Hide/Show Nav Logic (for mobile only)
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (window.innerWidth <= 768 && mobileNavRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          // Scrolling down
          mobileNavRef.current.style.transform = "translateY(100%)";
        } else {
          // Scrolling up
          mobileNavRef.current.style.transform = "translateY(0)";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className="py-1 px-4 sticky-top shadow-sm" style={{ backgroundColor: "#e7eaf6" }}>
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between flex-wrap w-100">
            {/* Logo */}
            <Link to="/" className="d-flex align-items-center text-decoration-none">
              <img width={80} height={65} src="wwww.png" alt="Logo" />
            </Link>

            {/* Navigation Links for larger screens */}
            <div className="d-none d-md-flex align-items-center">
              <Link to="/About" className="nav-link nav-custom">About</Link>
              <Link to="/Contact" className="nav-link nav-custom">Contact</Link>
              <Link to="/Faq" className="nav-link nav-custom">FAQ</Link>
              <Link to="/Company" className="nav-link nav-custom">Company</Link>
            </div>

            {/* Right Side (User or Login) */}
            <div className="text-end d-flex align-items-center">
              {username ? (
                <div className="position-relative" ref={dropdownRef}>
                  <div className="user-circle" onClick={toggleDropdown} title={username}>
                    {getInitial(username)}
                  </div>
                  <div
                    className={`dropdown-menu mt-2 ${dropdownOpen ? "show" : ""}`}
                    style={{
                      opacity: dropdownOpen ? 1 : 0,
                      transform: dropdownOpen ? "translateY(0)" : "translateY(-10px)",
                      pointerEvents: dropdownOpen ? "auto" : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Link to="/profile" className="dropdown-item">Profile / Settings</Link>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/Login">
                    <button type="button" className="btn btn-outline-dark me-2 btn-hover">Login</button>
                  </Link>
                  <Link to="/Signup">
                    <button type="button" className="btn btn-dark btn-hover">Sign-up</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 📱 Mobile Nav with Scroll Hide Behavior */}
      <div ref={mobileNavRef} className="d-md-none mobile-nav-transition">
        <ul className="nav justify-content-center w-100">
          <li className="nav-item">
            <Link to="/About" className="nav-link nav-custom">
              <FaInfoCircle size={20} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link nav-custom">
              <FaPhoneAlt size={20} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Faq" className="nav-link nav-custom">
              <FaQuestionCircle size={20} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Company" className="nav-link nav-custom">
              <FaBuilding size={20} />
            </Link>
          </li>
        </ul>
      </div>

      {/* ✅ UPDATED CSS BELOW */}
      <style>{`
        .nav-custom {
          color: #000;
          font-weight: 500;
          font-size: 1.05rem;
          margin: 0 10px;
          position: relative;
          transition: all 0.3s ease-in-out;
        }
        .nav-custom::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          left: 0;
          bottom: -5px;
          background-color: #000;
          transition: width 0.3s ease;
        }
        .nav-custom:hover::after {
          width: 100%;
        }
        .nav-custom:hover {
          color: #1a1a1a;
          transform: translateY(-2px);
        }

        .btn-hover {
          transition: all 0.3s ease;
        }
        .btn-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }

        .user-circle {
          background-color: #2a9d8f;
          color: white;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          cursor: pointer;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }
        .user-circle:hover {
          background-color: #21867a;
        }

        .dropdown-menu {
          position: absolute;
          right: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-width: 180px;
          z-index: 1000;
        }

        .dropdown-item {
          padding: 10px 16px;
          font-weight: 500;
          text-decoration: none;
          display: block;
          color: #333;
          cursor: pointer;
        }
        .dropdown-item:hover {
          background-color: #f1f1f1;
        }

        /* ✅ Mobile Nav Fixes */
        @media (max-width: 768px) {
          .mobile-nav-transition {
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 10px 10px 0 0;
            background-color: #e7eaf6;
            padding: 10px 0;
            border-top: 1px solid black;
            position: fixed;
            bottom: 0;
            width: 100%;
            left: 0;
            transition: transform 0.3s ease-in-out;
            z-index: 999;
          }

          .nav-item {
            flex: 1;
            text-align: center;
          }

          .nav-link {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 4px 0;
          }

          .nav-link svg {
            display: block;
            margin: auto;
          }

          .user-circle {
            margin-left: auto;
          }
        }
      `}</style>
    </div>
  );
}
