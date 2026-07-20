import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GoldButton from '../components/GoldButton'

const hints = [
  "The name Mavayya always used to call you...",
  "It starts with the letter T.",
]

const NicknamePage = ({ onNext }) => {
  const [input, setInput] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [solved, setSolved] = useState(false)
  const [shake, setShake] = useState(false)

  const check = () => {
    if (input.trim().toLowerCase() === 'tinku') {
      setSolved(true)
    } else {
      setAttempts(a => a + 1)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-5 sm:p-8 md:p-12 max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <motion.img
          src="/images/1.jpeg"
          alt="Childhood"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 sm:mb-6 object-cover border-2 border-gold/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.3 }}
        />

        <AnimatePresence mode="wait">
          {!solved ? (
            <motion.div key="question" exit={{ opacity: 0, scale: 0.8 }}>
              <p className="text-base sm:text-lg md:text-xl font-serif text-white/80 mb-4 sm:mb-6">
                What was the nickname everyone called you when we were little?
              </p>

              <motion.input
                animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && check()}
                placeholder="Type your answer..."
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 border border-gold/20 text-white text-center outline-none focus:border-gold/60 transition-colors mb-4 text-sm sm:text-base"
              />

              {attempts > 0 && attempts <= hints.length && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gold/60 text-xs sm:text-sm mb-4 italic"
                >
                  Hint: {hints[Math.min(attempts - 1, hints.length - 1)]}
                </motion.p>
              )}

              <GoldButton onClick={check}>Check</GoldButton>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring' }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl mb-4">🎉✨</p>
              <p className="text-lg sm:text-xl font-serif gold-text mb-2">That's right!</p>
              <p className="text-white/60 text-sm mb-6">A beautiful memory unlocked.</p>
              <GoldButton onClick={onNext}>Continue</GoldButton>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default NicknamePage
