import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  const fecha = new Date().getFullYear();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemLeftVariants = {
    hidden: { x: -80, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const itemRightVariants = {
    hidden: { x: 80, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="footer-container">
      <footer className="footer">
        {/* Left Content */}
        <motion.div
          className="footer-sections"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          {/* Quick Links */}
          <motion.div className="footer-column" variants={itemLeftVariants}>
            <h4 className="footer-title" style={{ userSelect: 'none' }}>
              Quick Links
            </h4>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Faq">FAQs</Link></li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div className="footer-column" variants={itemLeftVariants}>
            <h4 className="footer-title" style={{ userSelect: 'none' }}>
              Legal
            </h4>
            <ul className="footer-list">
              <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
              <li><Link to="/TermsOfService">Terms of Service</Link></li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="footer-right"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          <div className="footer-icons">
            {[
              {
                href: "https://deepak-pandey1.github.io/Portfolio-Deepak-Pandey/#/",
                icon: "bi-twitter",
                label: "Twitter",
                className: "twitter",
              },
              {
                href: "https://www.facebook.com/profile.php?id=100007825186951",
                icon: "bi-facebook",
                label: "Facebook",
                className: "facebook",
              },
              {
                href: "https://www.linkedin.com/in/deepak-pandey786/",
                icon: "bi-linkedin",
                label: "LinkedIn",
                className: "linkedin",
              },
              {
                href: "https://www.instagram.com/the_deepak_pandey/",
                icon: "bi-instagram",
                label: "Instagram",
                className: "instagram",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`footer-icon ${social.className}`}
                aria-label={social.label}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 10,
                  delay: i * 0.2, // stagger effect
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <i className={`bi ${social.icon}`}></i>
              </motion.a>

            ))}
          </div>
          <motion.span
            className="footer-text"
            variants={itemRightVariants}
            style={{ userSelect: 'none' }}
          >
            &copy; {fecha} All Rights Reserved.
          </motion.span>
          <motion.span
            className="footer-credit"
            variants={itemRightVariants}
            style={{ userSelect: 'none' }}
          >
            Made by Deepak Pandey
          </motion.span>
        </motion.div>
      </footer>

      <style>{`
        .footer-container {
          background-color: #e7eaf6;
          width: 100%;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
          overflow-x: hidden;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 40px;
          flex-wrap: wrap;
          gap: 30px;
        }

        .footer-sections {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
        }

        .footer-column {
          min-width: 150px;
          flex: 1;
        }

        .footer-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 12px;
          color: #333;
          border-bottom: 2px solid #ccc;
          display: inline-block;
          padding-bottom: 4px;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 10px;
        }

        .footer-list a {
          text-decoration: none;
          color: #555;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.3s ease;
        }

        .footer-list a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: #555;
          transition: width 0.3s ease;
        }

        .footer-list a:hover {
          color: #000;
        }

        .footer-list a:hover::after {
          width: 100%;
        }

        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .footer-icons {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footer-icon {
  transform: none !important;
}


        .footer-icon {
          font-size: 24px;
          transition: transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
          color: #555;
        }

        .footer-icon:hover {
          transform: translateY(-4px) scale(1.2);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .footer-icon.twitter:hover {
          color: #1da1f2;
        }

        .footer-icon.facebook:hover {
          color: #1877f2;
        }

        .footer-icon.linkedin:hover {
          color: #0077b5;
        }

        .footer-icon.instagram:hover {
          color: #e4405f;
        }

        .footer-text, .footer-credit {
          color: #666;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-credit {
          font-size: 13px;
          font-weight: 300;
        }

        /* --- RESPONSIVE MEDIA QUERIES --- */
        @media (max-width: 1024px) {
          .footer {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-sections {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }

          .footer-right {
            align-items: center;
            margin-top: 30px;
          }

          .footer-column {
            flex: none;
            width: 100%;
            max-width: 300px;
          }

          .footer-icons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 30px 20px;
          }

          .footer-title {
            font-size: 16px;
          }

          .footer-list a {
            font-size: 14px;
          }

          .footer-icon {
            font-size: 22px;
          }

          .footer-text, .footer-credit {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
