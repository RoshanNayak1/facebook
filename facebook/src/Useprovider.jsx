import React, { createContext } from 'react';
import { Useconsumer } from './Useconsumer';


const email=createContext();
function Useprovider(){
  return(
    <>
    <email.Provider    value='roshannayak792@gmail.com'>
       <Useconsumer/>

    </email.Provider>
    </>
  )
}

export{Useprovider}
export{email}