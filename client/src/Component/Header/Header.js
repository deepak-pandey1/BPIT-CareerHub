import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    setUsername("");
    navigate("/login");
  };

  const getInitial = (name) => name?.charAt(0)?.toUpperCase();

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <header className="py-2 px-4 sticky-top shadow-sm" style={{ backgroundColor: "#e7eaf6" }}>
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between flex-wrap w-100">
            {/* Logo */}
            <Link to="/" className="d-flex align-items-center text-decoration-none">
              <img width={80} height={65} src="wwww.png" alt="Logo" />
            </Link>

            {/* Center Nav (Desktop) */}
            <ul className="nav d-none d-md-flex justify-content-center flex-grow-1 mb-0" style={{ listStyle: "none" }}>
              <li><Link to="/About" className="nav-link nav-custom">About</Link></li>
              <li><Link to="/Contact" className="nav-link nav-custom">Contact</Link></li>
              <li><Link to="/Faq" className="nav-link nav-custom">FAQs</Link></li>
              <li><Link to="/Company" className="nav-link nav-custom">Company</Link></li>
            </ul>

            {/* Right Side (User or Login) */}
            <div className="text-end d-none d-md-block">
              {username ? (
                <div className="position-relative" ref={dropdownRef}>
                  <div
                    className="user-circle"
                    onClick={toggleDropdown}
                    title={username}
                  >
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

            {/* Mobile Menu Toggle */}
            <button className="d-md-none border-0 bg-transparent" onClick={toggleMenu} aria-label="Toggle menu" style={{ fontSize: "1.8rem" }}>
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`menu-wrapper ${isOpen ? "open" : ""} d-md-none`}>
            <ul className="nav flex-column text-center mt-2">
              <li><Link to="/About" className="nav-link nav-custom">About</Link></li>
              <li><Link to="/Contact" className="nav-link nav-custom">Contact</Link></li>
              <li><Link to="/Faq" className="nav-link nav-custom">FAQs</Link></li>
              <li><Link to="/Company" className="nav-link nav-custom">Company</Link></li>
            </ul>
            <div className="text-center mt-2">
              {username ? (
                <>
                  <Link to="/Profile" className="btn btn-outline-dark me-2 btn-hover">Profile</Link>
                  <button className="btn btn-danger btn-hover" onClick={handleLogout}>Logout</button>
                </>
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

        {/* Styles */}
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
          .menu-wrapper {
            max-height: 0;
            overflow: hidden;
            flex-direction: column;
            transition: max-height 0.4s ease-in-out;
            width: 100%;
          }
          .menu-wrapper.open {
            max-height: 500px;
            padding-top: 10px;
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
        `}</style>
      </header>
    </div>
  );
}
