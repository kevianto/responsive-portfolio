import React, { useEffect, useState } from "react";

function Jokes() {
  const [Data, setData] = useState();
  const [error, seterror] = useState();
  const [loading, setloading] = useState();
  const Url = "https://v2.jokeapi.dev/joke/Programming/type=single";
  const fetchData = async () => {
    setloading(true);
    const response = await fetch(Url,{
        method: "GET",
        // body:JSON.stringify({type:"single"})
    });
    // console.log(response)
    const data= await response.json();
    console.log(data) 
    setData(data)
  };
  useEffect(()=>{fetchData()})
  return <div>
<p>{data ?.delivery}</p>
  </div>;
}

export default Jokes;
