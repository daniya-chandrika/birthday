import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GoldButton from '../components/GoldButton'

const nudges = [
  "Really?",
  "Are you absolutely sure?",
  "Don't you want to see something made especially for you?",
  "Last chance... it's really worth it!",
]

const VideoPage = ({ onNext }) => {
  const [choice, setChoice] = useState(null)
  const [noCount, setNoCount] = useState(0)
  const [videoIndex, setVideoIndex] = useState(0)
  const videoRef = useRef(null)

  const handleNo = () => {
    if (noCount >= nudges.length - 1) {
      setChoice('yes')
    } else {
      setNoCount(c => c + 1)
    }
  }

  const handleVideoEnd = () => {
    if (videoIndex === 0) {
      setVideoIndex(1)
    } else {
      onNext()
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      <AnimatePresence mode="wait">
        {choice === null && (
          <motion.div key="ask" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="glass p-6 sm:p-8 md:p-12 max-w-md w-full">
            <p className="text-lg sm:text-xl md:text-2xl font-serif text-white/80 mb-2">
              Would you like to watch something?
            </p>
            {noCount > 0 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold/60 italic mb-4 text-sm">
                {nudges[noCount - 1]}
              </motion.p>
            )}
            <div className="flex gap-3 sm:gap-4 justify-center mt-6">
              <GoldButton onClick={() => setChoice('yes')}>YES</GoldButton>
              <motion.button
                onClick={handleNo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-gold/30 text-gold/70 hover:bg-gold/5 transition-colors"
              >
                NO
              </motion.button>
            </div>
          </motion.div>
        )}

        {choice === 'yes' && (
          <motion.div key="video" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl px-2 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.video
                key={videoIndex}
                ref={videoRef}
                src={`/videos/${videoIndex === 0 ? '18' : '19'}.mp4`}
                autoPlay
                playsInline
                onEnded={handleVideoEnd}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-h-[70vh] rounded-2xl border border-gold/20 gold-glow object-contain"
                controls
              />
            </AnimatePresence>
            <p className="text-white/40 text-sm mt-4">
              {videoIndex === 0 ? 'Video 1 of 2' : 'Video 2 of 2'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VideoPage
