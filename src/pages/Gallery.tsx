import { useState } from 'react'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Serverless', 'CI/CD', 'Networking', 'Security', 'AI', 'Containers', 'Landing Zone', 'Monitoring']

const diagrams = [
  { id: 1, title: 'AI Ticket Summarizer Architecture', category: 'AI', description: 'Lambda → EventBridge → Bedrock → DynamoDB → SNS' },
  { id: 2, title: 'Multi-Account Landing Zone', category: 'Landing Zone', description: 'Control Tower → Organizations → SCPs → Terraform' },
  { id: 3, title: 'CloudTrail Monitoring Pipeline', category: 'Security', description: 'CloudTrail → EventBridge → Lambda → SNS → Slack' },
  { id: 4, title: 'ECS Fargate CI/CD Pipeline', category: 'CI/CD', description: 'GitHub → Actions → ECR → ECS Fargate → ALB' },
  { id: 5, title: 'Serverless Notification Platform', category: 'Serverless', description: 'CloudWatch → SNS → Lambda → Google Chat API' },
  { id: 6, title: 'EKS Production Cluster', category: 'Containers', description: 'EKS → Karpenter → ALB → ExternalDNS → Prometheus' },
  { id: 7, title: 'Hub-Spoke Network Architecture', category: 'Networking', description: 'Transit Gateway → VPCs → VPN → Direct Connect' },
  { id: 8, title: 'WAR Intelligence Platform', category: 'AI', description: 'Config → Lambda → Bedrock → S3 → CloudFront → React' },
  { id: 9, title: 'CloudWatch Monitoring Stack', category: 'Monitoring', description: 'CloudWatch → Grafana → Prometheus → OpenSearch' },
]

const categoryColors: Record<string, string> = {
  AI: '#A855F7',
  Security: '#FF9900',
  Serverless: '#00D4FF',
  'Landing Zone': '#10B981',
  'CI/CD': '#FF9900',
  Containers: '#00D4FF',
  Networking: '#A855F7',
  Monitoring: '#10B981',
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState<typeof diagrams[0] | null>(null)

  const filtered = activeCategory === 'All' ? diagrams : diagrams.filter(d => d.category === activeCategory)

  return (
    <main className="pt-28 pb-20">
      <div className="section-padding">
        <div className="container-max">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">Designs</span>
              <h1 className="heading-xl">Architecture Gallery</h1>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Infrastructure diagrams and architecture designs from real enterprise projects.
              </p>
            </div>
          </SectionReveal>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat ? 'bg-[#FF9900] text-black' : 'glass border border-white/10 text-muted-foreground hover:border-white/20'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((diagram, i) => (
              <SectionReveal key={diagram.id} delay={i * 0.08}>
                <GlassCard className="overflow-hidden cursor-pointer" glow="purple" onClick={() => setSelected(diagram)}>
                  <div className="h-48 flex items-center justify-center relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${categoryColors[diagram.category] || '#FF9900'}10, transparent)` }}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="grid grid-cols-3 gap-4">
                        {Array.from({ length: 9 }).map((_, j) => (
                          <div key={j} className="w-8 h-8 rounded-lg border"
                            style={{ borderColor: `${categoryColors[diagram.category] || '#FF9900'}60`, background: `${categoryColors[diagram.category] || '#FF9900'}15` }} />
                        ))}
                      </div>
                    </div>
                    <div className="relative z-10 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: `${categoryColors[diagram.category] || '#FF9900'}20`, color: categoryColors[diagram.category] || '#FF9900', border: `1px solid ${categoryColors[diagram.category] || '#FF9900'}30` }}>
                      {diagram.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-1">{diagram.title}</h3>
                    <p className="text-xs text-muted-foreground font-mono">{diagram.description}</p>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 max-w-2xl w-full glass rounded-2xl border border-white/10 overflow-hidden"
              onClick={e => e.stopPropagation()}>
              <div className="h-64 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${categoryColors[selected.category] || '#FF9900'}15, transparent)` }}>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground font-mono mb-2">{selected.description}</p>
                  <p className="text-muted-foreground/40 text-sm">Architecture diagram placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">{selected.title}</h3>
                <p className="text-sm text-muted-foreground font-mono">{selected.description}</p>
              </div>
              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-lg glass border border-white/10 hover:bg-white/10 transition-colors" aria-label="Close">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
