import { useState } from 'react'

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week')

  const projects = [
    { name: 'portfolio-v2', language: 'TypeScript', status: 'active', updated: '2 min ago', stars: 24 },
    { name: 'ai-chat-app', language: 'Python', status: 'active', updated: '1 hour ago', stars: 156 },
    { name: 'design-system', language: 'TypeScript', status: 'active', updated: '3 hours ago', stars: 89 },
    { name: 'mobile-api', language: 'Go', status: 'idle', updated: '1 day ago', stars: 42 },
    { name: 'landing-page', language: 'HTML/CSS', status: 'active', updated: '2 days ago', stars: 15 },
  ]

  const activity = [
    { action: 'Pushed to', target: 'main', project: 'portfolio-v2', time: '2 min ago', icon: 'fa-code-commit' },
    { action: 'Deployed', target: 'production', project: 'ai-chat-app', time: '1 hour ago', icon: 'fa-rocket' },
    { action: 'Created PR', target: '#42', project: 'design-system', time: '3 hours ago', icon: 'fa-code-pull-request' },
    { action: 'Reviewed', target: '#38', project: 'mobile-api', time: '5 hours ago', icon: 'fa-eye' },
    { action: 'Merged', target: '#35', project: 'landing-page', time: '1 day ago', icon: 'fa-code-merge' },
  ]

  const stats = [
    { label: 'Commits This Week', value: '127', change: '+12%', up: true },
    { label: 'Lines of Code', value: '45.2K', change: '+8%', up: true },
    { label: 'Deployments', value: '34', change: '+23%', up: true },
    { label: 'AI Suggestions', value: '1,847', change: '+45%', up: true },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Welcome back! Here's what's happening.</p>
        </div>
        <div className="flex items-center gap-2">
          {(['week', 'month', 'year'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                timeRange === range
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                  : 'text-gray-500 hover:text-gray-300 border border-transparent'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className={`text-xs font-medium ${stat.up ? 'text-emerald-400' : 'text-red-400'}`}>
                <i className={`fas fa-arrow-${stat.up ? 'up' : 'down'} mr-1`}></i>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects */}
        <div className="lg:col-span-2 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
          <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-semibold text-white text-sm">Recent Projects</h3>
            <button className="text-xs text-violet-400 hover:text-violet-300">View All</button>
          </div>
          <div className="divide-y divide-white/5">
            {projects.map((project, i) => (
              <div key={i} className="px-5 py-3.5 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'active' ? 'bg-emerald-400' : 'bg-gray-500'}`}></div>
                  <div>
                    <div className="text-sm font-medium text-white">{project.name}</div>
                    <div className="text-xs text-gray-500">{project.language} • {project.updated}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500">
                    <i className="fas fa-star text-amber-400/60 mr-1"></i>{project.stars}
                  </span>
                  <button className="p-1.5 text-gray-500 hover:text-white transition-colors">
                    <i className="fas fa-external-link-alt text-xs"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
          <div className="px-5 py-4 border-b border-white/5">
            <h3 className="font-semibold text-white text-sm">Activity</h3>
          </div>
          <div className="p-4 space-y-4">
            {activity.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className={`fas ${item.icon} text-violet-400 text-[10px]`}></i>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-300">
                    {item.action} <span className="text-white font-medium">{item.target}</span> in <span className="text-violet-400">{item.project}</span>
                  </p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contribution graph */}
      <div className="mt-6 rounded-xl bg-white/[0.02] border border-white/5 p-5">
        <h3 className="font-semibold text-white text-sm mb-4">Contribution Activity</h3>
        <div className="flex gap-1 overflow-x-auto pb-2">
          {Array.from({ length: 52 }).map((_, week) => (
            <div key={week} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, day) => {
                const intensity = Math.random()
                let color = 'bg-white/[0.03]'
                if (intensity > 0.8) color = 'bg-violet-500'
                else if (intensity > 0.6) color = 'bg-violet-500/60'
                else if (intensity > 0.4) color = 'bg-violet-500/30'
                else if (intensity > 0.2) color = 'bg-violet-500/10'
                return (
                  <div key={day} className={`w-2.5 h-2.5 rounded-sm ${color}`}></div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
