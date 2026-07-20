import { motion } from 'framer-motion'

const GoldButton = ({ children, onClick, className = '' }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full font-sans font-medium text-sm sm:text-base text-black bg-gradient-to-r from-gold via-yellow-400 to-gold relative overflow-hidden gold-glow ${className}`}
    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,215,0,0.5)' }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <span className="relative z-10">{children}</span>
  </motion.button>
)

export default GoldButton
