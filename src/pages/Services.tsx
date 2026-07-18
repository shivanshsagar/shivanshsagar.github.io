import { SectionReveal } from '@/components/ui/SectionReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Cloud, GitBranch, DollarSign, Shield, Layers, Cpu, ArrowRight } from 'lucide-react'
import profile from '@/data/profile.json'

const services = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Architecture Reviews',
    description: 'AWS Well-Architected Reviews to identify security, reliability, performance, cost, and operational excellence gaps in your infrastructure.',
    color: '#FF9900',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Cloud Migration',
    description: 'End-to-end cloud migration planning and execution. Lift-and-shift, re-platform, or re-architect strategies for enterprise workloads.',
    color: '#00D4FF',
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'DevOps Automation',
    description: 'CI/CD pipeline design, infrastructure automation, container orchestration, and operational excellence using modern DevOps practices.',
    color: '#A855F7',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Infrastructure as Code',
    description: 'Terraform and CloudFormation module development, IaC best practices, state management, and multi-account deployment strategies.',
    color: '#FF9900',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Cloud Cost Optimization',
    description: 'FinOps audits, Reserved Instance planning, rightsizing analysis, Savings Plans strategy, and automated cost anomaly detection.',
    color: '#00D4FF',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Security Reviews',
    description: 'IAM policy audits, security baseline implementation, GuardDuty + Security Hub setup, compliance reviews, and threat detection.',
    color: '#A855F7',
  },
]

export default function Services() {
  return (
    <main className="pt-28 pb-20">
      <div className="section-padding">
        <div className="container-max">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">Consulting</span>
              <h1 className="heading-xl">Services</h1>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Enterprise cloud consulting from architecture to optimization. Available for project-based engagements and retainers.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((svc, i) => (
              <SectionReveal key={svc.title} delay={i * 0.1}>
                <GlassCard className="p-6 h-full" glow="orange">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}25` }}>
                    <span style={{ color: svc.color }}>{svc.icon}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <GlassCard className="p-10 text-center" hover={false}>
              <h2 className="heading-md mb-3">Ready to get started?</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Let's discuss your cloud challenges and how I can help.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#FF9900] text-black font-medium hover:bg-[#FFB74D] transition-colors">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </a>
                <a href={profile.calendly_url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl glass border border-white/10 hover:border-white/20 text-sm font-medium transition-all">
                  Book a Call
                </a>
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </div>
    </main>
  )
}
