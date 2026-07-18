import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'orange' | 'cyan' | 'purple' | 'green'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-white/5 text-muted-foreground border-white/10',
    orange: 'bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20',
    cyan: 'bg-cyan-brand/10 text-cyan-brand border-cyan-brand/20',
    purple: 'bg-purple-brand/10 text-purple-brand border-purple-brand/20',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  }

  return (
    <span className={clsx(
      'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
