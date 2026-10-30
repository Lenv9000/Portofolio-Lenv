'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Send, 
  ExternalLink, 
  Phone,
  Copy,
  Check 
} from 'lucide-react'
// IMPORT CONFIG
import { userData } from '@/userConfig'

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="heading text-xl text-white mb-1">Let&apos;s Connect</h2>
        <p className="text-sm text-neutral-500">
          Open to discussing analytics leadership roles, consulting opportunities, or interesting projects
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        
        {/* 1. Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-surface-700 rounded-2xl p-6 border border-surface-500 card-hover group relative"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-surface-900 transition-all">
              <Mail size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-white mb-1">Email</h3>
              <p className="text-sm text-neutral-400 truncate">{userData.email}</p>
              <p className="text-xs text-neutral-600 mt-2">Usually responds within 24 hours</p>
            </div>
            {/* Copy Button */}
            <button 
              onClick={() => handleCopy(userData.email, 'email')}
              className="text-neutral-600 hover:text-amber-400 transition-colors p-1"
              title="Copy Email"
            >
              {copied === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            </button>
          </div>
        </motion.div>

        {/* 2. LinkedIn Card */}
        <motion.a
          href={userData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface-700 rounded-2xl p-6 border border-surface-500 card-hover group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Linkedin size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-white mb-1">LinkedIn</h3>
              <p className="text-sm text-neutral-400 truncate">Connect on LinkedIn</p>
              <p className="text-xs text-neutral-600 mt-2">Professional Network</p>
            </div>
            <div className="text-neutral-600 group-hover:text-blue-400 transition-colors">
              <ExternalLink size={16} />
            </div>
          </div>
        </motion.a>

        {/* 3. Phone Card (Conditional) */}
        {userData.contact.phone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-surface-700 rounded-2xl p-6 border border-surface-500 card-hover group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-white mb-1">Phone</h3>
                <p className="text-sm text-neutral-400 truncate">{userData.contact.phone}</p>
                <p className="text-xs text-neutral-600 mt-2">WhatsApp available</p>
              </div>
              <button 
                onClick={() => handleCopy(userData.contact.phone, 'phone')}
                className="text-neutral-600 hover:text-emerald-400 transition-colors p-1"
                title="Copy Phone"
              >
                {copied === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>
          </motion.div>
        )}

        {/* 4. Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-surface-700 rounded-2xl p-6 border border-surface-500"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400">
              <MapPin size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-white mb-1">Location</h3>
              <p className="text-sm text-neutral-400">{userData.location}</p>
              <p className="text-xs text-neutral-600 mt-2">Open to relocation</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Availability Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-6 border border-amber-500/20"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-medium text-sm hidden sm:inline">Open to Opportunities</span>
          </div>
          <div className="h-4 w-px bg-surface-500 hidden sm:block" />
          <p className="text-sm text-neutral-400">
            {userData.contact.statusMessage}
          </p>
        </div>
      </motion.div>

      {/* Services Tags (Dynamic) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-surface-700/50 rounded-2xl p-6 border border-surface-600"
      >
        <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-medium">
          I can help with
        </h3>
        <div className="flex flex-wrap gap-2">
          {userData.contact.services.map((item, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              className="px-3 py-1.5 rounded-lg bg-surface-600 text-xs text-neutral-300 font-medium hover:bg-amber-500/20 hover:text-amber-400 transition-colors cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
