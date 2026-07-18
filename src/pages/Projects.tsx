import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Github, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import projectsData from '@/data/projects.json'

const allCategories = ['All', ...Array.from(new Set(projectsData.flatMap(p => p.category)))]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.includes(activeFilter))

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">Work</span>
            <h2 className="heading-lg">Featured Projects</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Real-world AWS solutions built for enterprise customers — from AI automation to multi-account governance.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-[#FF9900] text-black'
                    : 'glass border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <GlassCard className="p-6 h-full flex flex-col" glow="orange">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.category.map(c => (
                      <Badge key={c} variant="orange" className="text-xs">{c}</Badge>
                    ))}
                    {project.featured && <Badge variant="cyan" className="text-xs">Featured</Badge>}
                  </div>

                  <h3 className="font-heading text-lg font-semibold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{project.problem}</p>

                  <div className="flex flex-wrap gap-1 mb-5">
                    {project.technologies.slice(0, 4).map(t => (
                      <Badge key={t} variant="default" className="text-xs">{t}</Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="default" className="text-xs">+{project.technologies.length - 4}</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center gap-1.5 text-sm text-[#FF9900] hover:underline font-medium"
                    >
                      Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="ml-auto p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
