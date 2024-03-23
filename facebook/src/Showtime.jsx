import React, { useState } from "react";

function Mytime(){
    // let v1 = new Date().toLocaleTimeString();
   let [Time,settime]=useState();

   let Showtime=()=>{

    let v = new Date().toLocaleTimeString();
    settime(v)
    
   }

   setInterval(Showtime,1000)
    return(
        <>
        
        
        {Time}
        <button onClick={Showtime}>Show Time</button>
        </>
    )
}

export {Mytime}