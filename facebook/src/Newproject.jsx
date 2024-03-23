import React, { useState } from "react";

function Newproject(){

        
    let [variable,setvariable]=useState('');

    let Update=(e)=>{
        setvariable(
            {
            ...variable,
            [e.target.name]:e.target.value
               }   )
    }

          function Showdata(){
            let v1 = variable.myname
            let v2= variable.password

            document.write(v1 +'<br>'+v2)
          }

    return(
        <>
        {variable.myname}
        {variable.password}

      
        
        <input type="text"  name="myname"  onChange={Update}/><br/>
        <input type="password"  name="password" onChange={Update}/><br/>

        <button onClick={Showdata}>click me</button>
</>
    )
}


export{Newproject}