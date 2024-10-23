import React from "react";

function Log() {
  return (
    <div className="md:w-[6md:w-[60%] flex flex-col bg-slate-200 gap-5 py-4 px-20%] ">
      <h1 className="text-red-500 font-extrabold px-4 text-center">LOG IN</h1>
      <div className="md:w-[6md:w-[60%] flex flex-col bg-slate-200 gap-5 py-4 px-4 flex-grow">
        <input
          type="email "
          placeholder="Email Address"
          className="py-2 border-black flex-1 px-10"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 border-black flex-1 px-10"
        />
        <button className="bg-blue-500 text-white font-semibold rounded-md py-3 px-5 w-[100%] text-center">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Log;
