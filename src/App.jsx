import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Particles from './components/Particles'
import PageTransition from './components/PageTransition'
import ChapterIndicator from './components/ChapterIndicator'
import MusicToggle from './components/MusicToggle'
import LoadingScreen from './components/LoadingScreen'
import IntroPage from './pages/IntroPage'
import NicknamePage from './pages/NicknamePage'
import CakePage from './pages/CakePage'
import MemoryMatchPage from './pages/MemoryMatchPage'
import QuizPage from './pages/QuizPage'
import MemoryVault from './pages/MemoryVault'
import AchievementPage from './pages/AchievementPage'
import VideoPage from './pages/VideoPage'
import FinalPage from './pages/FinalPage'

const TOTAL_PAGES = 9

const App = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [page, setPage] = useState(0)
  const [musicPlaying, setMusicPlaying] = useState(false)
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
    if (!musicPlaying) startMusic()
    setPage(p => Math.min(p + 1, TOTAL_PAGES - 1))
  }, [musicPlaying, startMusic])

  const pages = [
    <IntroPage onNext={nextPage} />,
    <NicknamePage onNext={nextPage} />,
    <CakePage onNext={nextPage} />,
    <MemoryMatchPage onNext={nextPage} />,
    <QuizPage onNext={nextPage} />,
    <MemoryVault onNext={nextPage} />,
    <AchievementPage onNext={nextPage} />,
    <VideoPage onNext={nextPage} />,
    <FinalPage />,
  ]

  return (
    <div className="w-full h-full bg-[#090909] relative overflow-hidden max-w-[100vw]">
      <Particles count={60} />

      <AnimatePresence>
        {loading && <LoadingScreen progress={Math.min(progress, 100)} />}
      </AnimatePresence>

      {!loading && (
        <>

          <MusicToggle playing={musicPlaying} onToggle={toggleMusic} />

          <PageTransition pageKey={page}>
            {pages[page]}
          </PageTransition>
        </>
      )}
    </div>
  )
}

export default App
