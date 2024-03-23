import React, { createContext } from "react";
import { Useconsumer } from "./Useconsumer1";

const email=createContext()
const pass=createContext()
function Useprovider1(){

    return(
        <>
        <email.Provider  value='roshannayak792@gmail.com'>
           <pass.Provider value='rn895290'>
           <Useconsumer/>
           </pass.Provider>

        </email.Provider>
        
        </>
    )
}

export{Useprovider1}

export{email}
export{pass}