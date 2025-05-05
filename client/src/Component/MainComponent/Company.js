import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserContext } from '../UserContext.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap'; // Import Spinner from react-bootstrap
import './Company.css';

export default function Company() {
  const { username } = useContext(UserContext);
  const navigate = useNavigate();
  const isLoggedIn = !!username;

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to show spinner

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  // Fetch companies from the API
  const fetchCompanies = async () => {
    try {
      const res = await axios.get('https://bpit-careerhub.onrender.com/api/company/all');
      setCompanies(res.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      console.error('Error fetching companies:', err);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: 'spring',
        stiffness: 80,
      },
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div className="company-wrapper position-relative" style={{ minHeight: '100vh', padding: '1rem' }}>
      {!isLoggedIn && (
        <div className="login-overlay">
          <div className="login-overlay-content">
            <p className="fs-5 fw-semibold mb-0" style={{ userSelect: 'none' }}>Please login to view company details</p>
            <button onClick={handleLoginRedirect} className="btn btn-dark px-4 py-2">
              Login
            </button>
          </div>
        </div>
      )}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Animated Header */}
        {/* Main Heading */}
<motion.h2
  className="text-center fw-bold my-4 cool-heading"
  variants={headerVariants}
  initial="hidden"
  animate="visible"
  // whileHover={{ scale: 1.05, textShadow: '0px 0px 12px rgba(0, 123, 255, 1)' }}
>
  Your <span className="highlight-blue">Dream Job</span> Awaits: Meet the <span className="highlight-green">Recruiters</span>
</motion.h2>



        {/* Show spinner while loading data */}
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {companies.map((company, index) => (
              <motion.div
                className="col"
                key={company._id} // Using _id as key
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="card company-card h-100 p-3 shadow-lg rounded-3"
                  whileHover={{ boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)' }}
                >
                  {/* Avatar Circle */}
                  <div className="d-flex justify-content-center mb-3">
                    {company.img ? (
                      <img
                      src={company.img}
                      alt={company.name}
                      className="company-avatar"
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '4px solid #dee2e6',
                      }}
                    />
                    
                    ) : (
                      <div
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #6c63ff, #2575fc)',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '28px',
                          fontWeight: 'bold',
                        }}
                      >
                        {company.name?.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div
                    className="card-body d-flex flex-column text-center"
                    style={{
                      filter: isLoggedIn ? 'none' : 'blur(3px)',
                      pointerEvents: isLoggedIn ? 'auto' : 'none',
                    }}
                  >
                    <h5 className="card-title mb-2">{company.name}</h5>
<div>
  <span className="chip">Role: {company.role}</span>
  <span className="chip">Package: {company.package}</span>
</div>

                    <a
                      href={company.applylink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-primary mt-auto ${!isLoggedIn ? 'disabled' : ''}`}
                      style={{ pointerEvents: isLoggedIn ? 'auto' : 'none' }}
                    >
                      Apply for Jobs
                    </a>

                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
