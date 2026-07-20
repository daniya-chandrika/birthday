import { motion } from 'framer-motion'

const ChapterIndicator = ({ current, total }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
  >
    <div className="glass px-5 py-2 text-sm text-gold/70 font-sans tracking-widest">
      Chapter {current} of {total}
    </div>
  </motion.div>
)

export default ChapterIndicator
