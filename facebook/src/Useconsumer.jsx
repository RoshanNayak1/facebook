import React from "react";
import {email} from './Useprovider'

function Useconsumer(){

    return(
        <>
        
        <email.Consumer>

           { (email)=>{
                return(
                    <>
                    <h1>{email}</h1>
                    </>
                )
            }}
        </email.Consumer>
        
        </>
    )
}

export{Useconsumer}