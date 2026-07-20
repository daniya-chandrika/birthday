import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GoldButton from '../components/GoldButton'

const images = [2, 3, 4, 5, 6, 7]

const CakePage = ({ onNext }) => {
  const [found, setFound] = useState(false)

  const cakePosition = useMemo(() => ({
    imageIndex: Math.floor(Math.random() * 6),
    top: 20 + Math.random() * 60,
    left: 20 + Math.random() * 60,
  }), [])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl sm:text-2xl md:text-3xl font-serif gold-text mb-2 sm:mb-4 shrink-0"
      >
        Find The Birthday Cake 🎂
      </motion.h2>
      <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4 shrink-0">A tiny cake is hidden in one of these photos. Can you find it?</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 w-full max-w-sm sm:max-w-md md:max-w-2xl shrink-0" style={{ maxHeight: '55vh' }}>
        {images.map((img, i) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-xl overflow-hidden border border-gold/10 aspect-square group"
          >
            <img
              src={`/images/${img}.jpeg`}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {i === cakePosition.imageIndex && !found && (
              <button
                onClick={() => setFound(true)}
                className="absolute cursor-pointer opacity-60 hover:opacity-100 transition-opacity text-lg"
                style={{ top: `${cakePosition.top}%`, left: `${cakePosition.left}%` }}
                aria-label="Birthday cake"
              >
                🎂
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {found && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="mt-4 sm:mt-6 text-center shrink-0"
          >
            <p className="text-2xl sm:text-3xl mb-1">🎉✨🎂</p>
            <p className="text-base sm:text-xl font-serif gold-text mb-1">Yay! You found your birthday cake!</p>
            <p className="text-white/50 text-xs sm:text-sm mb-4">You've unlocked another beautiful memory.</p>
            <GoldButton onClick={onNext}>Continue</GoldButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CakePage
