import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="h-screen bg-black text-white flex flex-col">

      {/* CENTER */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-[#ff0033] tracking-widest">
            NETCAT
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            SERVER:666
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="pb-2 flex justify-center">
        <button
          className="px-10 py-3 bg-[#ff0033] text-black font-bold rounded-md
                     hover:bg-white hover:text-black transition-all duration-300
                     shadow-lg shadow-red-500/30"
        >
          INITIATE
        </button>
      </div>

      {/* STATUS TEXT */}
      <div className="mt-2 text-gray-700 text-sm tracking-wide text-center pb-4">
        SYSTEM ONLINE • CONNECTION STABLE • ROOT ACCESS READY
      </div>
    </div>
    </div>
  )
}

export default Home