import React, { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { ShieldCheck, Info, Lock, Share2, Cookie, UserCheck, RefreshCcw, Mail } from 'lucide-react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iconMap = [
    <Info key="info" size={28} color="#007BFF" />,
    <ShieldCheck key="shield" size={28} color="#007BFF" />,
    <Lock key="lock" size={28} color="#007BFF" />,
    <Share2 key="share" size={28} color="#007BFF" />,
    <Cookie key="cookie" size={28} color="#007BFF" />,
    <UserCheck key="user" size={28} color="#007BFF" />,
    <RefreshCcw key="refresh" size={28} color="#007BFF" />,
    <Mail key="mail" size={28} color="#007BFF" />
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
    })
  };

  return (
    <div className="terms-wrapper">
      <div className="lottie-header">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          >
            <DotLottieReact
            src="https://lottie.host/f7a9f660-24d8-4f05-8285-bff2d8b98ddb/eEYLpRZlMd.lottie"
            loop
            autoplay
            style={{ height: '250px' }}
          />
        </motion.div>
        <h1 className="title">Terms of Service</h1>
        <p className="subtitle">Please read these Terms of Service carefully before using BPIT's Placement Portal.</p>
      </div>

      <div className="terms-content">
        {[
          {
            heading: "1. Acceptance of Terms",
            points: [
              "By using the BPIT Placement Portal, you agree to abide by these Terms of Service.",
              "These terms apply to all users including students, alumni, faculty, and recruiters."
            ]
          },
          {
            heading: "2. User Eligibility",
            points: [
              "Only registered BPIT students and authorized users can access placement-related features.",
              "Users must provide accurate academic and personal information for registration and verification."
            ]
          },
          {
            heading: "3. Code of Conduct",
            points: [
              "Users must not engage in any fraudulent or misleading activities on the portal.",
              "All users are expected to behave professionally during the placement process, including communication with recruiters."
            ]
          },
          {
            heading: "4. Data Usage and Privacy",
            points: [
              "Student information will only be shared with companies for placement-related activities.",
              "We respect your privacy and ensure data is handled in accordance with our Privacy Policy."
            ]
          },
          {
            heading: "5. Company Interactions",
            desc: "The BPIT Placement Cell facilitates interactions between students and recruiters but is not responsible for hiring decisions or company actions. Students must verify job roles and packages before accepting offers."
          },
          {
            heading: "6. Disqualification Policy",
            points: [
              "Students providing false information or breaching rules may be disqualified from placement opportunities.",
              "Repeated violations may lead to permanent suspension from the placement portal."
            ]
          },
          {
            heading: "7. Policy Updates",
            desc: "The BPIT Training & Placement Cell reserves the right to update these Terms of Service at any time. Continued use of the portal implies acceptance of the latest terms."
          },
          {
            heading: "8. Contact Information",
            desc: "For any queries related to the placement process or these terms, contact the Training and Placement Cell at:",
            extra: <a href="mailto:placement@bpitindia.com">placement@bpitindia.com</a>
          }
        ].map((section, index) => (
          <motion.div
            className="terms-card"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: false }}
            custom={index}
            variants={fadeUp}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {iconMap[index]}
              <h2>{section.heading}</h2>
            </div>
            {section.desc && <p>{section.desc}</p>}
            {section.points && (
              <ul>
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
            {section.extra && <p>{section.extra}</p>}
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .terms-wrapper {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(180deg, #f5f8fc 0%, #ffffff 100%);
          padding: 30px 20px;
        }

        .lottie-header {
          text-align: center;
          padding: 50px 20px 20px;
          background: linear-gradient(135deg, #004080, #0073b1);
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          margin-bottom: 40px;
          transition: all 0.3s ease;
          color: white;
        }

        .title {
          font-size: 42px;
          color: #ffffff;
          margin-top: 20px;
        }

        .subtitle {
          font-size: 20px;
          color: #ffffff;
          margin-top: 12px;
        }

        .terms-content {
          max-width: 960px;
          margin: 0 auto;
          display: grid;
          gap: 30px;
        }

        .terms-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .terms-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
        }

        .terms-card h2 {
          font-size: 24px;
          color: #2c3e50;
          margin: 0;
        }

        .terms-card p {
          font-size: 17px;
          color: #333;
          line-height: 1.7;
          margin-top: 12px;
        }

        .terms-card ul {
          list-style: disc;
          margin-left: 25px;
          color: #444;
          font-size: 16px;
          line-height: 1.6;
        }

        .terms-card li {
          margin-bottom: 10px;
        }

        a {
          color: #007BFF;
          text-decoration: none;
          font-weight: 500;
        }

        a:hover {
          text-decoration: underline;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .title {
            font-size: 36px;
          }

          .subtitle {
            font-size: 18px;
          }

          .terms-card h2 {
            font-size: 22px;
          }

          .terms-card {
            padding: 25px;
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 30px;
          }

          .subtitle {
            font-size: 16px;
          }

          .terms-card {
            padding: 20px;
          }

          .terms-card h2 {
            font-size: 20px;
          }

          .terms-card p,
          .terms-card li {
            font-size: 15px;
          }
            
        }

        @media (max-width: 480px) {
          .title {
            font-size: 26px;
          }

          .subtitle {
            font-size: 15px;
          }

          .terms-card {
            padding: 18px;
          }

          .terms-card h2 {
            font-size: 18px;
          }

          .terms-card p,
          .terms-card li {
            font-size: 14px;
          }

          .lottie-header {
            padding: 30px 10px 15px;
          }
        }
      `}</style>
    </div>
  );
}
