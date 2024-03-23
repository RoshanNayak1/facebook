import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Usenavigate2(){


    const [username,setusername]=useState();
    const Updateusername=(e)=>{
              setusername(e.target.value)
    }

    const[mypass,setmypass]=useState();
            const Updatemypass=(e)=>{
                setmypass(e.target.value)
            }

            const nav=useNavigate()

            const Mynav=()=>{
                if(username==='roshan' && mypass=="1234"){
                    nav('/Usestate2')
                }
                else{
                    alert("invalid data")
                }

            }
    
    return(
        <>
       USERNAME:  <input type="text" placeholder="enter username" onChange={Updateusername}/><br />
         {username} <br />
        PASSWORD : <input type="text" placeholder="enter password" onChange={Updatemypass}/> <br />
        {mypass}
        <br />
        <button onClick={Mynav}>Click Here</button>
        </>
    )
}
export{Usenavigate2}