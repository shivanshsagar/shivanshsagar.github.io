import { useState } from 'react'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Clock, Calendar, Search, ArrowRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'

interface BlogPostMeta {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
  readingTime: number
}

const blogPosts: BlogPostMeta[] = [
  {
    slug: 'getting-started-bedrock',
    title: 'Getting Started with Amazon Bedrock for Enterprise AI',
    date: '2024-11-15',
    tags: ['AWS', 'AI', 'Amazon Bedrock', 'Serverless'],
    summary: 'A practical guide to integrating Amazon Bedrock into enterprise AWS workloads — from model selection to production deployment patterns.',
    readingTime: 8,
  },
  {
    slug: 'terraform-multi-account',
    title: 'Terraform Multi-Account AWS Architecture at Scale',
    date: '2024-09-20',
    tags: ['Terraform', 'AWS', 'IaC', 'Multi-Account'],
    summary: 'How to structure Terraform code for managing hundreds of AWS accounts without losing your mind — patterns, modules, and lessons from production.',
    readingTime: 10,
  },
  {
    slug: 'finops-aws-cost',
    title: 'AWS FinOps: A Practical Guide to Cloud Cost Optimization',
    date: '2024-07-10',
    tags: ['FinOps', 'AWS', 'Cost Optimization', 'Cloud'],
    summary: 'Real-world strategies for reducing AWS costs without sacrificing performance — from Reserved Instances to rightsizing and anomaly detection.',
    readingTime: 12,
  },
]

const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(p => p.tags)))]

export default function Blog() {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState('All')

  const filtered = blogPosts.filter(post => {
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase())
    const matchTag = activeTag === 'All' || post.tags.includes(activeTag)
    return matchSearch && matchTag
  })

  return (
    <section id="blog" className="section-padding">
      <div className="container-max">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-sm text-[#FF9900] font-medium tracking-widest uppercase mb-3 block">Writing</span>
            <h2 className="heading-lg">Blog</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Deep dives into AWS, DevOps, Terraform, FinOps, and AI-powered cloud engineering.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass border border-white/10 text-sm outline-none focus:border-[#FF9900]/50 transition-colors"
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {allTags.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTag === tag ? 'bg-[#FF9900] text-black' : 'glass border border-white/10 text-muted-foreground hover:border-white/20'
                }`}>
                {tag !== 'All' && <Tag className="w-3 h-3" />}
                {tag}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="max-w-3xl mx-auto space-y-6">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">No articles found.</p>
          ) : (
            filtered.map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.1}>
                <GlassCard className="p-6" glow="orange">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map(tag => <Badge key={tag} variant="default" className="text-xs">{tag}</Badge>)}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-[#FF9900] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />{post.readingTime} min read
                      </span>
                    </div>
                    <Link to={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-sm text-[#FF9900] hover:underline font-medium">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
