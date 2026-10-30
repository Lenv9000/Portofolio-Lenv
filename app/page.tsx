'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles,
  Briefcase,
  Building2
} from 'lucide-react'
// --- IMPORT CONFIG ---
import { userData } from '@/userConfig'

// Components
import Sidebar from '@/components/Sidebar'
// We removed KPICard here because DashboardStats handles it now
import DashboardStats from '@/components/DashboardStats' 
import ExperienceTimeline from '@/components/ExperienceTimeline'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsMatrix from '@/components/SkillsMatrix'
import ContactSection from '@/components/ContactSection'

type Section = 'dashboard' | 'experience' | 'projects' | 'skills' | 'contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard')

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard': return <DashboardView />
      case 'experience': return <ExperienceView />
      case 'projects': return <ProjectsView />
      case 'skills': return <SkillsView />
      case 'contact': return <ContactView />
      default: return <DashboardView />
    }
  }

  return (
    <div className="min-h-screen bg-surface-900 grid-bg">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={(section) => setActiveSection(section as Section)} 
      />

      <main className="lg:ml-[280px] min-h-screen">
        <div className="max-w-6xl mx-auto p-6 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

// --- DASHBOARD VIEW ---
function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-2"
        >
          <Sparkles size={16} />
          <span>Analytics Dashboard</span>
        </motion.div>
        <h1 className="heading text-3xl sm:text-4xl text-white mb-2">
          Career at a Glance
        </h1>
        <p className="text-neutral-400 max-w-2xl">
          {userData.tagline}
        </p>
      </div>

      {/* NEW COMPONENT: Replaces the messy loop */}
      <DashboardStats />

      {/* Two Column Layout (Timeline & Skills) */}
      <div className="grid lg:grid-cols-5 gap-6">
        
        {/* Career Trajectory Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-3 bg-surface-800/50 rounded-2xl p-6 border border-surface-600 backdrop-blur-sm"
        >
          <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-medium">
            Career Trajectory
          </h3>
          <div className="space-y-4">
            {userData.experience.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color || '#f59e0b'}20` }}
                >
                  <Building2 size={18} style={{ color: item.color || '#f59e0b' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-white truncate">{item.company}</h4>
                    {item.current && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium uppercase tracking-wider flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-400 truncate">{item.role}</p>
                </div>
                <span className="hidden sm:block text-xs text-neutral-600 font-mono flex-shrink-0">{item.period}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Domain Expertise Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-surface-800/50 rounded-2xl p-6 border border-surface-600 backdrop-blur-sm"
        >
          <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-medium">
            Domain Expertise
          </h3>
          <div className="space-y-4">
            {userData.domains.map((domain, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-neutral-300">{domain.name}</span>
                  <span className="text-amber-400 font-mono text-xs">{domain.level}%</span>
                </div>
                <div className="h-2 bg-surface-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${domain.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer / CTA Teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-6 border border-amber-500/20"
      >
        <div className="flex items-center gap-4">
           <div className="p-3 rounded-xl bg-amber-500/20">
             <Briefcase size={20} className="text-amber-400" />
           </div>
           <div>
             <h3 className="font-heading font-semibold text-white mb-0.5">Ready to Hire?</h3>
             <p className="text-sm text-neutral-400">
               Check out my skills or contact me directly to discuss opportunities.
             </p>
           </div>
        </div>
      </motion.div>
    </div>
  )
}

// --- SUB-VIEWS ---

function ExperienceView() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-2">
          <Briefcase size={16} />
          <span>Experience</span>
        </div>
        <h1 className="heading text-3xl sm:text-4xl text-white mb-2">Professional Journey</h1>
      </div>
      <ExperienceTimeline />
    </div>
  )
}

function ProjectsView() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-2">
          <Sparkles size={16} />
          <span>Projects</span>
        </div>
        <h1 className="heading text-3xl sm:text-4xl text-white mb-2">Recent Work</h1>
      </div>
      <ProjectsSection />
    </div>
  )
}

function SkillsView() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-2">
          <Building2 size={16} />
          <span>Skills</span>
        </div>
        <h1 className="heading text-3xl sm:text-4xl text-white mb-2">Technical Stack</h1>
      </div>
      <SkillsMatrix />
    </div>
  )
}

function ContactView() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-2">
          <Sparkles size={16} />
          <span>Contact</span>
        </div>
        <h1 className="heading text-3xl sm:text-4xl text-white mb-2">Get in Touch</h1>
      </div>
      <ContactSection />
    </div>
  )
}
