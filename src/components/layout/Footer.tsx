import { Github, Linkedin, Mail, Twitter, Youtube, BookOpen } from 'lucide-react'
import profile from '@/data/profile.json'

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  email: <Mail className="w-4 h-4" />,
  x: <Twitter className="w-4 h-4" />,
  youtube: <Youtube className="w-4 h-4" />,
  medium: <BookOpen className="w-4 h-4" />,
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12 px-4">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-bold text-lg gradient-text">{profile.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{profile.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            {Object.entries(profile.social).slice(0, 6).map(([key, url]) => (
              socialIcons[key] && (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass border border-white/8 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
                  aria-label={key}
                >
                  {socialIcons[key]}
                </a>
              )
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {year} {profile.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/50 mt-1">
              Built with React + Vite + TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
