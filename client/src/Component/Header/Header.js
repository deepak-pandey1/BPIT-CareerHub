import React, { useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import {
  FaInfoCircle,
  FaPhoneAlt,
  FaQuestionCircle,
  FaBuilding,
  FaHome,
  FaUsers, // ✅ New icon for Community
} from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
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
      <header className="custom-header">
        <div className="container-fluid">
          <div className="header-inner">
            <div className="left-section">
              <Sidebar />
            </div>

            <div className="center-section d-none d-md-flex">
              <Link to="/" className="nav-link nav-custom">Home</Link>
              <Link to="/About" className="nav-link nav-custom">About</Link>
              <Link to="/Contact" className="nav-link nav-custom">Contact</Link>
              <Link to="/Faq" className="nav-link nav-custom">FAQ</Link>
              <Link to="/Company" className="nav-link nav-custom">Company</Link>
            </div>

            <div className="right-section">
              {username && (
                <Link to="/Community" className="nav-link nav-custom community-icon">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FaUsers size={28} />
                  </motion.div>
                </Link>
              )}
              {!username && (
                <div className="auth-buttons">
                  <Link to="/Login">
                    <button type="button" className="btn btn-outline-dark btn-hover auth-btn">Login</button>
                  </Link>
                  <Link to="/Signup">
                    <button type="button" className="btn btn-dark btn-hover auth-btn">Sign-up</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div ref={mobileNavRef} className="d-md-none mobile-nav-transition">
        <ul className="nav justify-content-center w-100">
          <li className="nav-item">
            <Link to="/" className="nav-link nav-custom"><FaHome size={20} /></Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link nav-custom"><FaInfoCircle size={20} /></Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link nav-custom"><FaPhoneAlt size={20} /></Link>
          </li>
          <li className="nav-item">
            <Link to="/Faq" className="nav-link nav-custom"><FaQuestionCircle size={20} /></Link>
          </li>
          <li className="nav-item">
            <Link to="/Company" className="nav-link nav-custom"><FaBuilding size={20} /></Link>
          </li>
          {/* {username && (
            <li className="nav-item">
              <Link to="/Community" className="nav-link nav-custom">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaUsers size={20} />
                </motion.div>
              </Link>
            </li>
          )} */}
        </ul>
      </div>

      {/* CSS remains unchanged */}
      <style>{`
        .custom-header {
          background-color: #e7eaf6;
          min-height: 65px;
          padding: 10px 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 100%;
        }

        .left-section,
        .center-section,
        .right-section {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .center-section {
          justify-content: center;
        }

        .right-section {
          justify-content: flex-end;
        }

        .auth-buttons {
          display: flex;
          flex-direction: row;
          gap: 10px;
          flex-wrap: nowrap;
        }

        .auth-btn {
          position: relative;
          bottom: -3px;
          min-width: 0px;
          padding: 7px 15px;
          font-size: 0.95rem;

        }

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

          .auth-buttons {
            gap: 8px;
          }

          .auth-btn {
            position: relative;
            bottom: -5px;
            min-width: 90px;
            padding: 6px 12px;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .auth-btn {
            min-width: 80px;
            font-size: 0.8rem;
            padding: 5px 10px;
          }
        }
      `}</style>
    </div>
  );
}
