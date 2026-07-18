import { useState } from 'react'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Mail, Github, Linkedin, Twitter, Youtube, BookOpen, Send, Calendar, Copy, Check } from 'lucide-react'
import profile from '@/data/profile.json'

const socialLinks = [
  { key: 'github', label: 'GitHub', icon: <Github className="w-5 h-5" />, url: profile.social.github },
  { key: 'linkedin', label: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: profile.social.linkedin },
  { key: 'x', label: 'X / Twitter', icon: <Twitter className="w-5 h-5" />, url: profile.social.x },
  { key: 'medium', label: 'Medium', icon: <BookOpen className="w-5 h-5" />, url: profile.social.medium },
  { key: 'youtube', label: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: profile.social.youtube },
  { key: 'email', label: profile.social.email, icon: <Mail className="w-5 h-5" />, url: `mailto:${profile.social.email}`, isEmail: true },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: 'PLACEHOLDER_WEB3FORMS_KEY', ...form }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.social.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">Get In Touch</span>
            <h2 className="heading-lg">Let's Work Together</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Open to consulting engagements, architecture reviews, and full-time opportunities.
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <SectionReveal delay={0.1}>
            <GlassCard className="p-6" hover={false}>
              {status === 'sent' ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-semibold text-lg mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block" htmlFor="contact-name">Name</label>
                      <input id="contact-name" type="text" required value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full px-3 py-2.5 rounded-xl bg-white/3 border border-white/10 text-sm outline-none focus:border-[#FF9900]/50 transition-colors"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block" htmlFor="contact-email">Email</label>
                      <input id="contact-email" type="email" required value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full px-3 py-2.5 rounded-xl bg-white/3 border border-white/10 text-sm outline-none focus:border-[#FF9900]/50 transition-colors"
                        placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block" htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" type="text" required value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl bg-white/3 border border-white/10 text-sm outline-none focus:border-[#FF9900]/50 transition-colors"
                      placeholder="How can I help?" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block" htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" required rows={5} value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl bg-white/3 border border-white/10 text-sm outline-none focus:border-[#FF9900]/50 transition-colors resize-none"
                      placeholder="Tell me about your project or inquiry..." />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 text-xs">Something went wrong. Please email me directly.</p>
                  )}
                  <div className="flex gap-3">
                    <button type="submit" disabled={status === 'sending'}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF9900] text-black font-medium hover:bg-[#FFB74D] disabled:opacity-50 transition-colors">
                      <Send className="w-4 h-4" />
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    <a href={profile.calendly_url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-sm text-muted-foreground hover:text-foreground hover:border-white/20 transition-all">
                      <Calendar className="w-4 h-4" /> Book Meeting
                    </a>
                  </div>
                </form>
              )}
            </GlassCard>
          </SectionReveal>

          {/* Social links */}
          <SectionReveal delay={0.2} direction="left">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Connect With Me</h3>
                <button onClick={copyEmail}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy email'}
                </button>
              </div>
              {socialLinks.map(link => (
                <a key={link.key} href={link.url}
                  target={link.isEmail ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/8 hover:border-white/20 hover:bg-white/3 transition-all group">
                  <span className="text-muted-foreground group-hover:text-[#FF9900] transition-colors">{link.icon}</span>
                  <p className="text-sm font-medium">{link.label}</p>
                </a>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
