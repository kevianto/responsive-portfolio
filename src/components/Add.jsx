import React from 'react'
import { useState } from 'react';


function Add() {
    const  [Plus, setPlus]= useState(0);
    function HandClick (){
        setPlus(Plus+1);
    }
    function HandReset(){
      setPlus(Plus*0);
    }
  return (
    <div className="bg-yellow-400 py-5 flex-grow gap-6 px-5 flex flex-col" >
        <div className=" bg-slate-50 items-right gap-4 text-right"  >
        <p
        >{Plus}</p>
        </div>
        <div className="bg-yellow-400 gap-5 flex flex-row ">
        <button className="bg-pink-300 p-2 flex-grow  "
        onClick={HandClick}
        >ADD</button>
        <button
        className="bg-purple-400 p-2 flex-grow"
        onClick={HandReset}
        >RESET</button>
        </div>
        
    </div>
  )
}

export default Add