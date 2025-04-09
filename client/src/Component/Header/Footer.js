import React from 'react';

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        {/* Left side */}
        <div className="footer-left">
          {/* <Link to="/" className="footer-home-link">
            <i className="bi bi-house-door-fill"></i> Home
          </Link> */}
          <span className="footer-text">© 2025 Company, Inc.</span>
        </div>

        {/* Right side - Social icons */}
        <div className="footer-icons">
          <a href="#" className="footer-icon twitter" aria-label="Twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="footer-icon facebook" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="footer-icon linkedin" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="footer-icon instagram" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </footer>

      {/* Inline CSS Styles */}
      <style>{`
        .footer-container {
          background-color: #e7eaf6;
          margin-top: 50px;
          width: 100%;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          flex-wrap: wrap;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 16px;
          flex-wrap: wrap;
        }

        .footer-home-link {
          text-decoration: none;
          color: #000;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
        }

        .footer-home-link:hover {
          color: #343a40;
          transform: scale(1.05);
        }

        .footer-text {
          color: #666;
        }

        .footer-icons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .footer-icon {
          font-size: 24px;
          transition: transform 0.3s ease, color 0.3s ease;
          color: #555;
        }

        .footer-icon:hover {
          transform: translateY(-4px) scale(1.2);
        }

        /* Color on hover */
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

        /* Tablet and below */
        @media (max-width: 768px) {
          .footer {
            flex-direction: column;
            align-items: flex-start;
            padding: 30px 20px;
            gap: 20px;
          }

          .footer-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .footer-icons {
            justify-content: flex-start;
            gap: 15px;
          }
        }

        /* Small screen tweaks */
        @media (max-width: 480px) {
          .footer {
            align-items: center;
            text-align: center;
          }

          .footer-left, .footer-icons {
            align-items: center;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
