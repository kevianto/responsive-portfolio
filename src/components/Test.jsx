import React from 'react'

function Test() {
  return (
    <div className="md:bg-slate-500 flex-flex col ">
        <h1 className="color-red  py-3 px-6 font-extrabold">LOG IN</h1>
        <div className="md:w-[6md:w-[60%] flex flex-col bg-slate-500 gap-5 py-4 px-4 flex-grow" >
        <input type="email" 
        placeholder="example@gmail.com"
          className="py-2 border-red-500 flex-1 px-10"
       

        />
       
         <input type="password" 
        
        placeholder="Enter password"
        className="py-2 border-red-500  flex-1 px-10"
        
        />
        <button
        className="flex-grow bg-yellow-600 p-2 text-blue-700 text-bold">
            LOG IN
        </button>
        </div>
    </div>
  )
}

export default Test