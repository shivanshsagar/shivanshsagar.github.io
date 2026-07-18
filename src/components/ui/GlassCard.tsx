import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: 'orange' | 'cyan' | 'purple' | 'none'
  onClick?: () => void
}

export function GlassCard({ children, className, hover = true, glow = 'none', onClick }: GlassCardProps) {
  const glowStyles = {
    orange: 'hover:shadow-glow-orange hover:border-[#FF9900]/30',
    cyan: 'hover:shadow-glow-cyan hover:border-cyan-brand/30',
    purple: 'hover:shadow-glow-purple hover:border-purple-brand/30',
    none: 'hover:border-white/15',
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.005 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={clsx(
        'glass rounded-2xl border border-white/8 transition-all duration-300',
        hover && ['cursor-pointer', glowStyles[glow]],
        className
      )}
    >
      {children}
    </motion.div>
  )
}
