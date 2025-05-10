import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/mqapwken", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert(result?.error || "Something went wrong!");
      }
    } catch (err) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        userSelect: "none",
        background: "linear-gradient(135deg, #e7eaf6, #e7eaf6)",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* Contact Form */}
        <motion.div
          style={{
            flex: "1 1 500px",
            backgroundColor: "#ffffff",
            color: "#333",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              marginBottom: "25px",
              fontWeight: "bold",
              color: "#0073b1",
              fontSize: "2rem",
            }}
          >
            {submitted ? "Thank You! 🎉" : "Get in Touch"}
          </motion.h2>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: "1.1rem", color: "#444" }}
            >
              Your message has been received. We'll get back to you soon.
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                style={inputStyle}
                whileFocus={{ scale: 1.05, rotateZ: 3 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                pattern="^\d{10}$"
                style={inputStyle}
                whileFocus={{ scale: 1.05, rotateZ: 3 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                style={inputStyle}
                whileFocus={{ scale: 1.05, rotateZ: 3 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                rows="5"
                style={{ ...inputStyle, resize: "none" }}
                whileFocus={{ scale: 1.05, rotateZ: 3 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                style={{
                  ...buttonStyle,
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Contact Info with Animations */}
        <motion.div
          style={{
            flex: "1 1 400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* NEW LOTTIE ANIMATION (above contact info) */}
          <DotLottieReact
            src="https://lottie.host/6fbda686-629c-4de8-9655-c877d718af66/sJcafziG9p.lottie"
            loop
            autoplay
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "auto",
              marginBottom: "20px",
            }}
          />

          {/* EXISTING LOTTIE ANIMATION */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 2, -2, 0],
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <DotLottieReact
              src="https://lottie.host/926b9bd8-243f-4d1d-bbee-46c3f61a6d5b/BlaU0zfrqV.lottie"
              loop
              autoplay
              style={{
                width: "100%",
                maxWidth: "350px",
                marginBottom: "20px",
              }}
            />
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            style={{ textAlign: "left", width: "100%", color: "#333" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3
              style={{
                marginBottom: "20px",
                fontWeight: "bold",
                color: "#0073b1",
              }}
            >
              Contact Info
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <motion.li
                style={infoItemStyle}
                animate={{ x: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <MapPin size={22} style={{ marginRight: 10, color: "#0073b1" }} />
                BPIT, Rohini Sec 11, Delhi 110085
              </motion.li>
              <motion.li
                style={infoItemStyle}
                animate={{ x: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              >
                <Phone size={22} style={{ marginRight: 10, color: "#0073b1" }} />
                +91 987654321
              </motion.li>
              <motion.li
                style={infoItemStyle}
                animate={{ x: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <Mail size={22} style={{ marginRight: 10, color: "#0073b1" }} />
                bpit33334@gmail.com
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "14px 18px",
  fontSize: "1rem",
  borderRadius: "12px",
  border: "1px solid #ccc",
  outline: "none",
  transition: "border 0.3s, box-shadow 0.3s",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const buttonStyle = {
  padding: "14px",
  background: "#0073b1",
  color: "#fff",
  fontSize: "1rem",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  boxShadow: "0 6px 20px rgba(0, 115, 177, 0.2)",
  transition: "background-color 0.3s, box-shadow 0.3s",
};

const infoItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
  fontSize: "1.1rem",
};
