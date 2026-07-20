import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  initial: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, scale: 1.05, filter: 'blur(10px)', transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const PageTransition = ({ children, pageKey }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={pageKey}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      {children}
    </motion.div>
  </AnimatePresence>
)

export default PageTransition
