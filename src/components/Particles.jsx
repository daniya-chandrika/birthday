import { useEffect, useRef } from 'react'

const Particles = ({ count = 50 }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 0.5
        this.speedY = -(Math.random() * 0.5 + 0.1)
        this.speedX = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.7 + 0.3
        this.flickerSpeed = Math.random() * 0.02 + 0.01
        this.angle = Math.random() * Math.PI * 2
      }
      update() {
        this.y += this.speedY
        this.x += Math.sin(this.angle) * 0.3
        this.angle += this.flickerSpeed
        this.opacity = 0.3 + Math.sin(this.angle) * 0.3
        if (this.y < -10) {
          this.y = canvas.height + 10
          this.x = Math.random() * canvas.width
        }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`
        ctx.shadowBlur = 10
        ctx.shadowColor = 'rgba(255, 215, 0, 0.5)'
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  )
}

export default Particles
