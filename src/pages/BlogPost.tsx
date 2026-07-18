import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { Badge } from '@/components/ui/Badge'

interface FrontMatter {
  title: string
  date: string
  tags: string[]
  summary: string
  readingTime: number
}

function parseFrontmatter(raw: string): { meta: FrontMatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: { title: '', date: '', tags: [], summary: '', readingTime: 0 }, content: raw }

  const yamlLines = match[1].split('\n')
  const meta: Record<string, unknown> = {}

  yamlLines.forEach(line => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    const value = line.slice(colonIdx + 1).trim()
    if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''))
    } else {
      meta[key] = value.replace(/['"]/g, '')
    }
  })

  return {
    meta: {
      title: String(meta.title || ''),
      date: String(meta.date || ''),
      tags: Array.isArray(meta.tags) ? meta.tags as string[] : [],
      summary: String(meta.summary || ''),
      readingTime: Number(meta.readingTime || 5),
    },
    content: match[2],
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function simpleMarkdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^```[\w]*\n([\s\S]*?)```$/gm, (_, code) => `<pre><code>${escapeHtml(code)}</code></pre>`)
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    .replace(/^(?!<[hupol]).+/gm, p => p.trim() ? `<p>${p}</p>` : '')
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [meta, setMeta] = useState<FrontMatter | null>(null)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug) return
    import(`../data/blog-posts/${slug}.md?raw`)
      .then((mod: { default: string }) => {
        const parsed = parseFrontmatter(mod.default)
        setMeta(parsed.meta)
        setContent(parsed.content)
        setLoading(false)
      })
      .catch(() => {
        setNotFound(true)
        setLoading(false)
      })
  }, [slug])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#FF9900]/20 border-t-[#FF9900] animate-spin" />
    </div>
  )

  if (notFound || !meta) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/#blog" className="text-[#FF9900] hover:underline">Back to Blog</Link>
      </div>
    </div>
  )

  return (
    <main className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <Link to="/#blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tags.map(tag => <Badge key={tag} variant="default">{tag}</Badge>)}
          </div>

          <h1 className="heading-xl mb-4">{meta.title}</h1>
          <p className="text-muted-foreground text-lg mb-6">{meta.summary}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-white/5">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />{meta.readingTime} min read
            </span>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <article
            className="prose prose-invert prose-slate max-w-none
              prose-headings:font-heading prose-headings:tracking-tight
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-[#FF9900] prose-a:no-underline hover:prose-a:underline
              prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:glass prose-pre:border prose-pre:border-white/8
              prose-strong:text-foreground
              prose-li:text-muted-foreground
              prose-blockquote:border-l-[#FF9900] prose-blockquote:text-muted-foreground"
          >
            <div dangerouslySetInnerHTML={{ __html: simpleMarkdownToHtml(content) }} />
          </article>
        </SectionReveal>
      </div>
    </main>
  )
}
