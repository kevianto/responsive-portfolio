import React, { useEffect, useState } from "react";

function Count() {
  const [Counter, setCounter] = useState(0);
  const [reset, setreset] = useState(false);
  useEffect(() => {
    console.log(Counter);
  }, [Counter]);
  function HandleReturn() {
    setreset((prev) => !prev);
    console.log(reset);
  }
  function HandleClick() {
    setCounter(Counter + 1);
  }

  return (
    <div>
      <img src="./profile-pic.jpg" alt="" className="md:w-[60%] rounded-full" />
      <p>{Counter}</p>
      {Counter < 10 && <p className="text-red-700">Count is less than 10</p>}
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        className="bg-blue-500 text-center py-7 rounded-lg text-white"
      >
        Add counter
      </button>
      <button
        onClick={HandleReturn}
        className="bg-red-500 text-center p-2 rounded-lg text-white"
      >
        reset
      </button>
     
    </div>
  );
}

export default Count;
