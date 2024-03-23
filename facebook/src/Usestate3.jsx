import React, { useState }  from "react";


function Usestate3(){

    let [change,setchange]=useState('');
   let [data,setdata]=useState('');

let Update3=(e)=>{
        setchange(
          { ...change, [e.target.name]:  e.target.value})
    }

    let Update4=()=>{

        setdata(change)
    }
    return(
        
        <>

        {data.email}   <br />
        {data.password} <br />
        <input type="text" placeholder="email" name='email' onChange={Update3} /> <br />
        <input type="password" placeholder="password" name='password' onChange={Update3} /> <br />
        <button onClick={Update4}>Click Me</button>
        
        
         <br />
        </>
    )
}

export {Usestate3}