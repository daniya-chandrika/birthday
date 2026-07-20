import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import GoldButton from '../components/GoldButton'

const imageIds = [8, 9, 10, 11]

const MemoryMatchPage = ({ onNext }) => {
  const cards = useMemo(() => {
    const pairs = [...imageIds, ...imageIds]
    for (let i = pairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pairs[i], pairs[j]] = [pairs[j], pairs[i]]
    }
    return pairs.map((img, i) => ({ id: i, img }))
  }, [])

  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [disabled, setDisabled] = useState(false)
  const won = matched.length === imageIds.length * 2

  const handleClick = (index) => {
    if (disabled || flipped.includes(index) || matched.includes(index)) return
    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setDisabled(true)
      const [a, b] = newFlipped
      if (cards[a].img === cards[b].img) {
        setMatched(m => [...m, a, b])
        setFlipped([])
        setDisabled(false)
      } else {
        setTimeout(() => { setFlipped([]); setDisabled(false) }, 1000)
      }
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl sm:text-2xl md:text-3xl font-serif gold-text mb-4 sm:mb-6 shrink-0"
      >
        Memory Match
      </motion.h2>

      {!won ? (
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 w-full max-w-[280px] sm:max-w-xs md:max-w-md">
          {cards.map((card, i) => {
            const isFlipped = flipped.includes(i) || matched.includes(i)
            return (
              <motion.div
                key={i}
                onClick={() => handleClick(i)}
                className="aspect-square rounded-lg sm:rounded-xl cursor-pointer relative"
                style={{ perspective: 1000 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center" style={{ backfaceVisibility: 'hidden' }}>
                    <span className="text-gold text-lg sm:text-2xl">✦</span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-lg sm:rounded-xl overflow-hidden border-2 border-gold/50"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                  >
                    <img src={`/images/${card.img}.jpeg`} alt="" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <p className="text-3xl mb-4">🎉✨</p>
          <p className="text-lg sm:text-xl font-serif text-white/80 mb-2">Do you remember these moments?</p>
          <p className="text-white/50 mb-6 sm:mb-8">Some memories never fade.</p>
          <GoldButton onClick={onNext}>Continue</GoldButton>
        </motion.div>
      )}
    </div>
  )
}

export default MemoryMatchPage
