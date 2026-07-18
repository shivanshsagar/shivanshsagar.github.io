import { SectionReveal } from '@/components/ui/SectionReveal'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'
import { MapPin, Calendar, Star } from 'lucide-react'
import experienceData from '@/data/experience.json'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">Career</span>
            <h2 className="heading-lg">Professional Experience</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Building enterprise cloud solutions across leading technology companies.
            </p>
          </div>
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF9900]/50 via-purple-brand/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experienceData.map((exp, i) => (
              <SectionReveal key={exp.id} delay={i * 0.15}>
                <div className="md:pl-20 relative">
                  <div className={`absolute left-5 top-8 w-6 h-6 rounded-full border-2 items-center justify-center hidden md:flex ${
                    exp.current ? 'border-[#FF9900] bg-[#FF9900]/20' : 'border-white/20 bg-white/5'
                  }`}>
                    {exp.current && <div className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />}
                  </div>

                  <GlassCard className="p-6 lg:p-8" hover={false}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-heading text-xl font-bold">{exp.company}</h3>
                          {exp.current && <Badge variant="orange">Current</Badge>}
                        </div>
                        <p className="text-[#FF9900] font-medium">{exp.role}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                          <Badge variant="default">{exp.type}</Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{exp.summary}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((r, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]/60 mt-1.5 flex-shrink-0" />{r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-1">
                          <Star className="w-4 h-4 text-[#FF9900]" /> Highlights
                        </h4>
                        <ul className="space-y-2 mb-5">
                          {exp.highlights.map((h, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-brand/60 mt-1.5 flex-shrink-0" />{h}
                            </li>
                          ))}
                        </ul>
                        <h4 className="text-sm font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map(t => (
                            <Badge key={t} variant="default" className="text-xs">{t}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
