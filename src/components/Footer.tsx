export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Vibe Code
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              The AI-powered coding platform for developers who code with good vibes.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                <i className="fab fa-github text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                <i className="fab fa-discord text-sm"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Changelog</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Guides</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Vibe Coding Platform. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Made with <span className="text-violet-400">♥</span> for developers everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
