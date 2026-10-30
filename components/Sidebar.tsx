'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  Briefcase, 
  Rocket, 
  Code2, 
  Mail,
  Download,
  Linkedin,
  Menu,
  X
} from 'lucide-react'
import Image from 'next/image'
import { userData } from "@/userConfig"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Rocket },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsMobileMenuOpen(false)
  }

  // --- REUSABLE COMPONENTS (So we don't repeat code) ---

  const ProfileImage = () => (
    <div className="relative mb-4">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center overflow-hidden">
        {userData.profileUrl && userData.profileUrl !== "" ? (
          <div className="relative w-full h-full">
            <Image 
              src={userData.profileUrl} 
              alt={userData.name} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-surface-600 to-surface-700 flex items-center justify-center text-neutral-500">
             <span className="text-3xl font-heading font-bold text-amber-500">
                {userData.name.charAt(0)}
             </span>
          </div>
        )}
      </div>
      <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 bg-surface-700 px-2 py-1 rounded-full border border-surface-500">
        <span className="w-2 h-2 bg-emerald-400 rounded-full status-pulse" />
        <span className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider">Open</span>
      </div>
    </div>
  )

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b border-surface-600">
        <ProfileImage />
        <h1 className="heading text-lg text-white mb-1">{userData.name}</h1>
        <p className="text-sm text-amber-400 font-medium mb-1">{userData.role}</p>
        <p className="text-xs text-neutral-500">{userData.location}</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  : 'text-neutral-400 hover:text-white hover:bg-surface-700'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-amber-400' : ''} />
              <span>{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400"
                />
              )}
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-surface-600 space-y-3">
        <a
          href={userData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-neutral-400 hover:text-white hover:bg-surface-700 transition-all"
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>
        <a 
          href={userData.resumeLink}
          download
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-surface-900 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 group"
        >
          <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          <span>Export Resume</span>
        </a>
      </div>

      <div className="px-6 py-4 border-t border-surface-600">
        <p className="text-[10px] text-neutral-600 uppercase tracking-wider">Last Updated</p>
        <p className="text-xs text-neutral-500 font-mono">Current</p>
      </div>
    </>
  )

  return (
    <>
      {/* 1. Mobile Toggle Button (Visible only on Mobile) */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 rounded-xl bg-surface-700 border border-surface-500 text-neutral-300 hover:text-amber-400 transition-colors"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* 2. Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* 3. MOBILE SIDEBAR (Visible only when toggled) */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isMobileMenuOpen ? 0 : -280 }}
        className="fixed left-0 top-0 h-full w-[280px] bg-surface-800 border-r border-surface-600 z-50 flex flex-col lg:hidden"
      >
        <SidebarContent />
      </motion.aside>

      {/* 4. DESKTOP SIDEBAR (Always Visible) */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-[280px] bg-surface-800 border-r border-surface-600 z-30 flex-col">
        <SidebarContent />
      </aside>
    </>
  )
}
