import { motion } from 'framer-motion'
import GoldButton from '../components/GoldButton'

const AchievementPage = ({ onNext }) => (
  <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-4 sm:p-6 md:p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto"
    >
      <motion.img
        src="/images/17.jpeg"
        alt="Achievement"
        className="w-full max-h-40 sm:max-h-52 md:max-h-64 object-contain rounded-xl mb-4 sm:mb-6 border border-gold/20 mx-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        loading="lazy"
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
        className="text-4xl sm:text-5xl mb-3 sm:mb-4"
      >
        🏆
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-lg sm:text-xl md:text-2xl font-serif gold-text mb-2"
      >
        I'm so proud of you.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8"
      >
        You made that day a great milestone in your life.
      </motion.p>

      <GoldButton onClick={onNext}>Continue</GoldButton>
    </motion.div>
  </div>
)

export default AchievementPage
