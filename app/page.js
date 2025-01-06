'use client'
import AnimatedBackground from './components/animated-background'

export default function Home() {
  const handleSubmit = (e)=>{
    e.preventDefault()
    const url = "https://script.google.com/macros/s/AKfycbzc_xxUiXgjSA0G28Zog_wn8hLdgaLAVoIG7y6D3ZnNVdYBrJK7tyXmP7xJDI_eIgP5/exec"
    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Email=${e.target.email.value}`)
    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="w-full max-w-2xl mx-auto">
            <div className="space-y-8 backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl">
              <img 
                src="/voxcuetemplogo.jpg" 
                alt="Voxcue Logo" 
                className="w-16 h-16 bg-white rounded-lg"
              />
              
              <h1 className="text-5xl font-bold text-white">
                Welcome to{' '}
                <span className="text-cyan-400 animate-pulse">Voxcue</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Record your voice notes, meetings, and more. Get insights,
                summaries, and create content with AI. Join our waitlist to stay
                updated!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  name='email'
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm
                           transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg bg-cyan-500 text-white font-semibold
                           hover:bg-cyan-400 transform hover:scale-105 transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2
                           focus:ring-offset-gray-900"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}