import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UserContext } from '../UserContext.js'; // Import UserContext
import './Faq.css'; // Import new Faq.css for overlay styles

const Faq = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = useContext(UserContext); // Access username from context
  const isLoggedIn = !!username; // Check if user is logged in
  const [showMessage, setShowMessage] = useState(true);

  // Redirect to login page
  const handleLoginRedirect = () => {
    navigate('/login');
  };

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

  return (
    <div style={styles.container}>
      {/* Keyframes for Spinner */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Login Overlay */}
      {!isLoggedIn && (
        <div className="login-overlay">
          <div className="login-overlay-content">
            <p className="fs-5 fw-semibold mb-0">Please login to access the FAQ chatbot</p>
            <button onClick={handleLoginRedirect} className="btn btn-dark px-4 py-2">
              Login
            </button>
          </div>
        </div>
      )}

      {/* Fixed Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          ...styles.fixedHeader,
          filter: isLoggedIn ? 'none' : 'blur(3px)', // Blur header if not logged in
          pointerEvents: isLoggedIn ? 'auto' : 'none', // Disable interaction if not logged in
        }}
      >
        <h2>Asked Questions with AI</h2>
      </motion.div>

      {location.pathname === '/Faq' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            ...styles.chatbotFullScreen,
            filter: isLoggedIn ? 'none' : 'blur(3px)', // Blur content if not logged in
            pointerEvents: isLoggedIn ? 'auto' : 'none', // Disable interaction if not logged in
          }}
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
  iframeFull: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  loadingWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1002,
    background: 'rgba(255,255,255,0.9)',
    padding: '30px 40px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #ccc',
    borderTop: '4px solid #004085',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto',
  },
  loadingText: {
    fontSize: '1.2rem',
    marginTop: '15px',
    color: '#004085',
    fontWeight: 600,
  },
};

export default Faq;