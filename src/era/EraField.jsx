import { useEffect, useRef } from 'react'

const blobs = [
  { x: 0.06, y: 0.1, r: 56, c: '#ee5a9a' },
  { x: 0.94, y: 0.12, r: 44, c: '#5c3d9e' },
  { x: 0.92, y: 0.88, r: 62, c: '#c5e05a' },
  { x: 0.07, y: 0.9, r: 40, c: '#ff7a3a' },
]

const EraField = ({ progress }) => {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0.5, y: 0.4 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    fit()

    const onMove = (event) => {
      mouse.current.x = event.clientX / window.innerWidth
      mouse.current.y = event.clientY / window.innerHeight
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('resize', fit)

    const tick = (time) => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)
      const p = progress?.current ?? 0
      blobs.forEach((blob, i) => {
        const drift = reduce ? 0 : Math.sin(time * 0.0005 + i) * 18
        const x = blob.x * w + (mouse.current.x - 0.5) * 12 + drift
        const y = blob.y * h + (mouse.current.y - 0.5) * 10 - p * 40
        ctx.beginPath()
        ctx.arc(x, y, blob.r, 0, Math.PI * 2)
        ctx.fillStyle = blob.c
        ctx.globalAlpha = 0.1
        ctx.fill()
        ctx.globalAlpha = 1
      })
      frame = window.requestAnimationFrame(tick)
    }
    frame = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', fit)
    }
  }, [progress])

  return <canvas ref={canvasRef} className="era-field" aria-hidden />
}

export default EraField
