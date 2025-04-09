import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Briefcase,
  FileText,
  Users,
  BarChart2,
} from "lucide-react"; // Lucide icons

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sectionStyle = {
    padding: "60px 20px",
  };

  // Card hover motion
  const cardHover = {
    whileHover: {
      scale: 1.06,
      boxShadow: "0 14px 28px rgba(0, 115, 177, 0.25)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: {
      rotate: [0, -10, 10, -10, 10, 0],
      scale: 1.2,
      transition: { duration: 0.6 },
    },
  };

  const offers = [
    {
      icon: <Briefcase size={36} color="#0073b1" />,
      title: "Live Job Listings",
      desc: "Daily updated job and internship opportunities for students.",
    },
    {
      icon: <FileText size={36} color="#0073b1" />,
      title: "Resume Workshops",
      desc: "Craft a standout resume with expert help and templates.",
    },
    {
      icon: <Users size={36} color="#0073b1" />,
      title: "Mock Interviews",
      desc: "Prepare with real interview scenarios and tips.",
    },
    {
      icon: <BarChart2 size={36} color="#0073b1" />,
      title: "Company Dashboard",
      desc: "Connect directly with recruiters and track applications.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        lineHeight: 1.6,
        userSelect: "none", // 👈 disables text selection globally on this page
      }}
    >
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{
          background: "linear-gradient(135deg, #004080, #0073b1)",
          color: "white",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <motion.h1
          style={{ fontSize: "2.8rem", fontWeight: "bold" }}
          variants={fadeInUp}
        >
          About BPIT Placement Portal
        </motion.h1>
        <motion.p
          style={{
            fontSize: "1.2rem",
            marginTop: "20px",
            maxWidth: "700px",
            margin: "auto",
          }}
          variants={fadeInUp}
        >
          Connecting BPIT students with top industry leaders and placement
          opportunities.
        </motion.p>

        <DotLottieReact
          src="https://lottie.host/304379fa-3c27-4f37-a5ed-09081c78f024/ibgPneoRYw.lottie"
          loop
          autoplay
        />
      </motion.section>

      {/* Mission Section */}
      <motion.section
        style={{ ...sectionStyle, backgroundColor: "#f8f9fa" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px" }}>Our Mission</h2>
          <p style={{ fontSize: "1.1rem" }}>
            Our mission is to empower students with access to direct placement
            opportunities, up-to-date job listings, and real-time company
            engagement, all within our own platform.
          </p>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        style={{ ...sectionStyle, backgroundColor: "#ffffff" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px" }}>Our Vision</h2>
          <p style={{ fontSize: "1.1rem" }}>
            To eliminate dependency on third-party platforms and create a
            centralized, transparent system for all placement-related activities
            at BPIT.
          </p>
        </div>
      </motion.section>

      {/* What We Offer Section */}
      <motion.section
        style={{ ...sectionStyle, backgroundColor: "#f8f9fa" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
            What We Offer
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {offers.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={cardHover.whileHover}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "30px 20px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  flex: "1 1 220px",
                  maxWidth: "250px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  style={{ marginBottom: "15px" }}
                >
                  {item.icon}
                </motion.div>
                <h5 style={{ fontWeight: 600 }}>{item.title}</h5>
                <p style={{ fontSize: "0.95rem" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
