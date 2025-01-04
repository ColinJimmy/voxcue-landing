'use client'
export default function LandingPage() {

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
    <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-black via-gray-900 to-cyan-900 text-white">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-pattern opacity-10"
        style={{
          backgroundImage: 'url(/landingdark.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full px-6 space-y-6 lg:flex-row lg:items-center lg:justify-between lg:px-20">
        {/* Left Side Content */}
        <div className="flex flex-col items-start w-full max-w-lg space-y-6 lg:w-1/2">
          {/* Logo */}
          <div className="mb-2">
            <img
              src="/voxcuetemplogo.jpg"
              alt="Voxcue Logo"
              className="w-24 lg:w-32"
            />
          </div>

          {/* Heading and Description */}
          <h1 className="text-4xl font-bold leading-snug lg:text-5xl">
            Welcome to <span className="text-cyan-400">Voxcue</span>
          </h1>
          <p className="text-base text-gray-300 lg:text-lg">
            Record your voice notes, meetings, and more. Get insights, summaries, and create content with AI. Join our waitlist to stay updated!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col items-start w-full space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none md:py-3 md:text-base lg:py-4 lg:text-lg"
            />
            <button
              type="submit"
              className="px-6 py-3 text-lg font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-700 transition duration-300"
            >
              Join Waitlist
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src="/connection.png"
            alt="AI Powered Landing"
            className="max-w-xs rounded-lg shadow-lg lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
