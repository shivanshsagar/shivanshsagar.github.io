import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Home, User, Briefcase, Code, Mail, FileText, Cpu, Award, MessageSquare, X } from 'lucide-react'
import { useCommandPalette } from '@/context/CommandPaletteContext'
import { clsx } from 'clsx'

const commands = [
  { id: 'home', label: 'Go to Home', icon: <Home className="w-4 h-4" />, href: '/', section: 'Navigate' },
  { id: 'about', label: 'About Me', icon: <User className="w-4 h-4" />, href: '/#about', section: 'Navigate' },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" />, href: '/#experience', section: 'Navigate' },
  { id: 'projects', label: 'Projects', icon: <Code className="w-4 h-4" />, href: '/#projects', section: 'Navigate' },
  { id: 'skills', label: 'Skills & Tech Radar', icon: <Cpu className="w-4 h-4" />, href: '/#skills', section: 'Navigate' },
  { id: 'certs', label: 'Certifications', icon: <Award className="w-4 h-4" />, href: '/#certifications', section: 'Navigate' },
  { id: 'blog', label: 'Blog', icon: <FileText className="w-4 h-4" />, href: '/#blog', section: 'Navigate' },
  { id: 'testimonials', label: 'Testimonials', icon: <MessageSquare className="w-4 h-4" />, href: '/#testimonials', section: 'Navigate' },
  { id: 'contact', label: 'Contact Me', icon: <Mail className="w-4 h-4" />, href: '/#contact', section: 'Navigate' },
  { id: 'resume', label: 'Download Resume', icon: <FileText className="w-4 h-4" />, href: '/resume.pdf', section: 'Actions', download: true },
]

export function CommandPalette() {
  const { isOpen, close } = useCommandPalette()
  const [query, setQuery] = useState('')
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setActiveIdx(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => setActiveIdx(0), [query])

  const execute = (cmd: typeof commands[0]) => {
    close()
    if (cmd.download) {
      const a = document.createElement('a')
      a.href = cmd.href
      a.download = 'resume.pdf'
      a.click()
    } else {
      window.location.href = cmd.href
    }
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx(i => Math.min(i + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx(i => Math.max(i - 1, 0)) }
    if (e.key === 'Enter' && filtered[activeIdx]) execute(filtered[activeIdx])
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4"
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -16 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-xl glass-dark rounded-2xl border border-white/10 shadow-glass overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 p-4 border-b border-white/8">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={onKey}
                placeholder="Search commands..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
              />
              <button onClick={close} className="p-1 rounded-lg hover:bg-white/5 transition-colors">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Results */}
            <div className="p-2 max-h-80 overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="text-center text-sm text-muted-foreground py-8">No commands found.</p>
              ) : (
                filtered.map((cmd, i) => (
                  <button
                    key={cmd.id}
                    onClick={() => execute(cmd)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className={clsx(
                      'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors text-left',
                      i === activeIdx ? 'bg-[#FF9900]/10 text-[#FF9900]' : 'text-foreground hover:bg-white/5'
                    )}
                  >
                    <span className={i === activeIdx ? 'text-[#FF9900]' : 'text-muted-foreground'}>{cmd.icon}</span>
                    {cmd.label}
                    <span className="ml-auto text-xs text-muted-foreground/50">{cmd.section}</span>
                  </button>
                ))
              )}
            </div>

            <div className="px-4 py-2 border-t border-white/8 flex items-center gap-4 text-xs text-muted-foreground/50">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>ESC close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
