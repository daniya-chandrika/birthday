import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Particles from './components/Particles'
import CinematicBackground from './components/CinematicBackground'
import PageTransition from './components/PageTransition'
import MusicToggle from './components/MusicToggle'
import LoadingScreen from './components/LoadingScreen'
import MemoryUnlockTransition from './components/MemoryUnlockTransition'
import IntroPage from './pages/IntroPage'
import NicknamePage from './pages/NicknamePage'
import CakePage from './pages/CakePage'
import MemoryMatchPage from './pages/MemoryMatchPage'
import QuizPage from './pages/QuizPage'
import MemoryVault from './pages/MemoryVault'
import AchievementPage from './pages/AchievementPage'
import VideoPage from './pages/VideoPage'
import EmotionalTransitionPage from './pages/EmotionalTransitionPage'
import FinalPage from './pages/FinalPage'
import { playUnlockSound } from './utils/sound'

const TOTAL_PAGES = 10

const App = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [page, setPage] = useState(0)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)
  const [audio] = useState(() => {
    if (typeof window !== 'undefined') {
      const a = new Audio('/music/background.mpeg')
      a.loop = true
      a.volume = 0.3
      return a
    }
    return null
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 15 + 5
      })
    }, 200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => setLoading(false), 500)
      return () => clearTimeout(t)
    }
  }, [progress])

  const startMusic = useCallback(() => {
    if (audio) {
      audio.play().then(() => setMusicPlaying(true)).catch(() => {})
    }
  }, [audio])

  const toggleMusic = useCallback(() => {
    if (!audio) return
    if (musicPlaying) { audio.pause(); setMusicPlaying(false) }
    else { audio.play().then(() => setMusicPlaying(true)).catch(() => {}) }
  }, [audio, musicPlaying])

  const nextPage = useCallback(() => {
    if (isUnlocking) return
    if (!musicPlaying) startMusic()
    if (page >= TOTAL_PAGES - 1) return

    setIsUnlocking(true)
    playUnlockSound()
    setTimeout(() => {
      setPage(p => Math.min(p + 1, TOTAL_PAGES - 1))
      setIsUnlocking(false)
    }, 850)
  }, [musicPlaying, startMusic, isUnlocking, page])

  const pages = [
    <IntroPage onNext={nextPage} />,
    <NicknamePage onNext={nextPage} />,
    <CakePage onNext={nextPage} />,
    <MemoryMatchPage onNext={nextPage} />,
    <QuizPage onNext={nextPage} />,
    <MemoryVault onNext={nextPage} />,
    <AchievementPage onNext={nextPage} />,
    <VideoPage onNext={nextPage} />,
    <EmotionalTransitionPage onComplete={nextPage} />,
    <FinalPage />,
  ]

  return (
    <div className="w-full h-full bg-[#090909] relative overflow-hidden max-w-[100vw]">
      <CinematicBackground />
      <Particles count={60} />

      <AnimatePresence>
        {loading && <LoadingScreen progress={Math.min(progress, 100)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <MusicToggle playing={musicPlaying} onToggle={toggleMusic} />
          <MemoryUnlockTransition visible={isUnlocking} />

          <PageTransition pageKey={page}>
            {pages[page]}
          </PageTransition>
        </>
      )}
    </div>
  )
}

export default App
