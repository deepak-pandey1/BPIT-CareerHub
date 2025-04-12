import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = ({ fadeOut }) => {
  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <DotLottieReact
        src="https://lottie.host/af2163d0-3315-44b8-a3a2-bcaea1516ffb/GrS0NwGP50.lottie"
        loop
        autoplay
        style={{ width: '70%', height: '70%' }}  // Inline style for smaller size
      />
      <style jsx>{`
        .loader-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          background-color: #e7eaf6;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          opacity: 1;
          transform: scale(1);
          visibility: visible;
          transition: opacity 1.2s ease, transform 1.2s ease, visibility 1.2s ease;
        }

        .fade-out {
          opacity: 0;
          transform: scale(0.95);
          visibility: hidden;
        }

        @media (max-width: 768px) {
          .loader-container {
            height: 100vh;
          }
        }

        @media (max-width: 576px) {
          .loader-container {
            height: 100vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
