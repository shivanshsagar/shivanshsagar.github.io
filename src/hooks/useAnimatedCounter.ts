import { useState, useEffect, useRef } from 'react'

export function useAnimatedCounter(target: number, duration = 2000, startWhenVisible = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(!startWhenVisible)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!startWhenVisible) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [startWhenVisible])

  useEffect(() => {
    if (!hasStarted) return
    const start = performance.now()
    const frame = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [hasStarted, target, duration])

  return { count, ref }
}
