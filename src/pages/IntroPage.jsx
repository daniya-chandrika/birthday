import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GoldButton from '../components/GoldButton'

const lines = [
  "Every beautiful story deserves a beautiful beginning...",
  "Tonight isn't just another day...",
  "Someone very special is about to complete another unforgettable chapter.",
]

const IntroPage = ({ onNext }) => {
  const [lineIndex, setLineIndex] = useState(0)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (lineIndex < lines.length - 1) {
      const t = setTimeout(() => setLineIndex(i => i + 1), 3000)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => setShowButton(true), 2500)
      return () => clearTimeout(t)
    }
  }, [lineIndex])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 text-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={lineIndex}
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-2xl md:text-4xl font-serif text-white/90 max-w-2xl leading-relaxed"
        >
          {lines[lineIndex]}
        </motion.p>
      </AnimatePresence>

      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <GoldButton onClick={onNext}>Begin Journey</GoldButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default IntroPage
