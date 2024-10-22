import React from 'react'

function Actions() {
  const Like="like me"
  const Share=" share me"
  const Leave a Comment ="comment me"
  return (
    
    <div className="md:w-[60%] flex flex-wrap justify-between bg-slate-200 gap-5 py-4 px-2">
        <buttons className="bg-blue-500 text-white font-semibold rounded-md py-3 px-5 w-[30%] text-center">Like</buttons>
        <buttons className="bg-blue-500 text-white font-semibold rounded-md py-3 px-5 w-[30%] text-center">Share</buttons>
        <buttons className="bg-blue-500 text-white font-semibold rounded-md py-3 px-5 flex-grow text-center ">Leave a Comment</buttons>
        <p>{like} </p>

    </div>
  )
}


export default Actions