import React, { useRef, useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { year: '2017', value: 805 },
  { year: '2018', value: 913 },
  { year: '2019', value: 1145 },
  { year: '2020', value: 1316 },
  { year: '2021', value: 1435 },
];

// Updated color palette with complementary soft pastel and vibrant colors
const COLORS = ['#00B7C2', '#219EBC', '#1976A2', '#004B87', '#0A1647'];


const slideInFromLeft = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function StudentsSelectedChart() {
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

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
        {payload.map((entry, idx) => (
          <li key={`item-${idx}`} style={{ display: 'inline-block', margin: '0 15px' }}>
            <span
              style={{
                display: 'inline-block',
                width: 12,
                height: 12,
                backgroundColor: entry.color,
                marginRight: 6,
                borderRadius: '50%',
              }}
            />
            <span style={{ fontWeight: 'bold', color: '#333' }}>{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <motion.div
      ref={ref}
      variants={slideInFromLeft}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ width: '100%', height: 350, padding: '20px 0' }}
    >
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="year"
            innerRadius="60%"
            outerRadius="80%"
            labelLine={false}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <motion.text
                  x={x}
                  y={y}
                  fill="#333"
                  textAnchor={x > cx ? 'start' : 'end'}
                  fontSize={12}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </motion.text>
              );
            }}
          >
            {data.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(val) => <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{val}</span>}
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Legend content={renderLegend} verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
