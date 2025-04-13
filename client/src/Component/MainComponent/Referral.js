import React, { useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

function Community() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
      }
      window.removeEventListener('click', playAudio);
    };

    window.addEventListener('click', playAudio);

    return () => {
      window.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 p-4">
      <audio ref={audioRef} src="/ss1.mp3" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-lg w-full shadow-xl rounded-2xl  p-6"
      >
        <DotLottieReact
          src="https://lottie.host/2f8fc659-cf92-46e9-986a-298f7754f602/nfiYSGsdKK.lottie"
          loop
          autoplay
        />
      </motion.div>
    </div>
  );
}

export default Community;