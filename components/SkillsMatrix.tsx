'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  BarChart3, 
  Brain, 
  Target,
  GraduationCap,
} from 'lucide-react'
import { userData } from '@/userConfig'

export default function SkillsMatrix() {
  // 1. Theme Configuration
  // We cycle through these styles so the user doesn't have to pick colors manually.
  const theme = [
    { icon: Database, color: '#3b82f6', bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },    // Blue
    { icon: BarChart3, color: '#f59e0b', bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' }, // Amber
    { icon: Brain, color: '#8b5cf6', bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' }, // Purple
    { icon: Target, color: '#10b981', bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' } // Emerald
  ]

  return (
    <div className="space-y-6">
      
      {/* --- 1. SKILLS GRID --- */}
      <div className="grid md:grid-cols-2 gap-4">
        {userData.skills.map((category, index) => {
          // Cycle through the theme array based on index
          const style = theme[index % theme.length]
          const Icon = style.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-700 rounded-2xl p-5 border border-surface-500 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${style.color}20` }}
                >
                  <Icon size={18} style={{ color: style.color }} />
                </div>
                <h3 className="font-heading font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${style.bg} ${style.text} ${style.border}`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* --- 2. EDUCATION SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-surface-700 rounded-2xl p-6 border border-surface-500"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-amber-500/10">
            <GraduationCap size={18} className="text-amber-400" />
          </div>
          <h3 className="font-heading font-semibold text-white">Education</h3>
        </div>

        {/* Dynamic Education Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {userData.education.map((edu, index) => (
             <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-surface-600/30 border border-surface-500/50">
                <div className="flex-1">
                   <h4 className="font-bold text-white text-lg mb-1">{edu.degree}</h4>
                   <p className="text-sm text-amber-400 font-medium mb-0.5">{edu.school}</p>
                   <p className="text-xs text-neutral-400">{edu.location}</p>
                </div>
                <div className="text-right flex-shrink-0">
                   <span className="inline-block px-2 py-1 rounded bg-surface-500 text-xs font-mono text-neutral-300 mb-1">
                     {edu.year}
                   </span>
                   {edu.grade && (
                     <div className="text-xs text-emerald-400 font-bold font-mono">
                       {edu.grade}
                     </div>
                   )}
                </div>
             </div>
          ))}
        </div>
      </motion.div>

      {/* --- 3. SKILL BALANCE (Radar Chart) --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-surface-700 rounded-2xl p-6 border border-surface-500"
      >
        <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-6 font-medium text-center">
          Skill Balance
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {userData.skillBalance.map((item, index) => {
             // Cycle colors for charts
             const chartColor = ['#3b82f6', '#10b981', '#f59e0b'][index % 3];
             
             return (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-2">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    {/* Background circle */}
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#262626"
                      strokeWidth="3"
                    />
                    {/* Progress circle */}
                    <motion.path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={chartColor}
                      strokeWidth="3"
                      strokeDasharray={`${item.value}, 100`}
                      initial={{ strokeDasharray: '0, 100' }}
                      animate={{ strokeDasharray: `${item.value}, 100` }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-white data-number">{item.value}%</span>
                  </div>
                </div>
                <span className="text-xs text-neutral-400">{item.label}</span>
              </div>
             )
          })}
        </div>
      </motion.div>
    </div>
  )
}
