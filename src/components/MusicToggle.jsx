import { motion } from 'framer-motion'
import { HiMusicalNote, HiSpeakerXMark } from 'react-icons/hi2'

const MusicToggle = ({ playing, onToggle }) => (
  <motion.button
    onClick={onToggle}
    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:text-yellow-300 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    {playing ? <HiMusicalNote size={20} /> : <HiSpeakerXMark size={20} />}
  </motion.button>
)

export default MusicToggle
