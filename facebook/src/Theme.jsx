import React, { useEffect, useState } from "react";
import '../src/Theme.css'

function Theme(){
let [theme,settheme]=useState('white-theme');

if(theme==='dark-theme'){
    settheme('white-theme')
}
else{
    settheme('dark-theme')
}

useEffect(()=>{
          document.body.className=theme;
},[])
    
    return(
        <>
        
        
        <div className="classname">

            <h1>hello roshan</h1>
        </div>
        
        </>
    )
}


export{Theme}