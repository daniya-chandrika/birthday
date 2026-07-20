import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

const birthdayMessage = `Happy 19th Birthday ❤️

Congratulations on completing nineteen wonderful years of your journey.

I sincerely hope your future is filled with happiness, success, unforgettable memories, good health, and endless smiles.

May every dream you've been chasing become your reality.

Keep shining. Keep growing. Keep being the wonderful person you are.

Happy Birthday once again.`

const FinalPage = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [thankYouText, setThankYouText] = useState('')
  const [hopeText, setHopeText] = useState('')
  const [showConfetti, setShowConfetti] = useState(true)
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight })

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= birthdayMessage.length) {
        setDisplayedText(birthdayMessage.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const line1 = 'Thank you for taking this little journey.'
    const line2 = 'I hope today becomes another beautiful memory.'
    const t1 = setTimeout(() => {
      let i = 0
      const timer = setInterval(() => {
        if (i <= line1.length) setThankYouText(line1.slice(0, i++))
        else clearInterval(timer)
      }, 42)
    }, 1800)

    const t2 = setTimeout(() => {
      let i = 0
      const timer = setInterval(() => {
        if (i <= line2.length) setHopeText(line2.slice(0, i++))
        else clearInterval(timer)
      }, 42)
    }, 4700)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 9000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center justify-start px-4 py-8 sm:py-12 overflow-y-auto overflow-x-hidden relative">
      {showConfetti && <Confetti width={dimensions.width} height={dimensions.height} colors={['#FFD700', '#FFA500', '#fff', '#B8860B']} numberOfPieces={150} recycle={false} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }} />}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring' }}
        className="text-center w-full max-w-lg sm:max-w-xl md:max-w-2xl"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-6"
        >
          🎂
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold gold-text mb-4 sm:mb-8"
        >
          Happy Birthday!
        </motion.h1>

        <div className="mb-4 sm:mb-6 text-gold/80 font-serif min-h-[52px]">
          <p className="text-sm sm:text-base">{thankYouText}</p>
          <p className="text-sm sm:text-base">{hopeText}</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="glass p-4 sm:p-6 md:p-10"
        >
          <pre className="whitespace-pre-wrap font-serif text-sm sm:text-base md:text-lg text-white/80 leading-relaxed text-left">
            {displayedText}
            <span className="animate-pulse text-gold">|</span>
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4 text-2xl sm:text-3xl"
        >
          {['🎉', '🎈', '✨', '🎁', '💫'].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FinalPage
