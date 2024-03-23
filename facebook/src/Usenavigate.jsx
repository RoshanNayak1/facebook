import React from "react";
import { useNavigate } from "react-router-dom";

function Usenavigate(){

       const nav= useNavigate()

       const Update=()=>{
                  nav('/showtime')
       }
    return(
        <>
        
        <button onClick={Update}> click me</button>
        </>
    )
}

export{
    Usenavigate
}