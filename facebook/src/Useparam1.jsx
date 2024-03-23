import React from "react";
import {  useParams } from "react-router-dom";

function Useparam1(){

    const {username1}=useParams()
    
   
    return(
        <>
        <p>{username1}</p>
        
        
        </>
    )
}
export{
    Useparam1
}