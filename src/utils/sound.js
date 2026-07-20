export const playTone = (frequency = 660, duration = 0.08, type = 'sine', volume = 0.04) => {
  if (typeof window === 'undefined') return
  const AudioCtx = window.AudioContext || window.webkitAudioContext
  if (!AudioCtx) return

  const ctx = new AudioCtx()
  const oscillator = ctx.createOscillator()
  const gain = ctx.createGain()

  oscillator.type = type
  oscillator.frequency.value = frequency
  gain.gain.value = volume

  oscillator.connect(gain)
  gain.connect(ctx.destination)

  const now = ctx.currentTime
  gain.gain.setValueAtTime(0, now)
  gain.gain.linearRampToValueAtTime(volume, now + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

  oscillator.start(now)
  oscillator.stop(now + duration + 0.02)
}

export const playClickSound = () => playTone(780, 0.06, 'triangle', 0.03)
export const playUnlockSound = () => {
  playTone(520, 0.1, 'sine', 0.04)
  setTimeout(() => playTone(820, 0.14, 'triangle', 0.035), 80)
}
export const playCelebrateSound = () => {
  playTone(680, 0.08, 'triangle', 0.03)
  setTimeout(() => playTone(920, 0.1, 'sine', 0.03), 60)
  setTimeout(() => playTone(1140, 0.12, 'triangle', 0.025), 120)
}
