import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@/context/ThemeContext'
import { CommandPaletteProvider } from '@/context/CommandPaletteContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CommandPalette } from '@/components/layout/CommandPalette'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { AuroraBackground } from '@/components/background/AuroraBackground'

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Experience = lazy(() => import('@/pages/Experience'))
const Projects = lazy(() => import('@/pages/Projects'))
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'))
const Skills = lazy(() => import('@/pages/Skills'))
const Certifications = lazy(() => import('@/pages/Certifications'))
const Blog = lazy(() => import('@/pages/Blog'))
const BlogPost = lazy(() => import('@/pages/BlogPost'))
const Resume = lazy(() => import('@/pages/Resume'))
const Services = lazy(() => import('@/pages/Services'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const Testimonials = lazy(() => import('@/pages/Testimonials'))
const Contact = lazy(() => import('@/pages/Contact'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#FF9900]/20 border-t-[#FF9900] animate-spin" />
    </div>
  )
}

// Single-page layout: all sections on one page with anchor links
function SinglePageLayout() {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Blog />
        <Testimonials />
        <Contact />
      </Suspense>
    </>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<SinglePageLayout />} />
          <Route path="/projects/:slug" element={
            <Suspense fallback={<PageLoader />}><ProjectDetail /></Suspense>
          } />
          <Route path="/blog/:slug" element={
            <Suspense fallback={<PageLoader />}><BlogPost /></Suspense>
          } />
          <Route path="/resume" element={
            <Suspense fallback={<PageLoader />}><Resume /></Suspense>
          } />
          <Route path="/services" element={
            <Suspense fallback={<PageLoader />}><Services /></Suspense>
          } />
          <Route path="/gallery" element={
            <Suspense fallback={<PageLoader />}><Gallery /></Suspense>
          } />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <CommandPaletteProvider>
          <HashRouter>
            <div className="relative min-h-screen">
              <AuroraBackground />
              <Navbar />
              <CommandPalette />
              <AnimatedRoutes />
              <Footer />
              <ScrollToTop />
            </div>
          </HashRouter>
        </CommandPaletteProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
