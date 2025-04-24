import React, { useRef, useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line, Legend } from 'recharts';
import { motion } from 'framer-motion';

// Sample data
const data = [
  { period: '2012–14', max: 11.8, med: 7.2 },
  { period: '2015–17', max: 9.7, med: 6.5 },
  { period: '2018–20', max: 6.4, med: 4.8 },
];

// Animation for fading in from right
const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function AveragePackageChart() {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  // Intersection observer to trigger animation
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.5 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
          <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{label}</p>
          <p style={{ fontSize: '12px', color: '#888' }}>{`Max: ${payload[0].value}L`}</p>
          <p style={{ fontSize: '12px', color: '#888' }}>{`Median: ${payload[1].value}L`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInRight}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ width: '100%', height: 300 }}
    >
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" />
          <Line type="monotone" dataKey="max" name="Maximum" stroke="#2772db" strokeWidth={2} />
          <Line type="monotone" dataKey="med" name="Median" stroke="#3ab1c8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
