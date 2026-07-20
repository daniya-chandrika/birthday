import { motion } from 'framer-motion'
import { playClickSound } from '../utils/sound'

const GoldButton = ({ children, onClick, className = '' }) => (
  <motion.button
    onClick={e => {
      playClickSound()
      onClick?.(e)
    }}
    className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full font-sans font-medium text-sm sm:text-base text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-gold relative overflow-hidden gold-glow border border-yellow-100/50 ${className}`}
    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,215,0,0.5)' }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <motion.span
      className="absolute inset-y-0 -left-12 w-10 bg-white/35 blur-md"
      animate={{ x: ['0%', '380%'] }}
      transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
    />
    <span className="relative z-10">{children}</span>
  </motion.button>
)

export default GoldButton
