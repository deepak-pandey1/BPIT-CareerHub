import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = ({ fadeOut }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 10;
        return next >= 100 ? 100 : next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : 'fade-in'}`}>
      {/* Progress Bar */}
      <div className={`loader-progress-bar-container ${fadeOut ? 'bar-fade-out' : 'bar-fade-in'}`}>
        <div
          className="loader-progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Lottie animation */}
      <DotLottieReact
        src="https://lottie.host/af2163d0-3315-44b8-a3a2-bcaea1516ffb/GrS0NwGP50.lottie"
        loop
        autoplay
        className="loader-lottie"
      />

      <style jsx>{`
        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          background-color: #e7eaf6;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          transition: opacity 0.6s ease;
        }

        .fade-in {
          opacity: 1;
        }

        .fade-out {
          opacity: 0;
          pointer-events: none;
        }

        .loader-progress-bar-container {
          position: absolute;
          top: 0;
          left: 0;
          height: 4px;
          width: 100%;
          background-color: #d0d0d0;
          border-radius: 0 2px 2px 0;
          overflow: hidden;
          transition: opacity 0.5s ease;
        }

        .bar-fade-in {
          opacity: 1;
        }

        .bar-fade-out {
          opacity: 0;
        }

        .loader-progress-bar-fill {
          height: 100%;
          background: #0073b1;
          transition: width 0.4s ease-in-out;
        }

        .loader-lottie {
          width: 50%;
          height: 50%;
        }
        
        @media (max-width: 768px) {
          .loader-lottie {
            width: 70%;
            height: 70%;
          }
        }


        @media (max-width: 768px), (max-width: 576px) {
          .loader-container {
            height: 100vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
