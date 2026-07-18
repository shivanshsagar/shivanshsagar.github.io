import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal, Download } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useCommandPalette } from '@/context/CommandPaletteContext'
import { clsx } from 'clsx'

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { open } = useCommandPalette()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass-dark border-b border-white/5 shadow-glass py-3' : 'py-5'
        )}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="font-heading font-bold text-xl tracking-tight">
              <span className="gradient-text">SS</span>
              <span className="text-muted-foreground ml-1 font-normal text-sm hidden sm:inline">/ Cloud Architect</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={open}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-white/10 text-xs text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
                aria-label="Open command palette"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Ctrl K</span>
              </button>
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF9900] text-black text-sm font-medium hover:bg-[#FFB74D] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
              <button
                onClick={() => setMobileOpen(p => !p)}
                className="md:hidden p-2 rounded-lg glass border border-white/10"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass-dark border-b border-white/8 p-4"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FF9900] text-black text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
