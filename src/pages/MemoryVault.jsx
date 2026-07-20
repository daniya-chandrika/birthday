import { motion } from 'framer-motion'
import GoldButton from '../components/GoldButton'

const photos = [
  { id: 13, caption: 'Those golden days...' },
  { id: 14, caption: 'Laughter that echoes...' },
  { id: 15, caption: 'Together, always.' },
  { id: 16, caption: 'Moments to treasure.' },
]

const MemoryVault = ({ onNext }) => (
  <div className="w-full h-full flex flex-col items-center justify-between px-4 py-6 sm:py-8 overflow-hidden relative">
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-xl sm:text-2xl md:text-3xl font-serif gold-text mb-4 sm:mb-6 shrink-0"
    >
      Memory Vault ✨
    </motion.h2>

    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-2xl flex-1 min-h-0">
      {photos.map((photo, i) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 40, rotate: (i % 2 === 0 ? -2 : 2) }}
          animate={{ opacity: 1, y: [0, -6, 0], rotate: [(i % 2 === 0 ? -2 : 2), (i % 2 === 0 ? -0.5 : 0.5), (i % 2 === 0 ? -2 : 2)] }}
          transition={{ delay: i * 0.2, duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.06, rotate: 0, zIndex: 10, boxShadow: '0 0 35px rgba(255,215,0,0.35)' }}
          className="relative group"
        >
          <div className="bg-gradient-to-b from-amber-50 to-amber-100 p-1 sm:p-1.5 pb-6 sm:pb-8 rounded shadow-xl shadow-black/30 relative overflow-hidden border border-amber-200/80">
            <div className="absolute -top-2 left-6 w-7 h-3 rounded-sm bg-amber-100/90 rotate-[-8deg]" />
            <div className="absolute -top-2 right-6 w-7 h-3 rounded-sm bg-amber-100/90 rotate-[8deg]" />
            <img
              src={`/images/${photo.id}.jpeg`}
              alt=""
              className="w-full aspect-[4/3] object-cover rounded-sm"
              loading="lazy"
            />
            <p className="absolute bottom-1 sm:bottom-2 left-0 right-0 text-center text-[9px] sm:text-xs text-gray-600 font-serif italic">
              {photo.caption}
            </p>
          </div>
          <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gold/60 shadow-lg shadow-gold/30" />
        </motion.div>
      ))}
    </div>

    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gold/40"
          style={{ left: `${10 + i * 12}%`, top: `${5 + (i % 3) * 10}%` }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
        />
      ))}
    </div>

    <div className="mt-4 sm:mt-6 shrink-0">
      <GoldButton onClick={onNext}>Continue</GoldButton>
    </div>
  </div>
)

export default MemoryVault
