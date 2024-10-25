import React from 'react'
import { useState } from 'react';


function Add() {
    const  [Plus, setPlus]= useState(0);
    function HandClick (){
        setPlus(Plus+1);
    }
  return (
    <div className="bg-yellow-400 py-5 flex-grow gap-6">
        <div className=" bg-slate-50 items-right"  >
        <p
        >{Plus}</p>
        </div>
        <div className="bg-slate-400">
        <button className="bg-pink-300 p-2 flex-grow "
        onClick={HandClick}
        >ADD</button>
        <button
        className="bg-purple-400 p-2 flex-grow"
        >RESET</button>
        </div>
        
    </div>
  )
}

export default Add