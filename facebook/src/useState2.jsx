import React, { useState } from "react";

function Use2(){

 let   [Variable,setVariable]=useState('')


    const update=(e)=>{
        setVariable(
                         {
                            ...Variable,
                            [e.target.name]: e.target.value}
        )
    }

    function showdata(){

     let v1=   Variable.email
      let v2=  Variable.password
        let v3 =Variable.contact

        alert('email:'+v1)
        alert('password:'+v2)
        alert('contact:'+v3)

    }

    return(
<>
          {/* email:{Variable.email}
          password:{Variable.password}
          contact:{Variable.contact} */}

        Email:  <input type="email " name="email" onChange={update} />  <br />
         Password: <input type="password " name="password" onChange={update} /><br />
         Contact: <input type="contact " name="contact" onChange={update} /><br />

          <button onClick={showdata}>Show Data</button>

          
</>

    )
}

export {Use2}