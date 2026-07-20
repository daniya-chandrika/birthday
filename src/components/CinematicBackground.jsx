import { motion } from 'framer-motion'

const balloons = Array.from({ length: 5 }, (_, i) => i)
const bokeh = Array.from({ length: 9 }, (_, i) => i)
const stars = Array.from({ length: 36 }, (_, i) => i)

const CinematicBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,215,0,0.14),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.12),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(255,215,0,0.10),transparent_45%)]" />

    {bokeh.map(i => (
      <motion.div
        key={`bokeh-${i}`}
        className="absolute rounded-full bg-gold/10 blur-2xl"
        style={{
          width: `${60 + (i % 4) * 45}px`,
          height: `${60 + (i % 4) * 45}px`,
          left: `${(i * 11) % 100}%`,
          top: `${(i * 17) % 100}%`,
        }}
        animate={{ y: [0, -20, 0], opacity: [0.18, 0.35, 0.18] }}
        transition={{ duration: 8 + i, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}

    {stars.map(i => (
      <motion.div
        key={`star-${i}`}
        className="absolute w-[2px] h-[2px] bg-gold/70 rounded-full"
        style={{ left: `${(i * 7.7) % 100}%`, top: `${(i * 13.3) % 100}%` }}
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.4, 0.8] }}
        transition={{ duration: 2.5 + (i % 5), repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}

    {balloons.map(i => (
      <motion.div
        key={`balloon-${i}`}
        className="absolute hidden md:block"
        style={{ left: `${8 + i * 18}%`, bottom: `-${20 + i * 10}px` }}
        animate={{ y: [0, -160 - i * 30], x: [0, i % 2 === 0 ? 14 : -14], opacity: [0, 0.28, 0] }}
        transition={{ duration: 24 + i * 4, repeat: Infinity, ease: 'linear', delay: i * 2.5 }}
      >
        <div className="w-6 h-8 rounded-full bg-gradient-to-b from-gold/30 to-amber-700/20 border border-gold/20" />
      </motion.div>
    ))}

    <motion.div
      className="absolute inset-y-0 -left-1/3 w-1/2 bg-gradient-to-r from-transparent via-gold/10 to-transparent blur-3xl"
      animate={{ x: ['0%', '240%'] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    />
  </div>
)

export default CinematicBackground
