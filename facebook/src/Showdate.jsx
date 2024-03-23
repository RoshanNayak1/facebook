import React from "react";
import { useState } from "react";

function Mydate(){
    let[clock,setclock]=useState();

    let Showclock=()=>{
        let v=new Date().toLocaleDateString();
        
        setclock(v)
        
    }
    return(
        <>
           {clock}
           <button onClick={Showclock}>show date</button>
        </>
    )
}

export {Mydate}