build my portfoilo website, UI, UX animation should be top notch looks premium
page loading speed should be decent
enable cookies, cache and session caching on browser
also SEOing add metadata so that it will rank on google or other search engine also on AI response.

it will be hosted on github static webpage so remember that optimize in that way.

also about me you can use your memory based on my data and conversastion you can update this in about section too.

you can also link all my social media or get in touch thing everything.

You are an award-winning UI/UX designer, senior frontend architect, branding expert, and performance engineer. 

Your goal is to build an enterprise-grade personal portfolio website that looks like it belongs to a Senior Cloud Architect working at Apple, Stripe, Vercel, or OpenAI. The design must be premium, elegant, minimal, and highly polished, avoiding any generic template layouts.

This website is for Shivansh Sagar, a Senior AWS Cloud Engineer, DevOps Engineer, Solutions Architect, and FinOps Consultant. The site must immediately impress recruiters, CTOs, and AI search engines.

### 1. HOSTING & TECH STACK CONSTRAINTS
- **Hosting:** GitHub Pages (100% Static). NO backend, NO server-side rendering (SSR), NO database. 
- **Framework:** React + Vite + TypeScript.
- **Styling:** Tailwind CSS + shadcn/ui (optional but recommended for base accessible components).
- **Animations:** Framer Motion.
- **Icons:** Lucide Icons + Simple Icons.
- **Forms:** Formspree, EmailJS, or Web3Forms (for the Contact section).
- **Data Management:** All content must be driven by local JSON/Markdown files located in a `src/data/` directory.

### 2. PERFORMANCE & SEO
- **Performance:** Target Lighthouse scores of 95+ across all categories. Use lazy-loading for images and heavy components, code splitting, SVG icons, and optimized asset delivery.
- **Caching:** Implement a Service Worker for offline PWA support. Utilize `localStorage` for theme preferences and session caching for static assets. Do not fake server sessions.
- **SEO & AI Discovery:** 
  - Add robust static metadata, Open Graph tags, and Twitter Cards.
  - Implement structured data (JSON-LD) for Person, WebSite, and ProfessionalService schemas.
  - Generate a `sitemap.xml`, `robots.txt`, and `manifest.json`.
  - Ensure semantic HTML (proper `<header>`, `<main>`, `<article>`, `<h1>`-`<h6>` hierarchy) so AI search engines (ChatGPT, Perplexity, Gemini) can easily index the content.

### 3. DESIGN LANGUAGE & ANIMATIONS
- **Theme:** Dark mode by default with a seamless Light mode toggle (auto-detect system preference, save to `localStorage`). Use deep blacks, slate, and crisp white, with subtle accent colors (AWS Orange, Cyan, Purple).
- **Animations:** Premium and purposeful. Include page fade/slide transitions, subtle background aurora/particles, glassmorphism, soft shadows, hover interactions, magnetic buttons, animated counters for stats, and scroll-triggered text reveals.
- **Typography:** Modern, clean, and highly readable with excellent hierarchical spacing.

### 4. FEATURES & ARCHITECTURE
Include the following pages/sections, built as modular components:
1. **Home:** Hero with typing animation, animated background, CTAs (Resume, GitHub, LinkedIn), and a professional summary.
2. **About:** Career journey, mission, and unique blend of technical and creative skills.
3. **Experience:** Interactive timeline of roles (e.g., CloudKeeper, Rackspace) detailing responsibilities, AWS services used, and achievements.
4. **Projects & Case Studies:** Filterable grid with cards containing thumbnails, architecture diagrams, problems/solutions, tech stacks, and GitHub/Docs links.
5. **Skills & Tech Radar:** Interactive, categorized layout (Cloud, Containers, IaC, CI/CD).
6. **AWS Services Wall:** Interactive grid of AWS services with hover cards showing usage stats.
7. **Certifications & Achievements:** Cards with badges, verification links, and a timeline.
8. **Architecture Gallery:** Image grid for categorized infrastructure diagrams.
9. **Blog:** Static Markdown-based blog with syntax highlighting.
10. **Resume:** Web-viewable and PDF download integration.
11. **Services:** Consulting offerings (Architecture Reviews, Cloud Migration, FinOps).
12. **Testimonials:** Clean cards for manager/customer recommendations.
13. **Contact:** Static form integration and social links.
14. **Extra UI Polish:** Command palette (`Ctrl+K` to navigate), custom subtle cursor, scroll-to-top button, and an interactive terminal component.

### 5. DATA STRUCTURE INJECTION
Create a `src/data/profile.json` file that populates the site. Use the exact content below for the foundational data:

```json
{
  "name": "Shivansh Sagar",
  "titles": [
    "Senior AWS Cloud Engineer",
    "DevOps Engineer",
    "Solutions Architect",
    "FinOps Consultant",
    "Automation Engineer"
  ],
  "hero_typing": [
    "Building Cloud Infrastructure",
    "Automating AWS",
    "Designing Serverless Systems",
    "Optimizing Cloud Costs",
    "Architecting Enterprise Solutions"
  ],
  "stats": {
    "experience": "5+ Years",
    "projects": "100+ AWS Projects",
    "sops": "50+ SOPs",
    "availability": "99.99% Production Uptime"
  },
  "about": {
    "summary": "AWS-focused Cloud Engineer with 5+ years of experience designing, automating, optimizing, and supporting enterprise cloud environments. Strong expertise across AWS with working experience in Azure and GCP. Passionate about Infrastructure as Code, serverless architectures, cloud security, observability, automation, FinOps, and AI-powered cloud solutions.",
    "creative_edge": "Beyond cloud architecture, I maintain a strong creative and detail-oriented edge. My side projects include generating conceptual designs and video presentations for 1/7 scale commercial character figurines and producing high-definition visual assets for commercial catalogs. I bring this same meticulous eye for design and consistency to my engineering work—ensuring pixel-perfect standardization of font sizes, table styles, and headers across all technical documentation and UI implementations."
  },
  "highlighted_projects": [
    "AI Ticket Summarizer",
    "WAR Intelligence Platform",
    "CloudTrail Monitoring Solution",
    "Google Chat Notification Platform"
  ]
}

Since you're hosting it on GitHub Pages (static hosting), you should optimize for a fully static website. Avoid server-side features like Next.js SSR, backend APIs, databases, authentication, or server-rendered contact forms. Instead, focus on a fast, SEO-friendly, static portfolio.

Recommended Tech Stack
Framework: React + Vite (or Next.js with static export only)
Language: TypeScript
Styling: Tailwind CSS
UI: shadcn/ui (optional)
Animations: Framer Motion
Icons: Lucide Icons + Simple Icons
Deployment: GitHub Pages
Forms: Formspree, EmailJS, Web3Forms, or Google Forms
Analytics: Google Analytics or Microsoft Clarity
Blog: Static Markdown/MDX (optional)
Website Structure
Home

About

Experience

Projects

Case Studies

Skills

Certifications

Achievements

Blog

Resume

Gallery

Testimonials

Contact
Home Page
Hero Section
Large Name

Shivansh Sagar
Professional Titles

Senior AWS Cloud Engineer

DevOps Engineer

Solutions Architect

FinOps Consultant

Automation Engineer
Typing Animation

Building Cloud Infrastructure

Automating AWS

Designing Serverless Systems

Optimizing Cloud Costs

Architecting Enterprise Solutions
Buttons

Download Resume

View Projects

LinkedIn

GitHub

Contact Me
Background

Animated gradient
Moving particles
AWS-themed subtle graphics
Aurora animation
About Me
Professional Summary
Career Journey
Current Role
Mission
Technologies
Cloud Philosophy
Current Learning
Hobbies (Optional)
Quick Stats
Animated Counters

5+ Years Experience

100+ AWS Projects

50+ SOPs

20+ Enterprise Customers

Millions of AWS Resources Managed

99.99% Production Availability

3 Cloud Platforms

100+ AWS Services Used
Experience
Interactive Timeline
Each company includes

Logo
Duration
Position
Responsibilities
Technologies
Achievements
Rackspace
Responsibilities
Projects
AWS Services
Technologies
Achievements
CloudKeeper
Separate highlight section
Include

AI Ticket Summarizer
WAR Platform
CloudTrail Monitoring
Google Chat Notifications
Cost Optimization
Amazon Bedrock
Architecture Reviews
FinOps
Customer Consulting
Projects
Each project card should contain

Title

Thumbnail

Architecture Diagram

Problem

Solution

AWS Services Used

Tech Stack

Challenges

Results

Lessons Learned

GitHub Link

Documentation

Screenshots
Projects

AI Ticket Summarizer
CloudTrail Monitoring
WAR Platform
Cost Optimization
Infrastructure Automation
Landing Zone Design
CloudFormation Templates
Case Studies
Each page

Business Problem

Architecture

Decision Making

Challenges

Cost Analysis

Performance

Security

Outcome

Lessons Learned
Skills
Organize by category
Cloud
AWS
Azure
GCP
Containers
Docker
Kubernetes
ECS
EKS
Networking
VPC
Route53
CloudFront
Transit Gateway
VPN
Storage
S3
EFS
FSx
EBS
Databases
Aurora
RDS
DynamoDB
Redis
Automation
Terraform
CloudFormation
GitHub Actions
Jenkins
Ansible
Languages
Python
Bash
PowerShell
YAML
JSON
Monitoring
CloudWatch
Grafana
Prometheus
OpenSearch
Security
IAM
KMS
Secrets Manager
GuardDuty
CloudTrail
Security Hub
AWS Services Wall
Interactive grid
Hover card

Lambda

★★★★★

Used in 50+ projects
Repeat for
EC2
IAM
CloudWatch
S3
RDS
EventBridge
SNS
SQS
Step Functions
Organizations
Control Tower
Bedrock
CloudTrail
CloudFormation
API Gateway
and many more.
Certifications
Cards
AWS
Google Cloud
Cisco
Future Goals
Each card

Badge
Credential
Date
Verify Link
Resume
Buttons

View Resume

Download PDF
Include online resume page
Blog
Static markdown articles
Topics
AWS
DevOps
Automation
CloudFormation
Terraform
Amazon Bedrock
FinOps
Architecture
Monitoring
Security
Architecture Gallery
Image Grid
Categories
Serverless
CI/CD
Networking
Security
AI
Containers
Landing Zone
Monitoring
Achievements
Timeline

AWS Certification

Joined CloudKeeper

Built AI Ticket Summarizer

Created 50+ SOPs

Customer Appreciation

Internal Tools

Architecture Reviews

Automation Projects
Testimonials
Cards
Manager
Customer
Colleague
LinkedIn Recommendations
Services
AWS Consulting

Architecture Reviews

Cloud Migration

DevOps Automation

Infrastructure as Code

Cloud Cost Optimization

Landing Zone Design

Security Reviews
Tech Radar
Currently Learning

Amazon Bedrock

Agentic AI

MCP

OpenTofu

Platform Engineering

AI Agents
Interactive Terminal
Commands

about

skills

experience

projects

resume

blog

contact

help
Contact
Use a static form service
Recommended

Formspree
Web3Forms
EmailJS
Fields

Name

Email

Subject

Message
Buttons

Send Message

Schedule Meeting
Social Links
GitHub
LinkedIn
Email
X
Medium
Hashnode
Dev.to
YouTube (optional)
Stack Overflow
Footer
Quick Links
Resume
Projects
Social Icons
Copyright
Version
Last Updated
GitHub Integration (Static)
Since GitHub Pages cannot run a backend:
Show

GitHub profile
Pinned repositories
Contribution graph as an image (generated externally)
Repository cards
GitHub statistics images
Shields.io badges
SEO
Include

sitemap.xml
robots.txt
favicon
manifest.json
Open Graph tags
Twitter Card tags
Canonical URLs
Structured Data (JSON-LD)
Proper page titles and meta descriptions
Performance Optimizations
Static assets only
Lazy-load images
Use SVG icons
Compress images (WebP/AVIF)
Minify CSS/JS
Font preloading
Code splitting
Lighthouse score >95
Responsive images
Cache static assets
Nice-to-Have Features
🌙 Dark/Light mode (stored in localStorage)
🎨 Theme color picker
⌨️ Command palette (Ctrl+K)
📄 Printable resume page
🔍 Project search and filters
🏷️ Skills filter by category
📈 Animated counters
🎉 Smooth page transitions
🖱️ Custom cursor (subtle)
⬆️ Scroll-to-top button
📱 Fully responsive
♿ Accessibility compliant
🌐 Offline support (PWA)
Master Prompt for AI
Build a premium, fully static personal portfolio website optimized for GitHub Pages. Use React + Vite + TypeScript + Tailwind CSS + Framer Motion with no backend or server-side rendering. The website should be fast, SEO-friendly, mobile-responsive, accessible, and achieve a Lighthouse score above 95. Include sections for Home, About, Experience, Featured Projects, Case Studies, Skills, AWS Services Wall, Certifications, Achievements, Blog (static Markdown), Architecture Gallery, Resume, Testimonials, Services, Tech Radar, Interactive Terminal, Contact (using Formspree/EmailJS/Web3Forms), Social Links, and Footer. Use reusable components, lazy-load assets, support dark/light mode with localStorage, include Open Graph metadata, JSON-LD structured data, sitemap.xml, robots.txt, manifest.json, and PWA support. Add polished animations, glassmorphism effects, animated counters, command palette (Ctrl+K), project filtering, GitHub repository showcase, and clean enterprise-grade UI suitable for a Senior AWS Cloud Engineer, DevOps Engineer, Solutions Architect, and FinOps Consultant. Ensure all content is generated from local JSON/Markdown files so the site can be hosted entirely on GitHub Pages without any backend dependencies.

You are an award-winning UI/UX designer, senior frontend architect, branding expert, animation designer, accessibility specialist, SEO expert, and performance engineer.

Your goal is to build an enterprise-grade personal portfolio website that looks like it belongs to a Senior Cloud Architect working at Google, AWS, Microsoft, Stripe, or OpenAI.

This is NOT a resume website.

This is a premium personal brand website.

The website should immediately impress recruiters, CTOs, engineering managers, enterprise customers, startup founders, and AI search engines.

===========================================================================
HOSTING REQUIREMENTS
===========================================================================

The website will be hosted entirely on GitHub Pages.

There is NO backend.

Everything must be static.

Optimize accordingly.

Use:

• React
• Vite
• TypeScript
• Tailwind CSS
• Framer Motion
• Lucide Icons
• React Router
• Local JSON/Markdown for data
• Static assets only

DO NOT use

Next.js SSR
Node backend
Database
Express
Authentication
API server
Server rendering

Everything must work from GitHub Pages.

===========================================================================
DESIGN LANGUAGE
===========================================================================

The design should feel like a mixture of

Apple
Linear
Vercel
Stripe
Raycast
OpenAI
AWS Console (modernized)
Framer
Notion
Arc Browser

Design principles

Premium

Elegant

Minimal

Luxury

Professional

Modern

Clean

Smooth

High-end

The user should feel

"This engineer is extremely skilled."

Avoid template-like layouts.

Avoid generic portfolio designs.

===========================================================================
COLOR SYSTEM
===========================================================================

Dark mode by default

Support Light Mode

Automatic system detection

Remember user preference using localStorage.

Primary colors

Black
Slate
White

Accent colors

AWS Orange

Blue

Purple

Cyan

Gradient effects should be subtle.

No excessive neon.

===========================================================================
TYPOGRAPHY
===========================================================================

Use modern typography.

Large headings.

Excellent spacing.

Readable paragraphs.

Good hierarchy.

===========================================================================
ANIMATIONS
===========================================================================

Animations should be premium.

Use Framer Motion extensively.

Examples

Page transitions

Fade

Slide

Blur

Parallax

Mouse movement

Hover interactions

Animated cards

Animated gradients

Text reveal

Counter animations

Timeline animation

Skill animations

Image reveal

Smooth scrolling

Section transitions

Loading animations

Micro interactions

Button ripple

Floating particles

Background glow

Glassmorphism

Soft shadows

Magnetic buttons

Cursor interactions

Command palette animation

Everything should feel polished.

Do NOT overuse animations.

Performance always comes first.

===========================================================================
PERFORMANCE
===========================================================================

Target Lighthouse Score

Performance > 95

Accessibility > 95

SEO > 100

Best Practices > 100

Use

Lazy loading

Image optimization

SVG wherever possible

Code splitting

Dynamic imports

Compressed assets

Minimal bundle size

Tree shaking

Preconnect fonts

Font-display swap

Minified assets

Avoid layout shift

Avoid blocking JavaScript

===========================================================================
SEO
===========================================================================

This website must rank extremely well on

Google

Bing

DuckDuckGo

Brave

Perplexity

ChatGPT

Gemini

Claude

Copilot

AI Search Engines

Implement

Meta title

Meta description

Canonical URLs

robots.txt

sitemap.xml

manifest.json

Open Graph

Twitter Cards

Schema.org JSON-LD

Breadcrumb Schema

Person Schema

Website Schema

Professional Service Schema where appropriate

Image alt tags

Semantic HTML

Heading hierarchy

Structured data

Rich snippets

FAQ schema

Internal linking

Clean URLs

Readable slugs

Proper page titles

Meta keywords (where useful)

Use static metadata.

Everything should be optimized for AI indexing.

===========================================================================
PWA
===========================================================================

Enable

Manifest

Offline support

Installable website

Theme colors

Icons

===========================================================================
CACHE
===========================================================================

Since this is a static website,

Implement

Service Worker

Browser cache

Static asset caching

LocalStorage where appropriate

SessionStorage where appropriate

Cache user preferences

Cache theme

Cache animations state if useful

Do NOT fake server-side session handling.

Use browser-based caching only.

Cookies should only be used if actually required (for analytics consent or user preferences). Prefer localStorage over cookies unless there is a specific reason.

===========================================================================
RESPONSIVE
===========================================================================

Perfect responsiveness.

Desktop

Laptop

Tablet

Mobile

Ultra-wide

===========================================================================
ACCESSIBILITY
===========================================================================

Keyboard navigation

ARIA labels

Focus indicators

Contrast compliance

Reduced motion support

Screen reader friendly

===========================================================================
PAGES
===========================================================================

Home

About

Experience

Projects

Case Studies

Skills

AWS Services

Certifications

Achievements

Architecture Gallery

Blog

Resume

Testimonials

Services

Contact

===========================================================================
HOME PAGE
===========================================================================

Large hero section.

Professional introduction.

Animated typing effect.

Call to action

Download Resume

GitHub

LinkedIn

Contact

Book a Meeting

Background animation.

Scrolling indicator.

===========================================================================
ABOUT
===========================================================================

Create a compelling About section using the following profile.

Name

Shivansh Sagar

Professional Titles

Senior AWS Cloud Engineer

DevOps Engineer

Solutions Architect

Cloud Consultant

FinOps Engineer

Profile

AWS-focused Cloud Engineer with 5+ years of experience designing, automating, optimizing, and supporting enterprise cloud environments. Strong expertise across AWS with working experience in Azure and Google Cloud Platform. Passionate about Infrastructure as Code, serverless architectures, cloud security, observability, automation, FinOps, and AI-powered cloud solutions.

Professional Journey

Worked in cloud operations, production support, enterprise infrastructure, AWS consulting, DevOps automation, and cloud architecture.

Current focus includes AWS architecture reviews, cloud cost optimization, AI integrations using Amazon Bedrock, infrastructure automation, enterprise migrations, and operational excellence.

Notable work includes

• AI Ticket Summarizer
• WAR Intelligence Platform
• CloudTrail Monitoring Solution
• Google Chat Notification Platform
• AWS Cost Optimization Initiatives
• Infrastructure Automation
• Customer Architecture Reviews
• Amazon Bedrock integrations
• Enterprise AWS consulting

Core Technologies

AWS

Azure

GCP

Terraform

CloudFormation

Docker

Kubernetes

GitHub Actions

Python

Bash

PowerShell

Networking

Cloud Security

FinOps

Automation

Monitoring

===========================================================================
PROJECTS
===========================================================================

Create beautiful project pages.

Each project should include

Problem

Architecture

Solution

Technologies

Challenges

Results

Lessons Learned

Architecture diagram

Screenshots placeholder

GitHub link

Documentation

===========================================================================
SKILLS
===========================================================================

Organize professionally.

Cloud

Compute

Networking

Security

Storage

Databases

Containers

IaC

Monitoring

Programming

DevOps

AI

===========================================================================
CERTIFICATIONS
===========================================================================

Include

AWS Certified Solutions Architect Associate

Google Cloud Associate Cloud Engineer

Cisco CCNA

Support future certifications.

===========================================================================
CONTACT
===========================================================================

Include

GitHub

LinkedIn

Email

Medium

Hashnode

Dev.to

X

YouTube

Stack Overflow

Provide placeholders for URLs that can be updated easily from a single configuration file.

Use EmailJS, Formspree, or Web3Forms for the contact form (compatible with static hosting).

===========================================================================
BLOG
===========================================================================

Support Markdown blog posts.

Syntax highlighting.

Reading time.

Tags.

Search.

Related posts.

===========================================================================
EXTRA FEATURES
===========================================================================

Interactive terminal

Command palette

Theme switcher

Project filtering

Architecture gallery

Animated AWS service wall

Timeline

Animated statistics

Testimonials

Resume download

Copy email button

Back to top

Progress bar

Keyboard shortcuts

===========================================================================
CODE QUALITY
===========================================================================

Component based architecture.

Reusable.

Scalable.

Typed.

Well documented.

Organized folder structure.

Easy to maintain.

Easy to update content.

===========================================================================
CONTENT MANAGEMENT
===========================================================================

Store all personal information in a single configuration/data folder (JSON or TypeScript objects), including:
- Profile
- Experience
- Projects
- Skills
- Certifications
- Social links
- Contact information
- Blog metadata

The UI should render dynamically from these files so future updates require editing data only, not components.

===========================================================================
FINAL GOAL
===========================================================================

The final result should feel like a premium engineering portfolio that stands out from typical templates.

Someone visiting the website should immediately think:

"This is a highly experienced cloud engineer with strong architecture, DevOps, automation, and consulting expertise."

Prioritize craftsmanship, polish, performance, accessibility, maintainability, and discoverability over flashy effects.