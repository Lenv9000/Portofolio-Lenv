'use client'

import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Code2, 
  ArrowUpRight,
  Zap 
} from 'lucide-react'
// IMPORT CONFIG
import { userData } from '@/userConfig'

export default function ProjectsSection() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="heading text-xl text-white mb-1">Featured Projects</h2>
          <p className="text-sm text-neutral-500">A selection of recent work & case studies</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-amber-400">
          <Zap size={14} />
          <span>Portfolio</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {userData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group h-full"
          >
            <div className="h-full bg-surface-800 rounded-2xl border border-surface-600 overflow-hidden hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10 flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                {/* Header: Icon & Link */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-surface-700 group-hover:bg-amber-500/20 transition-colors">
                    <Code2 size={20} className="text-neutral-300 group-hover:text-amber-400" />
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-surface-600 transition-colors"
                    aria-label="View Project"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-surface-700 border border-surface-600 text-[10px] uppercase tracking-wider text-neutral-300 font-medium group-hover:border-surface-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Footer Link */}
                <div className="mt-6 pt-4 border-t border-surface-700">
                   <a 
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer" 
                     className="inline-flex items-center gap-2 text-sm text-amber-500 font-medium hover:gap-3 transition-all"
                   >
                     View Project <ArrowUpRight size={14} />
                   </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
