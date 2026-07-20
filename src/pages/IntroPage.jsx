import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GoldButton from '../components/GoldButton'

const lines = [
  'Some journeys deserve to be remembered...',
  'Some people deserve to be celebrated...',
  'This is one of those stories.',
]

const IntroPage = ({ onNext }) => {
  const [lineIndex, setLineIndex] = useState(-1)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (lineIndex === -1) {
      const start = setTimeout(() => setLineIndex(0), 1100)
      return () => clearTimeout(start)
    }

    if (lineIndex < lines.length - 1) {
      const t = setTimeout(() => setLineIndex(i => i + 1), 2600)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => setShowButton(true), 2200)
    return () => clearTimeout(t)
  }, [lineIndex])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 text-center">
      <AnimatePresence mode="wait">
        {lineIndex >= 0 && (
          <motion.p
            key={lineIndex}
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-2xl md:text-4xl font-serif text-white/90 max-w-3xl leading-relaxed tracking-wide"
          >
            {lines[lineIndex]}
          </motion.p>
        )}
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
