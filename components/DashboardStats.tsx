'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  DollarSign, 
  Users, 
  Activity, 
  BarChart3 
} from 'lucide-react'
// IMPORT CONFIG
import { userData } from '@/userConfig'

export default function DashboardStats() {
  // Map icons to the 4 stats based on index
  const icons = [DollarSign, Activity, Users, BarChart3]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {userData.stats.map((stat, index) => {
        const Icon = icons[index % icons.length]
        
        // Determine Colors based on trend
        const isPositive = stat.trend === 'up'
        const isNeutral = stat.trend === 'neutral'
        const trendColor = isNeutral 
          ? 'text-neutral-400 bg-neutral-500/10 border-neutral-500/20'
          : isPositive 
            ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
            : 'text-rose-400 bg-rose-500/10 border-rose-500/20' 

        // Specific override: If label is "Cost Reduction" and trend is down, make it Green (Good)
        const isCostReduction = stat.label.toLowerCase().includes('cost')
        const finalTrendColor = isCostReduction && stat.trend === 'down' 
           ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
           : trendColor

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-5 rounded-2xl bg-surface-800 border border-surface-600 relative overflow-hidden group hover:border-surface-500 transition-colors"
          >
            {/* Background Gradient Effect */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:from-white/10 transition-all" />

            {/* Top Row: Icon + Label + Badge */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-surface-700 text-amber-400 group-hover:bg-amber-500 group-hover:text-surface-900 transition-colors shadow-lg shadow-black/20">
                  <Icon size={20} />
                </div>
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  {stat.label}
                </h3>
              </div>

              {/* Status Badge (Fixed positioning to prevent overlap) */}
              {stat.trendValue && (
                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[10px] font-medium ${finalTrendColor}`}>
                  {stat.trend === 'up' && <TrendingUp size={12} />}
                  {stat.trend === 'down' && <TrendingDown size={12} />}
                  {stat.trend === 'neutral' && <Minus size={12} />}
                  <span>{stat.trendValue}</span>
                </div>
              )}
            </div>

            {/* Main Value Number (Fixed Repeating Text) */}
            <div className="relative z-10">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white tracking-tight">
                  {stat.prefix}{stat.value}{stat.suffix}
                </span>
              </div>
            </div>

            {/* Decorative Wave Line at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-50" />
          </motion.div>
        )
      })}
    </div>
  )
}
