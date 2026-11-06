import { useState } from 'react'

interface CodeEditorProps {
  fullScreen?: boolean
}

export default function CodeEditor({ fullScreen = false }: CodeEditorProps) {
  const [activeFile, setActiveFile] = useState('App.tsx')
  const [code, setCode] = useState(`import React from 'react'
import { motion } from 'framer-motion'

// ✨ Vibe Coding - AI Generated Component
export default function App() {
  const [count, setCount] = React.useState(0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-violet-900 to-fuchsia-900"
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-white mb-8">
          Hello, Vibe Coder! 🚀
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCount(c => c + 1)}
          className="px-8 py-4 bg-white/10 backdrop-blur-lg 
                     border border-white/20 rounded-2xl 
                     text-white text-xl font-semibold"
        >
          Clicked {count} times ✨
        </motion.button>
      </div>
    </motion.div>
  )
}`)

  const files = ['App.tsx', 'index.css', 'utils.ts', 'api.ts']
  const lines = code.split('\n')

  return (
    <section className={`${fullScreen ? '' : 'py-24 px-4'}`}>
      {!fullScreen && (
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Code that feels{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              alive
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            An intelligent editor that understands your intent and writes code that flows.
          </p>
        </div>
      )}

      <div className={`${fullScreen ? 'max-w-7xl mx-auto px-4' : 'max-w-5xl mx-auto'}`}>
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/5">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a2e] border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-sm text-gray-500 font-mono">vibe-coding-platform</div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 text-gray-500 hover:text-white transition-colors">
                <i className="fas fa-search text-xs"></i>
              </button>
              <button className="p-1.5 text-gray-500 hover:text-white transition-colors">
                <i className="fas fa-cog text-xs"></i>
              </button>
            </div>
          </div>

          {/* File tabs */}
          <div className="flex items-center bg-[#12121e] border-b border-white/5 overflow-x-auto">
            {files.map((file) => (
              <button
                key={file}
                onClick={() => setActiveFile(file)}
                className={`px-4 py-2.5 text-xs font-mono border-r border-white/5 transition-colors whitespace-nowrap ${
                  activeFile === file
                    ? 'bg-[#1a1a2e] text-white border-b-2 border-b-violet-500'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
                }`}
              >
                <i className={`fas ${file.endsWith('.tsx') ? 'fa-react' : file.endsWith('.css') ? 'fa-paint-brush' : 'fa-file-code'} mr-2 text-[10px]`}></i>
                {file}
              </button>
            ))}
          </div>

          {/* Code area */}
          <div className="bg-[#0d0d1a] p-0 overflow-x-auto">
            <div className="flex min-h-[400px]">
              {/* Line numbers */}
              <div className="py-4 px-3 text-right select-none border-r border-white/5">
                {lines.map((_, i) => (
                  <div key={i} className="text-xs font-mono text-gray-600 leading-6">
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Code content */}
              <div className="flex-1 py-4 px-4 overflow-x-auto">
                <pre className="text-sm font-mono leading-6">
                  {lines.map((line, i) => (
                    <div key={i} className="whitespace-pre">
                      <CodeLine line={line} />
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-[#1a1a2e] border-t border-white/5 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <span><i className="fas fa-code-branch mr-1"></i>main</span>
              <span><i className="fas fa-sync-alt mr-1"></i>synced</span>
            </div>
            <div className="flex items-center gap-4">
              <span>TypeScript React</span>
              <span>UTF-8</span>
              <span className="text-violet-400">
                <i className="fas fa-sparkles mr-1"></i>AI Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CodeLine({ line }: { line: string }) {
  // Simple syntax highlighting
  const highlighted = line
    .replace(/(import|from|export|default|const|return|function)/g, '<span class="text-violet-400">$1</span>')
    .replace(/(React|useState)/g, '<span class="text-cyan-400">$1</span>')
    .replace(/('.*?'|".*?"|`.*?`)/g, '<span class="text-emerald-400">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
    .replace(/(\d+)/g, '<span class="text-amber-400">$1</span>')
    .replace(/(className|initial|animate|whileHover|whileTap|onClick)/g, '<span class="text-fuchsia-400">$1</span>')

  return <code dangerouslySetInnerHTML={{ __html: highlighted || ' ' }} />
}
