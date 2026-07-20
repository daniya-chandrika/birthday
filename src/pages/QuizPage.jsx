import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GoldButton from '../components/GoldButton'
import { playCelebrateSound } from '../utils/sound'

const options = ['Festival', 'Relatives Home', 'Shopping', 'Movie']
const correctAnswer = 'Movie'

const QuizPage = ({ onNext }) => {
  const [selected, setSelected] = useState(null)
  const [correct, setCorrect] = useState(false)

  const handleSelect = (opt) => {
    setSelected(opt)
    if (opt === correctAnswer) {
      playCelebrateSound()
      setCorrect(true)
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-4 sm:p-6 md:p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <img
          src="/images/12.jpeg"
          alt="Memory"
          className="w-full max-h-40 sm:max-h-48 md:max-h-56 object-contain rounded-xl mb-4 sm:mb-6 border border-gold/20 mx-auto"
          loading="lazy"
        />

        <AnimatePresence mode="wait">
          {!correct ? (
            <motion.div key="q" exit={{ opacity: 0 }}>
              <p className="text-base sm:text-lg md:text-xl font-serif text-white/80 mb-4 sm:mb-6">Where were we going?</p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {options.map(opt => (
                  <motion.button
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl border text-xs sm:text-sm font-sans transition-all ${
                      selected === opt && opt !== correctAnswer
                        ? 'border-red-400/50 bg-red-400/10 text-red-300'
                        : 'border-gold/20 bg-white/5 text-white/70 hover:border-gold/50'
                    }`}
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
              {selected && !correct && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/40 text-sm mt-4">
                  Not quite... try again!
                </motion.p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="a"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <motion.p className="text-3xl mb-3" initial={{ scale: 0.4, y: 12 }} animate={{ scale: 1, y: 0 }} transition={{ type: 'spring' }}>😊🫠</motion.p>
              <p className="text-base sm:text-lg font-serif gold-text mb-2">Glad you really remember our memories.</p>
              <p className="text-white/50 text-sm mb-6">Those moments mean everything.</p>
              <GoldButton onClick={onNext}>Continue</GoldButton>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default QuizPage
