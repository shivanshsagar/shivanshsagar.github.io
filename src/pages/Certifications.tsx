import { SectionReveal } from '@/components/ui/SectionReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import certsData from '@/data/certifications.json'
import achievementsData from '@/data/achievements.json'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">Credentials</span>
            <h2 className="heading-lg">Certifications</h2>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {certsData.map((cert, i) => (
            <SectionReveal key={cert.id} delay={i * 0.12}>
              <GlassCard className="p-6" glow="orange">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}30` }}>
                    <Award className="w-6 h-6" style={{ color: cert.color }} />
                  </div>
                  <Badge variant="green">Active</Badge>
                </div>
                <h3 className="font-semibold text-sm mb-1 leading-snug">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{cert.issuer}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{cert.date}</span>
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#FF9900] hover:underline">
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>

        {/* Achievements */}
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">Journey</span>
            <h2 className="heading-lg">Achievements</h2>
          </div>
        </SectionReveal>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF9900]/40 to-transparent" />
          <div className="space-y-8">
            {achievementsData.map((ach, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="pl-12 relative">
                  <div className="absolute left-1.5 top-2 w-5 h-5 rounded-full bg-[#FF9900]/15 border border-[#FF9900]/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                  </div>
                  <span className="text-xs text-[#FF9900] font-medium">{ach.year}</span>
                  <h4 className="font-semibold mt-0.5 mb-1">{ach.title}</h4>
                  <p className="text-sm text-muted-foreground">{ach.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
