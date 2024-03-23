import React, { useEffect, useState } from "react";

function Api2(){

    useEffect(()=>{
           Api();
    },[]) 

    const [variable, setvariable]=useState();
              const Api=async()=>{
         const Myapi= await fetch('https://fakestoreapi.com/products/1');
         const Myjsonapi= await Myapi.json();
            setvariable(Myjsonapi.title);
        }
               

    return(
        <>
        {variable}
        </>
    )
}

export{
    Api2
}