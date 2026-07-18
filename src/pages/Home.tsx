import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { TypewriterText } from '@/components/ui/TypewriterText'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { SectionReveal } from '@/components/ui/SectionReveal'
import profile from '@/data/profile.json'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Home() {
  const statItems = [
    { value: profile.stats.experience, suffix: '+', label: profile.stats.experience_label },
    { value: profile.stats.projects, suffix: '+', label: profile.stats.projects_label },
    { value: profile.stats.sops, suffix: '+', label: profile.stats.sops_label },
    { value: profile.stats.customers, suffix: '+', label: profile.stats.customers_label },
    { value: profile.stats.cloud_platforms, suffix: '', label: profile.stats.cloud_platforms_label },
    { value: profile.stats.aws_services, suffix: '+', label: profile.stats.aws_services_label },
  ]

  return (
    <main id="home">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#FF9900]/20 text-sm text-[#FF9900] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
              {profile.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            {profile.name.split(' ')[0]}{' '}
            <span className="gradient-text">{profile.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div variants={itemVariants} className="text-xl sm:text-2xl text-muted-foreground mb-4 h-10">
            <TypewriterText strings={profile.hero_typing} />
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {profile.about.summary.split('.')[0]}.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <a
              href={profile.resume_url}
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF9900] text-black font-medium hover:bg-[#FFB74D] transition-colors shadow-glow-orange"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/10 hover:border-white/20 text-sm font-medium transition-all"
            >
              View Projects <ExternalLink className="w-4 h-4" />
            </a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl glass border border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground transition-all" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl glass border border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground transition-all" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.social.email}`}
              className="p-3 rounded-xl glass border border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground transition-all" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href={profile.calendly_url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass border border-white/10 hover:border-white/20 text-sm text-muted-foreground hover:text-foreground transition-all">
              <Calendar className="w-4 h-4" /> Book a Meeting
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground/50"
          >
            <ArrowDown className="w-5 h-5" />
            <span className="text-xs tracking-widest uppercase">Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section id="stats" className="section-padding border-t border-b border-white/5">
        <div className="container-max">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {statItems.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-heading text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
