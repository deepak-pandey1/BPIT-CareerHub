import React, { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion  } from 'framer-motion';
import HighestPackageChart from '../Charts/HighestPackageChart';
import AveragePackageChart from '../Charts/AveragePackageChart';
import StudentsSelectedChart from '../Charts/StudentsSelectedChart';
import CompaniesVisitedChart from '../Charts/CompaniesVisitedChart';


const headingVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateX: -45,
    transformOrigin: 'center',
    perspective: 800,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const rowStyle = {
  display: 'flex',
  justifyContent: 'center', // center the group
  flexWrap: 'wrap',
  gap: '2%',                // small gap
};

const itemStyle = {
  flex: '1 1 300px',        // grow/shrink, base 300px
  maxWidth: '500px',        // never exceed 500px
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};



const sentence = "Placement is not just about getting a job, it's about stepping into your future.";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    userSelect: 'none',
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren"
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.6,
    },
  },
};


// Scroll animation for .hig images
const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

function AnimatedImage({ src, alt }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.img
      ref={ref}
      className="hig"
      src={src}
      alt={alt}
      variants={imageVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    />
  );
}

export default function Home() {
  const words = sentence.split(" ");

  useEffect(() => {
    const counters = document.querySelectorAll(".counter-numbers");

    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-number");
      let count = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count) + "+";
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCount();
    };

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            observerInstance.unobserve(counter);
          }
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });

    return () => {
      counters.forEach((counter) => {
        observer.unobserve(counter);
      });
    };
  }, []);

  return (
<motion.div
  key="home-page"
  className="home-anim-wrapper"
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 20,
    mass: 0.8,
    // overall entrance delay so sub‑animations finish cleanly
    delay: 0.1,
  }}
>

      {/* Hero Section */}
      <div
        className="responsive-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '100vh',
          flexDirection: 'row',

          position: 'relative',
        }}
      >
        <div
          className="px-5 content"
          style={{
            flex: 1,
            backgroundColor: '#e7eaf6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.3rem',
              textAlign: 'center',
            }}
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div
          className="px-5 content"
          style={{
            flex: 1,
            backgroundColor: '#e7eaf6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DotLottieReact
            src="https://lottie.host/49862dca-2ada-4e98-bd24-754890cf191f/JdqqMWzs9q.lottie"
            loop
            autoplay
          />
        </div>

        <style>
          {`
            @media (max-width: 767px) {
              .responsive-container {
                flex-direction: column !important;
                position: absolute;
                top: -58px;
              }
              .content {
                width: 100%;
                height: 50vh;
              }
            }
          `}
        </style>

        {/* Scroll Down Button - Only on Desktop */}
<button
  onClick={() => {
    const nextSection = document.querySelector('.scroll.container');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="scroll-down-btnss"
>


  <div className="mouse">
    <span className="arrow arrow1"></span>
    <span className="arrow arrow2"></span>
  </div>
</button>

<style>
{`
  .scroll-down-btnss {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  display: block;
  transition: transform 0.3s ease;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid #000;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: pulseBorder 2s infinite ease-in-out;
}

@keyframes pulseBorder {
  0%, 100% {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
}

.arrow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(-45deg);
  width: 12px;
  height: 12px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  opacity: 0;
  animation: fallDown 2s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
}

.arrow1 {
  animation-delay: 0s;
}

.arrow2 {
  animation-delay: 1s;
}

@keyframes fallDown {
  0% {
    top: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  90% {
    top: 100%;
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

@media (max-width: 767px) {
  .scroll-down-btnss {
    display: none;
  }
}

`}
</style>

      </div>

      <div className="scroll container" >
      <motion.h2
  style={{
    color: '#111',
    marginTop: '40px',
    textAlign: 'center',
    fontWeight: 'bold',
    // scales between 1.25rem (min) and 2rem (max), 
    // with an ideal size of 5vw
    fontSize: 'clamp(1.6rem, 5vw, 2rem)',
    textShadow: '0 6px 12px rgba(0, 0, 0, 0.25)',
    userSelect: 'none',
  }}
  variants={headingVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.6 }}
>
  Our Leading Recruiters
</motion.h2>

          <div className="row_companys">
            <div className="row_companys_slider">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/ZS_Associates.svg" alt="" className="row_company" />
              <img src="https://pbs.twimg.com/media/F55_v2RXwAACscS.png" alt="" className="row_company" />
              <img src="https://www.freshersvoice.com/wp-content/uploads/2019/03/Josh-Technology-Group-Off-Campus.jpg" alt="" className="row_company" />
              
              <img src="img/sap.png" alt="" className="row_company" />
              <img src="img/swiggy.png" alt="" className="row_company" />
              <img src="img/tcs.png" alt="" className="row_company" />
              <img src="img/tech-mahindra.jpg" alt="" className="row_company" />
              <img src="img/wipro.png" alt="" className="row_company" />
              <img src="img/wns.jpg" alt="" className="row_company" />
              <img src="img/zomato.png" alt="" className="row_company" />
              <img src="img/amazone.png" alt="" className="row_company" />
              <img src="img/cisco.png" alt="" className="row_company" />
              <img src="img/facebook.png" alt="" className="row_company" />
              <img src="img/flipkart.png" alt="" className="row_company" />
              <img src="img/hcl.jpg" alt="" className="row_company" />
              <img src="img/hp.png" alt="" className="row_company" />
              <img src="img/infosys.jpg" alt="" className="row_company" />
              <img src="img/lti.png" alt="" className="row_company" />
          
              {/* <!-- Duplicate the same logos to create seamless loop --> */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/ZS_Associates.svg" alt="" className="row_company" />
              <img src="https://pbs.twimg.com/media/F55_v2RXwAACscS.png" alt="" className="row_company" />
              <img src="https://www.freshersvoice.com/wp-content/uploads/2019/03/Josh-Technology-Group-Off-Campus.jpg" alt="" className="row_company" />
              
              <img src="img/sap.png" alt="" className="row_company" />
              <img src="img/swiggy.png" alt="" className="row_company" />
              <img src="img/tcs.png" alt="" className="row_company" />
              <img src="img/tech-mahindra.jpg" alt="" className="row_company" />
              <img src="img/wipro.png" alt="" className="row_company" />
              <img src="img/wns.jpg" alt="" className="row_company" />
              <img src="img/zomato.png" alt="" className="row_company" />
              <img src="img/amazone.png" alt="" className="row_company" />
              <img src="img/cisco.png" alt="" className="row_company" />
              <img src="img/facebook.png" alt="" className="row_company" />
              <img src="img/flipkart.png" alt="" className="row_company" />
              <img src="img/hcl.jpg" alt="" className="row_company" />
              <img src="img/hp.png" alt="" className="row_company" />
              <img src="img/infosys.jpg" alt="" className="row_company" />
              <img src="img/lti.png" alt="" className="row_company" />
            </div>
          </div>

        </div>


      {/* Counter Section */}
      <section className="section-work-data">
        <div className="container container-num">
          <div className="p-3">
            <h2 className="counter-numbers" data-number="2000">0</h2>
            <h4>PRESTIGIOUS RECRUITERS</h4>
          </div>
          <div className="p-3">
            <h2 className="counter-numbers" data-number="2500">0</h2>
            <h4>RECORD PLACEMENT (BATCH 2022)</h4>
          </div>
          <div className="p-3">
            <h2 className="counter-numbers" data-number="5000">0</h2>
            <h4>ALUMNI SERVING TO CORPORATE WORLD</h4>
          </div>
          <div className="p-3">
            <h2 className="counter-numbers" data-number="48">0</h2>
            <h4>HIGHEST PACKAGE OFFERED</h4>
          </div>
        </div>
      </section>

      {/* Animated Image Section */}
      <div className="container mt-5 mb-5">
  <div className="h-1" style={rowStyle}>
    <div className="h-1-1 divhome" style={itemStyle}>
      <motion.h4
      style={{ userSelect: 'none' }}
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        Highest Package (last 5 years trends)
      </motion.h4>
      <HighestPackageChart />
    </div>
    <div className="h-1-2 divhome" style={itemStyle}>
      <motion.h4
      style={{ userSelect: 'none' }}
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        Average Package (Last 5 Years Trend)
      </motion.h4>
      <AveragePackageChart />
    </div>
  </div>

  <div className="h-1" style={rowStyle}>
    <div className="h1-1 divhome" style={itemStyle}>
      <motion.h4
      style={{ userSelect: 'none' }}
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        Students Selected (Last 5 Years Trend)
      </motion.h4>
      <StudentsSelectedChart />
    </div>
    <div className="h1-2 divhome" style={itemStyle}>
      <motion.h4
      style={{ userSelect: 'none' }}
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        Companies Visited (Last 5 Years Trend)
      </motion.h4>
      <CompaniesVisitedChart />
    </div>
  </div>
</div>
</motion.div>
  );
}
