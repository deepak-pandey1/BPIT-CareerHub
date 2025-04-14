import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UserContext } from '../UserContext'; // Assuming this is where context is
import './Company.css'; // Reuse same styles for blur overlay

const Faq = () => {
  const { username } = useContext(UserContext);
  const isLoggedIn = !!username;
  const location = useLocation();
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Block scroll on mobile when on /Faq route
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (location.pathname === '/Faq' && isMobile) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [location.pathname]);

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div style={styles.container} className="faq-wrapper position-relative">
      {/* Fixed Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.fixedHeader}
      >
        <h2>Asked Questions with AI</h2>
      </motion.div>

      {/* Login Overlay */}
      {!isLoggedIn && (
        <div className="login-overlay">
          <div className="login-overlay-content">
            <p className="fs-5 fw-semibold mb-0">Please login to access the FAQ Chatbot</p>
            <button onClick={handleLoginRedirect} className="btn btn-dark px-4 py-2">
              Login
            </button>
          </div>
        </div>
      )}

      {/* Chatbot only visible if logged in */}
      {isLoggedIn && location.pathname === '/Faq' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={styles.chatbotFullScreen}
        >
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={styles.loadingWrapper}
              >
                <div style={styles.spinner}></div>
                <h2 style={styles.loadingText}>AI Chatbot is Loading...</h2>
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/royTwUXoNNzJhnxrn4_ag"
              style={styles.iframeFull}
              title="Chatbot"
            ></iframe>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                height: '30px',
                width: '100%',
                background: 'white',
              }}
            ></div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, #e7eaf6, #e7eaf6)',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  fixedHeader: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1001,
    padding: '20px 0',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#004085',
    borderBottom: '1px solid #ccc',
  },
  chatbotFullScreen: {
    position: 'fixed',
    top: '80px',
    left: 0,
    width: '100vw',
    height: 'calc(100vh - 80px)',
    zIndex: 999,
    backgroundColor: '#e7eaf6',
  },
  loadingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    zIndex: 1000,
  },
  spinner: {
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #113f67',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    marginTop: '20px',
    fontSize: '1.5rem',
    color: '#113f67',
  },
  iframeFull: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

export default Faq;
