import { motion, useScroll, useTransform } from 'framer-motion'

function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <motion.div
      style={{
        width,
        height: "4px",
        // background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
        // background: "linear-gradient(135deg, #004080, #0073b1)",
        background: "#0073b1",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        borderRadius: "0 2px 2px 0",
      }}
    />
  )
}

export default ProgressBar
