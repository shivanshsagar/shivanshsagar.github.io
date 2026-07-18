import { SectionReveal } from '@/components/ui/SectionReveal'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'
import { Target, Zap, BookOpen, Lightbulb } from 'lucide-react'
import profile from '@/data/profile.json'

const coreTech = [
  'AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation',
  'Docker', 'Kubernetes', 'GitHub Actions', 'Python',
  'Bash', 'PowerShell', 'Networking', 'Cloud Security', 'FinOps', 'Amazon Bedrock'
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">About Me</span>
            <h2 className="heading-lg">The Engineer Behind the Cloud</h2>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6">
            <SectionReveal delay={0.1}>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF9900]/20 to-purple-brand/20 border border-[#FF9900]/20 flex items-center justify-center font-heading text-3xl font-bold gradient-text flex-shrink-0">
                  SS
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground">{profile.location} · {profile.availability}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {profile.titles.slice(0, 2).map(t => (
                      <Badge key={t} variant="orange" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <p className="text-muted-foreground leading-relaxed">{profile.about.summary}</p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <GlassCard className="p-5" hover={false}>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[#FF9900] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium mb-1">Philosophy</p>
                    <p className="text-sm text-muted-foreground italic">&ldquo;{profile.about.philosophy}&rdquo;</p>
                  </div>
                </div>
              </GlassCard>
            </SectionReveal>

            <SectionReveal delay={0.25}>
              <GlassCard className="p-5" hover={false}>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-cyan-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium mb-1">Mission</p>
                    <p className="text-sm text-muted-foreground">{profile.about.mission}</p>
                  </div>
                </div>
              </GlassCard>
            </SectionReveal>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <SectionReveal delay={0.2} direction="left">
              <GlassCard className="p-6" hover={false}>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-[#FF9900]" />
                  <h4 className="font-semibold">Core Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coreTech.map(t => <Badge key={t} variant="default">{t}</Badge>)}
                </div>
              </GlassCard>
            </SectionReveal>

            <SectionReveal delay={0.3} direction="left">
              <GlassCard className="p-6" hover={false}>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-purple-brand" />
                  <h4 className="font-semibold">Currently Learning</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.about.currently_learning.map(item => (
                    <Badge key={item} variant="purple">{item}</Badge>
                  ))}
                </div>
              </GlassCard>
            </SectionReveal>

            <SectionReveal delay={0.4} direction="left">
              <GlassCard className="p-6" hover={false}>
                <p className="text-sm font-medium mb-2">Creative Edge</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{profile.about.creative_edge}</p>
              </GlassCard>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
