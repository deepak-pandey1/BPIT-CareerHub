import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { UserContext } from '../UserContext.js';
import { useNavigate } from 'react-router-dom';
import './Company.css';

export default function Company() {
  const { username } = useContext(UserContext);
  const navigate = useNavigate();
  const isLoggedIn = !!username;

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const companies = [
    {
      name: "BYJU'S",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BYJU%27S_logo.svg/2560px-BYJU%27S_logo.svg.png",
      role: "Educational Content Developer",
      package: "₹6 LPA",
    },
    {
      name: "WhiteHat Jr",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/63/WhiteHat_Jr_logo.png",
      role: "Coding Instructor",
      package: "₹5.5 LPA",
    },
    {
      name: "Vedantu",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Vedantu_logo.png",
      role: "Online Tutor",
      package: "₹4.2 LPA",
    },
    {
      name: "Toppr",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Toppr_logo.png",
      role: "Academic Consultant",
      package: "₹4.8 LPA",
    },
    {
      name: "Cuemath",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Cuemath_logo.png",
      role: "Math Educator",
      package: "₹5.2 LPA",
    },
    {
      name: "Unacademy",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Unacademy_logo.svg",
      role: "Subject Matter Expert",
      package: "₹6.5 LPA",
    },
    {
      name: "Khan Academy",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Khan_Academy_logo.svg",
      role: "Curriculum Designer",
      package: "₹7 LPA",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <div className="company-wrapper position-relative" style={{ minHeight: '100vh', padding: '1rem' }}>
      {!isLoggedIn && (
        <div className="login-overlay">
          <div className="login-overlay-content">
            <p className="fs-5 fw-semibold mb-0">Please login to view company details</p>
            <button onClick={handleLoginRedirect} className="btn btn-dark px-4 py-2">
              Login
            </button>
          </div>
        </div>
      )}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="text-center text-black my-4">Your Career Starts Here: Meet Our Top Recruiters</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {companies.map((company, index) => (
            <motion.div
              className="col"
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="card company-card h-100 p-3 shadow-sm"
                whileHover={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)' }}
              >
                <img
                  src={company.img}
                  className="card-img-top mb-3"
                  alt={company.name}
                  style={{ objectFit: 'contain', height: '140px' }}
                />
                <div
                  className="card-body d-flex flex-column text-center"
                  style={{
                    filter: isLoggedIn ? 'none' : 'blur(3px)',
                    pointerEvents: isLoggedIn ? 'auto' : 'none',
                  }}
                >
                  <h5 className="card-title mb-2">{company.name}</h5>
                  <p className="mb-1"><strong>Role:</strong> {company.role}</p>
                  <p className="mb-3"><strong>Package:</strong> {company.package}</p>
                  <button className="btn clr mt-auto" disabled={!isLoggedIn}>
                    Apply for Jobs
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
