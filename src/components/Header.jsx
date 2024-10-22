import React from 'react'

function Header() {
  return (
    <div className="flex flex-grow justify-around bg-slate-500 w-full py-3">
      <p className="bg-slate-200 rounded-xl hover:bg-blue-500 p-2 hover:scale-105 hover:cursor-pointer transition-all duration-10">Profile</p>
      <p className="bg-slate-200 rounded-xl hover:bg-blue-500 p-2 hover:scale-105 hover:cursor-pointer transition-all duration-10">Notifications</p>
      <p className="bg-slate-200 rounded-xl hover:bg-blue-500 p-2 hover:scale-105 hover:cursor-pointer transition-all duration-10">Payments</p>
      <p className="bg-slate-200 rounded-xl hover:bg-blue-500 p-2 hover:scale-105 hover:cursor-pointer transition-all duration-10">Settings</p>
    </div>
  )
}

export default Header