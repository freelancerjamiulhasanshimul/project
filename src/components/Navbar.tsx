import { useState } from 'react'

interface NavbarProps {
  activeTab: 'home' | 'editor' | 'dashboard'
  setActiveTab: (tab: 'home' | 'editor' | 'dashboard') => void
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Vibe Code
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')}>
              Home
            </NavButton>
            <NavButton active={activeTab === 'editor'} onClick={() => setActiveTab('editor')}>
              <i className="fas fa-code mr-2"></i>Editor
            </NavButton>
            <NavButton active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')}>
              <i className="fas fa-chart-bar mr-2"></i>Dashboard
            </NavButton>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-lg font-medium transition-all shadow-lg shadow-violet-500/20">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#12121a] border-b border-white/5 px-4 py-4 space-y-2">
          <MobileNavButton active={activeTab === 'home'} onClick={() => { setActiveTab('home'); setMobileOpen(false) }}>
            Home
          </MobileNavButton>
          <MobileNavButton active={activeTab === 'editor'} onClick={() => { setActiveTab('editor'); setMobileOpen(false) }}>
            Editor
          </MobileNavButton>
          <MobileNavButton active={activeTab === 'dashboard'} onClick={() => { setActiveTab('dashboard'); setMobileOpen(false) }}>
            Dashboard
          </MobileNavButton>
          <div className="pt-3 border-t border-white/10 flex gap-2">
            <button className="flex-1 px-4 py-2 text-sm text-gray-300 border border-white/10 rounded-lg">Sign In</button>
            <button className="flex-1 px-4 py-2 text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg font-medium">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        active
          ? 'bg-white/10 text-white'
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </button>
  )
}

function MobileNavButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        active
          ? 'bg-violet-500/20 text-violet-300'
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </button>
  )
}
