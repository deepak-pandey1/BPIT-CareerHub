import React, { useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Community() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
      }
      // Remove the listener after first interaction
      window.removeEventListener('click', playAudio);
    };

    // Add listener to detect first user interaction
    window.addEventListener('click', playAudio);

    return () => {
      window.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/ss1.mp3" />

      <DotLottieReact
      src="https://lottie.host/4718dd37-a2e2-4323-a7ee-42241d0cb7c3/EJjKwcqT9H.lottie"
      loop
      autoplay
    />

<DotLottieReact
      src="https://lottie.host/3ca80eb0-262d-4543-8596-33a7481ba34f/CBlr7Ovjm9.lottie"
      loop
      autoplay
    />

<DotLottieReact
      src="https://lottie.host/bc62485b-291c-4f89-856a-b32d21b52649/TPbUDqXRgG.lottie"
      loop
      autoplay
    />
    </div>
  );
}

export default Community;
