import { SectionReveal } from '@/components/ui/SectionReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Quote, Linkedin } from 'lucide-react'
import testimonialsData from '@/data/testimonials.json'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-max">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">Social Proof</span>
            <h2 className="heading-lg">What People Say</h2>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <SectionReveal key={t.id} delay={i * 0.12}>
              <GlassCard className="p-6 h-full flex flex-col" hover={false}>
                <Quote className="w-8 h-8 text-[#FF9900]/30 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF9900]/20 to-purple-brand/20 border border-white/10 flex items-center justify-center font-semibold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={t.type === 'manager' ? 'orange' : t.type === 'customer' ? 'cyan' : 'purple'} className="text-xs">
                      {t.type}
                    </Badge>
                    {t.linkedinUrl && (
                      <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-blue-400 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
