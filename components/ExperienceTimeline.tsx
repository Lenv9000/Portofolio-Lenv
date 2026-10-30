'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react'
// IMPORT CONFIG
import { userData } from '@/userConfig'

export default function ExperienceTimeline() {
  // Default to opening the first item (index 0)
  const [expandedId, setExpandedId] = useState<number | null>(0)

  // --- SMART DATE PARSER ---
  // This extracts years from strings like "2021 - 2023" so the Gantt chart works automatically
  const timelineData = useMemo(() => {
    const currentYear = new Date().getFullYear()
    
    const parsed = userData.experience.map((exp) => {
      // Extract all 4-digit numbers (years) from the period string
      const years = exp.period.match(/(\d{4})/g)?.map(Number) || []
      
      let start = years[0] || currentYear
      // If "Present" or "Current" is in the text, extend bar to next year
      let end = exp.current || exp.period.toLowerCase().includes('present') 
        ? currentYear + 1 
        : (years[1] || start)

      return { ...exp, startYear: start, endYear: end }
    })

    // Calculate min/max for the graph axis
    const minYear = Math.min(...parsed.map(p => p.startYear)) - 1
    const maxYear = currentYear + 1
    
    return { data: parsed, minYear, maxYear }
  }, [])

  const totalYears = timelineData.maxYear - timelineData.minYear

  const getBarPosition = (start: number, end: number) => {
    const startPos = ((start - timelineData.minYear) / totalYears) * 100
    const endPos = ((end - timelineData.minYear) / totalYears) * 100
    return { left: `${startPos}%`, width: `${Math.max(endPos - startPos, 5)}%` } // Min width 5%
  }

  return (
    <div className="space-y-6">
      {/* --- GANTT CHART (Desktop Only) --- */}
      <div className="bg-surface-700 rounded-2xl p-6 border border-surface-500 hidden sm:block">
        <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-6 font-medium">
          Career Timeline
        </h3>
        
        {/* Year Axis */}
        <div className="relative mb-4">
          <div className="flex justify-between text-xs text-neutral-600 font-mono">
            {Array.from({ length: totalYears + 1 }, (_, i) => timelineData.minYear + i).map(year => (
              <span key={year}>{year}</span>
            ))}
          </div>
        </div>

        {/* Timeline Bars */}
        <div className="space-y-3">
          {timelineData.data.map((exp, index) => {
            const position = getBarPosition(exp.startYear, exp.endYear)
            const isActive = expandedId === index
            
            return (
              <div key={index} className="relative h-8">
                {/* Track Background */}
                <div className="absolute inset-0 bg-surface-600 rounded-lg" />
                
                {/* Colored Bar */}
                <motion.button
                  onClick={() => setExpandedId(expandedId === index ? null : index)}
                  className="absolute top-0 h-full rounded-lg flex items-center px-3 text-xs font-medium transition-all cursor-pointer overflow-hidden z-10"
                  style={{
                    left: position.left,
                    width: position.width,
                    backgroundColor: isActive ? (exp.color || '#f59e0b') : `${exp.color || '#f59e0b'}66`, // Dim if inactive
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="truncate text-white drop-shadow-sm">
                    {exp.company}
                  </span>
                  {/* Pulse Dot for Current Roles */}
                  {exp.current && (
                    <span className="ml-2 flex-shrink-0 w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </motion.button>
              </div>
            )
          })}
        </div>
      </div>

      {/* --- DETAILED LIST (Cards) --- */}
      <div className="space-y-4">
        {userData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-surface-700 rounded-2xl border transition-all overflow-hidden ${
              expandedId === index 
                ? 'border-amber-500/30 shadow-lg shadow-amber-500/5' 
                : 'border-surface-500'
            }`}
          >
            {/* Header (Always Visible) */}
            <button
              onClick={() => setExpandedId(expandedId === index ? null : index)}
              className="w-full p-5 flex items-center gap-4 text-left hover:bg-surface-600/50 transition-colors"
            >
              {/* Company Icon Box */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${exp.color || '#f59e0b'}20` }}
              >
                <Building2 size={20} style={{ color: exp.color || '#f59e0b' }} />
              </div>

              {/* Title & Role */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading font-semibold text-white truncate">
                    {exp.company}
                  </h3>
                  {exp.current && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium uppercase tracking-wider">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-amber-400 font-medium truncate">{exp.role}</p>
              </div>

              {/* Meta (Dates/Location) */}
              <div className="hidden sm:flex flex-col items-end gap-1 text-xs text-neutral-500 flex-shrink-0">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{exp.location || 'Remote'}</span>
                </div>
              </div>

              {/* Expand Chevron */}
              <motion.div
                animate={{ rotate: expandedId === index ? 90 : 0 }}
                className="text-neutral-500 flex-shrink-0"
              >
                <ChevronRight size={20} />
              </motion.div>
            </button>

            {/* Expanded Content (Achievements) */}
            <AnimatePresence>
              {expandedId === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-5 pt-0">
                    <div className="border-t border-surface-500 pt-4">
                      
                      {/* Mobile Only Meta */}
                      <div className="sm:hidden flex flex-wrap gap-4 mb-4 text-xs text-neutral-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={12} />
                          <span>{exp.location || 'Remote'}</span>
                        </div>
                      </div>

                      {/* Bullet Points */}
                      <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-3 font-medium">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {/* Handles both 'achievements' (from our new config) and 'highlights' (legacy) */}
                        {((exp as any).achievements || (exp as any).highlights || []).map((point: string, i: number) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-3 text-sm text-neutral-300"
                          >
                            <span 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: exp.color || '#f59e0b' }}
                            />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
