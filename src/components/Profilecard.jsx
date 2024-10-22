import React from "react";

function Profilecard() {
  return (
    <div className="md:w-[60%] bg-slate-400 p-4 rounded-xl flex">
      <img src="./profile-pic.jpg" alt="" className="md:w-[60%] rounded-full" />

      <div className="py-8 px-4">
        <h3 className="text-white font-bold">
          <b>Matt Cooper</b>
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga
          alias a rem numquam dolore magni excepturi, reiciendis at quis✌✌.
        </p>
      </div>
    </div>
  );
}

export default Profilecard;
