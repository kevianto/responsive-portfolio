import React from 'react'

function Newsletter() {
  return (
    <div className="bg-slate-300 py-2 flex flex-row justify-center max-w-[60%] px-2" >
        <input type="email" placeholder="Email Address" className="p-2 border-black flex-1"/>
        <button className="bg-green-700 px-8 text-white font-semibold">Subscribe</button>
    </div>
  )
}

export default Newsletter