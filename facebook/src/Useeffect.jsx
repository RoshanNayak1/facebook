import React, { useEffect, useState } from "react";


function Useeffect(){

  let [data,setdata]=useState(0);

    useEffect(()=>{
        console.log('hello')
    })
    return(

        <>
        {data}
        <button onClick={()=>{
            setdata(data+1)
        }}>click</button>
        
        </>
    )
}

export{Useeffect}