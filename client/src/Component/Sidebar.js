import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserShield ,
  FaSignOutAlt,
} from "react-icons/fa";
import { UserContext } from "./UserContext.js";
import { motion, AnimatePresence } from "framer-motion";
import {  FaLaptopCode, FaGamepad, FaUsers, FaShareAlt } from "react-icons/fa";


export default function Sidebar() {
  const { username, setUsername } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const getInitial = (name) => name?.charAt(0)?.toUpperCase();

  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/login");
  };

  if (!username) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="avatar-button"
            onClick={() => setIsOpen(true)}
            title={username}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {getInitial(username)}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sidebar"
            ref={sidebarRef}
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="sidebar-header">
              <div className="profile-box">
                <div className="sidebar-avatar">{getInitial(username)}</div>
                <div className="sidebar-name">{username}</div>
              </div>
              {/* <button className="close-btn" onClick={() => setIsOpen(false)}>
                ×
              </button> */}
            </div>


            <ul className="sidebar-menu">
              <li>
                <Link to="/Admin" onClick={() => setIsOpen(false)}>
                  <FaUserShield  /> <span>Admin Panel</span>
                </Link>
              </li>
              <li>
                <Link to="/Internship" onClick={() => setIsOpen(false)}>
                  <FaLaptopCode /> <span>Internship Portal</span>
                </Link>
              </li>
              <li>
                <Link to="/Gamification" onClick={() => setIsOpen(false)}>
                  <FaGamepad /> <span>Gamification</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/Alumni" onClick={() => setIsOpen(false)}>
                  <FaUsers /> <span>Network with Alumni</span>
                </Link>
              </li>
              <li>
                <Link to="/Referral" onClick={() => setIsOpen(false)}>
                  <FaShareAlt /> <span>Job Referral Hub</span>
                </Link>
              </li> */}
            </ul>



            <div className="logout-section">
              <button className="logout-btn" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`

      .sidebar-container {
  position: relative;
  height: 100px; /* or your preferred height */
  // background-color: #eee;
}

.avatar-button {
  position: absolute;
  left: 0;
  top: 10px;
  margin-left: -19px;
}



        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: black;
          opacity: 0.5;
          z-index: 1099;
        }

        .avatar-button {
          top: 10px;
          left: 30px;
          width: 45px;
          height: 45px;
          background-color: #2a9d8f;
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          z-index: 1101;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 240px;
          height: 100vh;
          z-index: 1100;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(20px);
          background-color: #f1f1f1; /* brightened background */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px 16px 0;
          border-bottom: 1px solid #ddd;
            padding-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* soft bottom shadow */
        }

        .profile-box {
          display: flex;
          flex-direction: row; /* updated to horizontal layout */
          align-items: center;
          gap: 12px;
        }

        .sidebar-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #2a9d8f;
          color: white;
          font-size: 1.3rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-name {
          color: #113f67;
          font-size: 1rem;
          font-weight: 600;
          max-width: 120px;
          word-wrap: break-word;
        }

        .close-btn {
          background: none;
          border: none;
          color: #113f67;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .sidebar-menu {
          list-style: none;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex-grow: 1;
        }

        .sidebar-menu li a {
          display: flex;
          align-items: center;
          color:  #113f67;
          text-decoration: none;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 6px;
          transition: background 0.2s;
        }

        .sidebar-menu li a:hover {
          background-color: #e7eaf6;
        }

        .logout-section {
          padding: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);

          border-top: 1px solid #ddd;
            padding-top: 30px;
  margin-top: 8px;
        }

        .logout-btn {
          position: relative;
          bottom: 20px;
          width: 100%;
          padding: 10px;
          background-color: #113f67;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.2s ease-in-out;
        }

        .logout-btn:hover {
          background-color: rgb(0, 52, 97);
        }

        @media (max-width: 768px) {
          .logout-btn {
            bottom: 50px;
          }

                  .logout-section {
          padding: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);

          border-top: 1px solid #ddd;
            padding-top: 60px;
  margin-top: 8px;
        }
        }
      `}</style>
    </>
  );
}
