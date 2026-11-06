interface HeroProps {
  setActiveTab: (tab: 'home' | 'editor' | 'dashboard') => void
}

export default function Hero({ setActiveTab }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[128px]"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
          Now in Public Beta
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="block text-white">Code with</span>
          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Good Vibes
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The AI-powered coding platform that understands your flow. Write, build, and deploy 
          beautiful applications with an editor that adapts to your style.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab('editor')}
            className="group px-8 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-xl font-semibold text-lg transition-all shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Start Coding
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </span>
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl font-semibold text-lg transition-all"
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-play text-sm"></i>
              View Demo
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">50K+</div>
            <div className="text-sm text-gray-500">Developers</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">2M+</div>
            <div className="text-sm text-gray-500">Lines Generated</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
            <div className="text-sm text-gray-500">Uptime</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-gray-500"></i>
      </div>
    </section>
  )
}
