import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {

  const [loading, setLoading] = useState(true);
  const [chatHeight, setChatHeight] = useState("calc(100vh - 65px)");

  useEffect(() => {

    const timer = setTimeout(() => setLoading(false), 1400);

    const updateHeight = () => {

      if (window.innerWidth <= 768) {
        // mobile (header + bottom nav)
        setChatHeight("calc(100vh - 130px)");
      } else {
        // desktop (navbar only)
        setChatHeight("calc(100vh - 65px)");
      }

    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateHeight);
    };

  }, []);

  return (

    <div style={styles.pageWrapper}>

      <div style={styles.chatContainer}>

        {/* Chat iframe with smooth appearance */}
        <motion.iframe
          src="https://www.chatbase.co/chatbot-iframe/royTwUXoNNzJhnxrn4_ag"
          title="AI Chat"
          style={{ ...styles.iframe, height: chatHeight }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.98 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Loader with fade animation */}
        <AnimatePresence>
          {loading && (
            <motion.div
              style={styles.loader}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={styles.spinner}></div>
              <p style={styles.loadingText}>Preparing AI Assistant...</p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>

  );
}

const styles = {

  pageWrapper: {
    width: "100%",
    background: "#f4f6fb",
    display: "flex",
    justifyContent: "center"
  },

  chatContainer: {
    width: "100%",
    padding: "10px",
    position: "relative"
  },

  iframe: {
    width: "100%",
    border: "none",
    borderRadius: "16px",
    background: "white",
    boxShadow: "0 10px 35px rgba(0,0,0,0.08)"
  },

  loader: {
    position: "fixed",
    inset: 0,
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(6px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999
  },

  spinner: {
    width: "42px",
    height: "42px",
    border: "4px solid #ddd",
    borderTop: "4px solid #113f67",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  },

  loadingText: {
    marginTop: "12px",
    fontSize: "14px",
    color: "#113f67",
    fontWeight: "500",
    letterSpacing: "0.3px"
  }

};