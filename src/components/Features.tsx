export default function Features() {
  const features = [
    {
      icon: 'fa-brain',
      title: 'AI-Powered Autocomplete',
      description: 'Context-aware code suggestions that learn your coding style and patterns.',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: 'fa-bolt',
      title: 'Instant Deployment',
      description: 'Push to production in seconds with our integrated CI/CD pipeline.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: 'fa-users',
      title: 'Real-time Collaboration',
      description: 'Code together with your team in real-time, like Google Docs for code.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: 'fa-shield-halved',
      title: 'Enterprise Security',
      description: 'SOC2 compliant with end-to-end encryption and role-based access control.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'fa-palette',
      title: 'Custom Themes',
      description: 'Beautiful, customizable editor themes that match your vibe.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: 'fa-terminal',
      title: 'Integrated Terminal',
      description: 'Full-featured terminal with SSH, Docker, and cloud shell support.',
      color: 'from-indigo-500 to-violet-500',
    },
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              ship faster
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A complete development environment designed for the modern developer workflow.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.04]"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <i className={`fas ${feature.icon} text-white text-lg`}></i>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
