import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { useEffect } from "react";


const sentence = "Placement is not just about getting a job, it's about stepping into your future.";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    userSelect: 'none',
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between each word
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

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
            observerInstance.unobserve(counter); // Run only once
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of element is visible
      }
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
    <div>

<div
  className="responsive-container"
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    height: '100vh',
    flexDirection: 'row', // default for desktop
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
        }
        .content {
          width: 100%;
          height: 50vh;
        }
      }
    `}
  </style>
</div>


        <div className="scroll container" >
          <h2 style={{color: 'black', marginTop: '40px', textAlign: 'center'}}> <b> Our Leading Recruiters </b></h2>
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


        <div className="container mt-5 mb-5">
          <div className="h-1">
            <div className="h-1-1 divhome">
              <h4>Highest Package (last 5 years trends)</h4>
              <img src="img/hi1.jpg" alt="img" className="hig" />
            </div>
            <div className="h-1-2 divhome">
              <h4>Average Package (Last 5 Years Trend)</h4>
              <img src="img/hh.png" alt="img" height={400} width={560} className="hig" />
            </div>
          </div>
          <div className="h-1">
            <div className="h1-1 divhome">
              <h4>Students Selected (Last 5 Years Trend)</h4>
              <img src="img/hi3.jpg" alt="img" className="hig" />
            </div>
            <div className="h1-2 divhome">
              <h4>Companies Visited (Last 5 Years Trend)</h4>
              <img src="img/hi4.jpg" alt="img" className="hig" />
            </div>
          </div>
        </div>

        </div>
  )
}
