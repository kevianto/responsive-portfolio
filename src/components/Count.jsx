import React, { useState } from "react";


function Count() {
  const [Counter, setCounter] = useState(30)
  const [reset,setreset]=useState(false)
  function HandleReturn(){
    setreset(prev=>!prev)
    console.log(reset)
  }
  function HandleClick(){
    setCounter(Counter+1)
}

  return (
    <div>
      <p>{Counter}</p>
      <button onClick={()=>setCounter(prev=>prev+1)}
      className="bg-blue-500 text-center py-7 rounded-lg text-white">Add count</button>
      <button onClick={HandleReturn }
      className="bg-red-500 text-center p-2 rounded-lg text-white">reset</button>
    </div>
  );
}

export default Count;
