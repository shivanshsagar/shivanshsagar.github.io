import { useParams, Link } from 'react-router-dom'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'
import { ArrowLeft, Github, CheckCircle, AlertTriangle, Lightbulb, Zap } from 'lucide-react'
import projectsData from '@/data/projects.json'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projectsData.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-[#FF9900] hover:underline">Go back home</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map(c => <Badge key={c} variant="orange">{c}</Badge>)}
            {project.featured && <Badge variant="cyan">Featured</Badge>}
          </div>

          <h1 className="heading-xl mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map(t => <Badge key={t} variant="default">{t}</Badge>)}
          </div>
        </SectionReveal>

        <div className="space-y-6">
          <SectionReveal delay={0.1}>
            <GlassCard className="p-6" hover={false}>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-[#FF9900]" />
                <h2 className="font-semibold text-lg">The Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <GlassCard className="p-6" hover={false}>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-cyan-brand" />
                <h2 className="font-semibold text-lg">The Solution</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{project.solution}</p>
              <div className="p-3 rounded-xl bg-white/3 border border-white/8 font-mono text-sm text-muted-foreground">
                {project.architecture}
              </div>
            </GlassCard>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            <SectionReveal delay={0.2}>
              <GlassCard className="p-6" hover={false}>
                <h2 className="font-semibold mb-3">Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]/60 mt-1.5 flex-shrink-0" />{c}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <GlassCard className="p-6" hover={false}>
                <h2 className="font-semibold mb-3">Results</h2>
                <ul className="space-y-2">
                  {project.results.map((r, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />{r}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.3}>
            <GlassCard className="p-6" hover={false}>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-purple-brand" />
                <h2 className="font-semibold text-lg">Lessons Learned</h2>
              </div>
              <ul className="space-y-2">
                {project.lessonsLearned.map((l, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-brand/60 mt-1.5 flex-shrink-0" />{l}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.35}>
            <GlassCard className="p-6" hover={false}>
              <h2 className="font-semibold mb-3">AWS Services Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.awsServices.map(s => <Badge key={s} variant="orange">{s}</Badge>)}
              </div>
            </GlassCard>
          </SectionReveal>

          {project.githubUrl && (
            <SectionReveal delay={0.4}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 hover:border-white/20 text-sm font-medium transition-all">
                <Github className="w-4 h-4" /> View on GitHub
              </a>
            </SectionReveal>
          )}
        </div>
      </div>
    </main>
  )
}
