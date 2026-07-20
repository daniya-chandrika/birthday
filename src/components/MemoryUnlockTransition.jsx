import { motion, AnimatePresence } from 'framer-motion'

const MemoryUnlockTransition = ({ visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[95] bg-[#090909]/90 backdrop-blur-md flex items-center justify-center"
      >
        <div className="glass px-8 py-8 text-center relative overflow-hidden">
          <motion.div
            className="text-4xl mb-4"
            animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            🔑
          </motion.div>
          <p className="font-serif gold-text text-xl mb-4">Unlocking Memory...</p>
          <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default MemoryUnlockTransition
