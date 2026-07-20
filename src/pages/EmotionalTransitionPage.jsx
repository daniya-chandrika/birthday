import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const lines = ['Every picture...', 'Every laugh...', 'Every little memory...', 'Led to today.']

const EmotionalTransitionPage = ({ onComplete }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < lines.length - 1) {
      const t = setTimeout(() => setIndex(prev => prev + 1), 1700)
      return () => clearTimeout(t)
    }
    const done = setTimeout(onComplete, 2200)
    return () => clearTimeout(done)
  }, [index, onComplete])

  return (
    <div className="w-full h-full flex items-center justify-center px-6 text-center">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif gold-text"
        >
          {lines[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  )
}

export default EmotionalTransitionPage
