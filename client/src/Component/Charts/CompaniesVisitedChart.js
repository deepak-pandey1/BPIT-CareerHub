import React, { useRef, useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
  Label
} from 'recharts';
import { motion, useAnimation } from 'framer-motion';

// Data
const data = [
  { year: '2017', count: 236 },
  { year: '2018', count: 252 },
  { year: '2019', count: 272 },
  { year: '2020', count: 283 },
  { year: '2021', count: 294 },
];

// Fade-in animation for container (from right side)
const containerFade = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'white',
        padding: '8px 12px',
        borderRadius: 8,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        fontSize: 14
      }}
    >
      <strong>Year:</strong> {label}<br />
      <strong>Companies:</strong> {payload[0].value}
    </motion.div>
  );
};

export default function CompaniesVisitedChart() {
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      variants={containerFade}
      initial="hidden"
      animate={controls}
      style={{ width: '100%', height: 350 }}
    >
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 40 }}>
          <CartesianGrid
            stroke="#eee"
            strokeDasharray="5 5"
            opacity={0.7}
          />
          <XAxis dataKey="year">
  <Label value="Academic Year" position="bottom" offset={20} style={{ fontWeight: 'bold', userSelect: 'none' }} />
</XAxis>
<YAxis>
  <Label
    value="Companies Count"
    angle={-90}
    position="insideLeft"
    style={{ textAnchor: 'middle', fontWeight: 'bold', userSelect: 'none' }}
  />
</YAxis>

          <Tooltip content={<CustomTooltip />} />

          {/* Gradient for the line */}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="#00bcd4" />
            </linearGradient>
          </defs>

          {/* Animated Line */}
          <Line
            type="monotone"
            dataKey="count"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={false}
            isAnimationActive={true}
            animationDuration={1000}
          />

          {/* Animated Dots */}
          {data.map((point, index) => {
            const isLast = index === data.length - 1;
            const cx = 50 + index * 150;
            const cy = 350 - (point.count - 230);

            return (
              <motion.circle
                key={index}
                cx={cx}
                cy={cy}
                r={isLast ? 7 : 5}
                fill={isLast ? '#FF6347' : '#1E90FF'}
                stroke="#fff"
                strokeWidth={2}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.3, filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.3))' }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 100 }}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
