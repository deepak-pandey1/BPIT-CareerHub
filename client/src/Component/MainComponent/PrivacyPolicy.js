import React, { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Info,
  Lock,
  Share2,
  Cookie,
  UserCheck,
  RefreshCcw,
  Mail
} from 'lucide-react';

export default function PrivacyPolicy() {
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
    <div className="privacy-wrapper">
      <div className="lottie-header">
        <DotLottieReact
          src="https://lottie.host/23e7a87d-15dc-40a3-a9e0-b31fd2cbc4b9/fXFZEem2mR.lottie"
          loop
          autoplay
          style={{ height: '250px' }}
        />
        <h1 className="title">Privacy Policy</h1>
        <p className="subtitle">Your trust matters. Here's how we handle your data.</p>
      </div>

      <div className="policy-content">
        {[
          {
            heading: "1. Information We Collect",
            points: [
              "Personal details like name, email, and contact info.",
              "Technical data such as IP address and browser type.",
              "Usage data from interactions with our site."
            ]
          },
          {
            heading: "2. How We Use Your Information",
            points: [
              "To deliver and improve our services.",
              "To send updates, promotions, or notifications.",
              "To enhance your user experience."
            ]
          },
          {
            heading: "3. Data Security",
            desc: "We implement encryption, firewalls, and access controls to safeguard your data. However, no method of transmission over the internet is 100% secure."
          },
          {
            heading: "4. Third-Party Sharing",
            points: [
              "With vendors helping us deliver services.",
              "To comply with legal requirements.",
              "With your explicit consent."
            ]
          },
          {
            heading: "5. Cookies",
            desc: "Cookies help us understand user behavior and improve our services. You can control cookies through your browser settings."
          },
          {
            heading: "6. Your Rights",
            desc: "You can request access, correction, or deletion of your personal data. Just contact us using the details below."
          },
          {
            heading: "7. Changes to This Policy",
            desc: "We may update this policy occasionally. We recommend reviewing this page periodically for any updates."
          },
          {
            heading: "Contact Us",
            desc: "Have questions? Reach out to us anytime at:",
            extra: <a href="mailto:contact@example.com">placement@bpitindia.com</a>
          }
        ].map((section, index) => (
            <motion.div
            className="policy-card"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: false }} // <- updated line
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
        .privacy-wrapper {
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
          color: #1a1a1a;
          margin-top: 20px;
          color: #ffffff;
        }

        .subtitle {
          font-size: 20px;
          color: #555;
          margin-top: 12px;
          color: #ffffff;
        }

        .policy-content {
          max-width: 960px;
          margin: 0 auto;
          display: grid;
          gap: 30px;
        }

        .policy-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .policy-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
        }

        .policy-card h2 {
          font-size: 24px;
          color: #2c3e50;
          margin: 0;
        }

        .policy-card p {
          font-size: 17px;
          color: #333;
          line-height: 1.7;
          margin-top: 12px;
        }

        .policy-card ul {
          list-style: disc;
          margin-left: 25px;
          color: #444;
          font-size: 16px;
          line-height: 1.6;
        }

        .policy-card li {
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

          .policy-card h2 {
            font-size: 22px;
          }

          .policy-card {
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

          .policy-card {
            padding: 20px;
          }

          .policy-card h2 {
            font-size: 20px;
          }

          .policy-card p,
          .policy-card li {
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

          .policy-card {
            padding: 18px;
          }

          .policy-card h2 {
            font-size: 18px;
          }

          .policy-card p,
          .policy-card li {
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
