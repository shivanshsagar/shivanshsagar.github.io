import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  strings: string[]
  speed?: number
  deleteSpeed?: number
  pause?: number
  className?: string
}

export function TypewriterText({ strings, speed = 60, deleteSpeed = 30, pause = 2000, className }: TypewriterTextProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[index % strings.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex(i => (i + 1) % strings.length)
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? text.slice(0, -1) : current.slice(0, text.length + 1))
      }, deleting ? deleteSpeed : speed)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, strings, speed, deleteSpeed, pause])

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse text-[#FF9900]">|</span>
    </span>
  )
}
