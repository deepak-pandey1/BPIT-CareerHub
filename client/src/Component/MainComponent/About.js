import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Briefcase, FileText, Users, BarChart2 } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import ProgressBar from '../ProgressBar/ProgressBar';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const sectionStyle = {
    padding: "80px 20px",
    boxSizing: "border-box",
  };

  const cardHover = {
    whileHover: {
      scale: 1.08,
      boxShadow: "0 18px 36px rgba(0, 115, 177, 0.2)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: {
      rotate: [0, -10, 10, -10, 10, 0],
      scale: 1.3,
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

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        lineHeight: 1.7,
        userSelect: "none",
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
          padding: isMobile ? "40px 20px" : "80px 20px",
          borderRadius: "8px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ProgressBar progress={50} /> {/* Adjust the progress value as needed */}
        <motion.h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "20px",
            letterSpacing: "1px",
          }}
          variants={fadeInUp}
        >
          About BPIT Placement Portal
        </motion.h1>
        <motion.p
          style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            marginTop: "10px",
            maxWidth: isMobile ? "90%" : "700px",
            margin: "auto",
          }}
          variants={fadeInUp}
        >
          Connecting BPIT students with top industry leaders and placement
          opportunities.
        </motion.p>

        <div style={{ marginTop: "40px", maxWidth: isMobile ? "300px" : "500px", margin: "auto" }}>
                   <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
        <DotLottieReact
          src="https://lottie.host/304379fa-3c27-4f37-a5ed-09081c78f024/ibgPneoRYw.lottie"
          loop
          autoplay
        />
      </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        style={{ ...sectionStyle, backgroundColor: "#f8f9fa" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "2rem",
              color: "#004080",
              fontWeight: "600",
            }}
          >
            Our Mission
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#555555" }}>
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
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "2rem",
              color: "#004080",
              fontWeight: "600",
            }}
          >
            Our Vision
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#555555" }}>
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
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px",
              fontSize: "2rem",
              color: "#004080",
              fontWeight: "600",
            }}
          >
            What We Offer
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {offers.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileHover={cardHover.whileHover}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "40px 20px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  flex: "1 1 220px",
                  maxWidth: "260px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  boxSizing: "border-box",
                }}
              >
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  style={{
                    marginBottom: "20px",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  {item.icon}
                </motion.div>
                <h5
                  style={{
                    fontWeight: 700,
                    marginBottom: "10px",
                    color: "#333333",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.title}
                </h5>
                <p style={{ fontSize: "0.95rem", color: "#555555" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px;
          }
          h1 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1rem;
          }
          .offer-card {
            max-width: 100%;
            margin: 10px 0;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }
          .offer-card {
            flex: 1 1 100%;
            max-width: 100%;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
