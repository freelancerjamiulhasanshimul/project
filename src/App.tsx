import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CodeEditor from './components/CodeEditor'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'editor' | 'dashboard'>('home')

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'home' && (
        <>
          <Hero setActiveTab={setActiveTab} />
          <Features />
          <CodeEditor />
        </>
      )}
      
      {activeTab === 'editor' && (
        <div className="pt-20">
          <CodeEditor fullScreen />
        </div>
      )}
      
      {activeTab === 'dashboard' && (
        <div className="pt-20">
          <Dashboard />
        </div>
      )}
      
      <Footer />
    </div>
  )
}

export default App
