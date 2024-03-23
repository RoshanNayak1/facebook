import React, { useContext }  from "react";

import { email } from "./Useprovider1";
import { pass } from "./Useprovider1";

function Useconsumer(){
    const myemail=useContext(email);
    const mypass=useContext(pass);

    return(
        <>
        {myemail}
        {mypass}
        </>
    )
}

export{Useconsumer}