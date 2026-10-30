'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus, LucideIcon } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

interface KPICardProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  icon?: LucideIcon
  description?: string
  delay?: number
  decimals?: number
}

export default function KPICard({
  title,
  value,
  prefix = '',
  suffix = '',
  trend = 'neutral',
  trendValue,
  icon: Icon,
  description,
  delay = 0,
  decimals = 0
}: KPICardProps) {
  const trendColors = {
    up: 'text-emerald-400 bg-emerald-400/10',
    down: 'text-rose-400 bg-rose-400/10',
    neutral: 'text-neutral-400 bg-neutral-400/10'
  }

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative bg-surface-700 rounded-2xl p-6 border border-surface-500 card-hover overflow-hidden group"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {Icon && (
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Icon size={16} />
            </div>
          )}
          <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
            {title}
          </span>
        </div>
        
        {trendValue && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${trendColors[trend]}`}>
            <TrendIcon size={12} />
            <span>{trendValue}</span>
          </div>
        )}
      </div>

      {/* Value */}
      <div className="relative z-10">
        <div className="text-4xl font-bold text-white mb-2">
          <AnimatedCounter 
            value={value} 
            prefix={prefix} 
            suffix={suffix}
            decimals={decimals}
          />
        </div>
        
        {description && (
          <p className="text-sm text-neutral-400">
            {description}
          </p>
        )}
      </div>

      {/* Subtle sparkline decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity">
        <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
          <path
            d="M0 40 Q 25 30, 50 35 T 100 25 T 150 30 T 200 20"
            fill="none"
            stroke="url(#sparklineGradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  )
}

// Compact KPI for smaller displays
export function KPICardCompact({
  title,
  value,
  prefix = '',
  suffix = '',
  delay = 0
}: Omit<KPICardProps, 'trend' | 'trendValue' | 'icon' | 'description'>) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="bg-surface-700/50 rounded-xl p-4 border border-surface-500/50 text-center"
    >
      <div className="text-2xl font-bold text-white mb-1">
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </div>
      <p className="text-xs text-neutral-500 uppercase tracking-wider">{title}</p>
    </motion.div>
  )
}

