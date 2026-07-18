import { SectionReveal } from '@/components/ui/SectionReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Download, ExternalLink } from 'lucide-react'
import profile from '@/data/profile.json'
import experienceData from '@/data/experience.json'
import certsData from '@/data/certifications.json'

export default function Resume() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="heading-xl">Resume</h1>
              <p className="text-muted-foreground mt-2">View or download my full professional resume.</p>
            </div>
            <div className="flex gap-3">
              <a href={profile.resume_url} download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF9900] text-black font-medium hover:bg-[#FFB74D] transition-colors">
                <Download className="w-4 h-4" /> Download PDF
              </a>
              <a href={profile.resume_url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 hover:border-white/20 text-sm font-medium transition-all">
                <ExternalLink className="w-4 h-4" /> View PDF
              </a>
            </div>
          </div>
        </SectionReveal>

        <div className="space-y-8">
          <SectionReveal delay={0.1}>
            <GlassCard className="p-8" hover={false}>
              <h2 className="font-heading text-2xl font-bold mb-1">{profile.name}</h2>
              <p className="text-[#FF9900] font-medium mb-2">{profile.titles.join(' · ')}</p>
              <p className="text-sm text-muted-foreground mb-4">{profile.location} · {profile.social.email}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{profile.about.summary}</p>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <GlassCard className="p-8" hover={false}>
              <h3 className="font-semibold text-lg mb-6 pb-3 border-b border-white/5">Experience</h3>
              <div className="space-y-8">
                {experienceData.map(exp => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <p className="font-semibold">{exp.role}</p>
                        <p className="text-[#FF9900] text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{exp.period} · {exp.location}</span>
                    </div>
                    <ul className="space-y-1.5 mb-3">
                      {exp.responsibilities.slice(0, 4).map((r, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]/60 mt-1.5 flex-shrink-0" />{r}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map(t => <Badge key={t} variant="default" className="text-xs">{t}</Badge>)}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <GlassCard className="p-8" hover={false}>
              <h3 className="font-semibold text-lg mb-6 pb-3 border-b border-white/5">Certifications</h3>
              <div className="space-y-3">
                {certsData.map(c => (
                  <div key={c.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{c.title}</p>
                      <p className="text-xs text-muted-foreground">{c.issuer} · {c.date}</p>
                    </div>
                    <Badge variant="green">Active</Badge>
                  </div>
                ))}
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </div>
    </main>
  )
}
