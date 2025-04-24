import React, { useRef, useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
  Label
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { year: '2017', value: 20 },
  { year: '2018', value: 34 },
  { year: '2019', value: 28 },
  { year: '2020', value: 43 },
  { year: '2021', value: 48 },
];

// Slide in from left animation
const slideInFromLeft = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function HighestPackageChart() {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={slideInFromLeft}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ width: '100%', height: 350 }}
    >
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00bcd4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00bcd4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year">
  <Label value="Academic Year" position="bottom" offset={20} style={{ fontWeight: 'bold', userSelect: 'none' }} />
</XAxis>
<YAxis tickFormatter={(val) => `${val}L`}>
  <Label
    value="Rupees / Annum"
    angle={-90}
    position="insideLeft"
    offset={-10}
    style={{ textAnchor: 'middle', fontWeight: 'bold', userSelect: 'none' }}
  />
</YAxis>

          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: 10 }}
            itemStyle={{ color: '#000000' }}
            labelStyle={{ color: '#000000' }}
            formatter={(val) => `${val}L`}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00bcd4"
            fill="url(#colorValue)"
            strokeWidth={3}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
