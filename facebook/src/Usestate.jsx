import React, { useState }  from "react";

import {Use2} from "./useState2"



function Update(){

    // let C='0'
    //  let valueUpdate=()=>{
    //        console.log(C++)
    //  }

    let [C,setdatedC]=useState('0')

     const update=()=>{
        setdatedC(++C)
     }

     let[email,updateEmail]=useState('')

     let updatedEmail=(e)=>{
          updateEmail(e.target.value)
     }

    let [myname,updatedName]=useState('')

   let updatedmyName=(e)=>{
        updatedName(e.target.value)
    }


    let [variable ,setVariable]=useState('')

 let   updateVariable=(e)=>{
        setVariable(e.target.value)
    }
   return(
        <>
        <useState2/>


        <Use2/>
        {/* <button onClick={valueUpdate}>click</button> */}
        {C}
        <br />
        <button onClick={update}>click here</button>
         <br />

         Name : <input type='name' name='myname' onChange={updatedmyName}/>
         <br />
         {myname}
         <br />
      Email:  <input type="email" name="email" onChange={updatedEmail} />
        <br />
        {email}
        Password:  <input type="password" name="password" onChange={updateVariable} />
        <br />
        {variable}
        </>
    )
}
export {Update}