import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Usenavigate1(){

      const[email, setmail]=useState();
      const update1=(e)=>{
          setmail(e.target.value)
        }
        const[pass, setpass]=useState();
      const update2=(e)=>{
        setpass(e.target.value)
      }

         const nav =useNavigate();

         const Update=()=>{
            if(email==='roshannayak@gmail.com' && pass==="12345"){

                nav("/showdate")
            }
            else{
                alert("invalid data")
            }
         }
   

    return(
<>
 
 Email : <input type="text" placeholder='email'  onChange={update1}/><br /><br />
{email} <br />
 Password : <input type="password" placeholder='password'  onChange={update2}/><br />
{pass}
               <button onClick={Update}>Click me</button>
</>

    )
    }


export{Usenavigate1}