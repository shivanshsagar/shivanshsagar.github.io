import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import skillsData from '@/data/skills.json'
import awsServicesData from '@/data/aws-services.json'
import profile from '@/data/profile.json'

function SkillLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`h-1.5 w-5 rounded-full transition-all ${i < level ? 'bg-[#FF9900]' : 'bg-white/10'}`} />
      ))}
    </div>
  )
}

const awsCategories = ['All', ...Array.from(new Set(awsServicesData.map(s => s.category)))]

export default function Skills() {
  const [awsFilter, setAwsFilter] = useState('All')

  const filteredAws = awsFilter === 'All'
    ? awsServicesData
    : awsServicesData.filter(s => s.category === awsFilter)

  return (
    <>
      <section id="skills" className="section-padding">
        <div className="container-max">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">Expertise</span>
              <h2 className="heading-lg">Skills & Technology Radar</h2>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {skillsData.categories.map((cat, i) => (
              <SectionReveal key={cat.name} delay={i * 0.07}>
                <GlassCard className="p-5" hover={false}>
                  <h3 className="font-semibold text-sm mb-4">{cat.name}</h3>
                  <div className="space-y-3">
                    {cat.skills.map(skill => (
                      <div key={skill.name} className="flex items-center justify-between gap-3">
                        <span className="text-sm text-muted-foreground flex-1 truncate">{skill.name}</span>
                        <SkillLevel level={skill.level} />
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>

          {/* Tech Radar */}
          <SectionReveal>
            <GlassCard className="p-8" hover={false}>
              <div className="text-center mb-6">
                <span className="text-sm text-purple-brand font-medium tracking-widest uppercase">Tech Radar</span>
                <h3 className="heading-md mt-1">Currently Learning</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {profile.about.currently_learning.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Badge variant="purple" className="px-4 py-2 text-sm">{item}</Badge>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </section>

      {/* AWS Services Wall */}
      <section id="aws-services" className="section-padding border-t border-white/5">
        <div className="container-max">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">AWS</span>
              <h2 className="heading-lg">AWS Services Wall</h2>
              <p className="text-muted-foreground mt-4">Services I use daily across enterprise workloads.</p>
            </div>
          </SectionReveal>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {awsCategories.map(cat => (
              <button key={cat} onClick={() => setAwsFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  awsFilter === cat ? 'bg-[#FF9900] text-black' : 'glass border border-white/10 text-muted-foreground hover:border-white/20'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredAws.map((svc, i) => (
              <SectionReveal key={svc.name} delay={i * 0.03}>
                <div className="glass rounded-xl border border-white/8 p-4 hover:border-[#FF9900]/30 hover:bg-[#FF9900]/5 transition-all cursor-default">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm truncate">{svc.name}</span>
                    <span className="text-xs text-muted-foreground/50 flex-shrink-0">{svc.projects}+</span>
                  </div>
                  <p className="text-xs text-muted-foreground/70 mb-2 truncate">{svc.description}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div key={j} className={`h-1 flex-1 rounded-full ${j < svc.rating ? 'bg-[#FF9900]/70' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
