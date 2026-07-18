import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      className="progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  )
}
