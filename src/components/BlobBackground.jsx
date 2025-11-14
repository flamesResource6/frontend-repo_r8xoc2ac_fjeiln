import { useEffect, useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

// Animated organic blobs in the background with subtle parallax
export default function BlobBackground({ intensity = 20 }) {
  const ref = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handle = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  useAnimationFrame(() => {
    const el = ref.current
    if (!el) return
    const { x, y } = mouse.current
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const dx = (x - cx) / cx
    const dy = (y - cy) / cy
    el.style.transform = `translate3d(${dx * intensity}px, ${dy * intensity}px, 0)`
  })

  const blob = (className, gradient) => (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-40 ${className}`}
      style={{ filter: 'blur(40px)' }}
      initial={{ scale: 0.9 }}
      animate={{ scale: [0.9, 1.05, 0.95, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className={`w-full h-full ${gradient} rounded-full`} />
    </motion.div>
  )

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      {blob('w-[40vw] h-[40vw] -top-24 -left-16', 'bg-gradient-to-br from-rose-300/70 via-orange-200/70 to-amber-200/70')}
      {blob('w-[30vw] h-[30vw] top-1/3 -right-20', 'bg-gradient-to-br from-amber-200/70 via-rose-200/70 to-pink-200/70')}
      {blob('w-[28vw] h-[28vw] bottom-[-10%] left-[10%]', 'bg-gradient-to-br from-orange-200/70 via-rose-300/70 to-amber-200/70')}
    </div>
  )
}
