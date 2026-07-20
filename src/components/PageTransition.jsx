import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  initial: { opacity: 0, scale: 0.965, filter: 'blur(12px)' },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, scale: 1.03, filter: 'blur(14px)', transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
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
      <motion.div
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-gold/20 to-transparent blur-3xl"
        initial={{ x: '-20%' }}
        animate={{ x: '360%' }}
        transition={{ duration: 0.95, ease: 'easeInOut' }}
      />
      {children}
    </motion.div>
  </AnimatePresence>
)

export default PageTransition
