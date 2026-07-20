import { motion } from 'framer-motion'

const LoadingScreen = ({ progress, onComplete }) => (
  <motion.div
    className="fixed inset-0 bg-[#090909] flex flex-col items-center justify-center z-[100]"
    exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
    transition={{ duration: 1 }}
  >
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', duration: 1.5 }}
      className="text-6xl mb-8"
    >
      <span className="gold-text font-serif font-bold">✦</span>
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-gold/60 font-sans text-sm tracking-[0.3em] uppercase mb-8"
    >
      Preparing something special
    </motion.p>

    <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-gold to-yellow-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  </motion.div>
)

export default LoadingScreen
