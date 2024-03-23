import React from "react";
import { useParams } from "react-router-dom";

function UseParams(){

    const {email}=useParams();
    return(
        <>
        <p>{email}</p>
        </>
    )
}

export{
    UseParams
}