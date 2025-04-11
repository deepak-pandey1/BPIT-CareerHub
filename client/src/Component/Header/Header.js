import React, { useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import {
  FaInfoCircle,
  FaPhoneAlt,
  FaQuestionCircle,
  FaBuilding,
} from "react-icons/fa";
import Sidebar from "../Sidebar";

export default function Header() {
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [setUsername]);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      if (window.innerWidth <= 768 && mobileNavRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          mobileNavRef.current.style.transform = "translateY(100%)";
        } else {
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
      <header
        className="py-1 px-4 sticky-top shadow-sm"
        style={{ backgroundColor: "#e7eaf6", minHeight: "65px" }}
      >
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between flex-wrap w-100">
            {/* Sidebar - Fixed width or flex: 1 */}
            <div className="d-flex align-items-center" style={{ flex: 1 }}>
              <Link to="/" className="text-decoration-none" style={{ minHeight: "55px" }}>
                <Sidebar />
              </Link>
            </div>

            {/* Nav links - Centered always */}
            <div className="d-none d-md-flex align-items-center justify-content-center" style={{ flex: 1 }}>
              <Link to="/About" className="nav-link nav-custom">About</Link>
              <Link to="/Contact" className="nav-link nav-custom">Contact</Link>
              <Link to="/Faq" className="nav-link nav-custom">FAQ</Link>
              <Link to="/Company" className="nav-link nav-custom">Company</Link>
            </div>

            {/* Right side buttons */}
            <div className="d-flex align-items-center justify-content-end" style={{ flex: 1 }}>
              {username ? (
                <>
                  {/* Keep empty space to preserve layout */}
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
      </header>

      {/* 📱 Mobile Bottom Nav */}
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

      {/* ✅ Styles */}
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
        }
      `}</style>
    </div>
  );
}
