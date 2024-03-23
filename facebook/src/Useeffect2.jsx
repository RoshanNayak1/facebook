import React, { useEffect } from "react";
function Useeffect2(){
useEffect(()=>{
    console.log('hello useeffect')           // sbse end me load hoga
})

console.log(' hello outside')               /// sbse phle load hoga
    
    return(

                                               // 2nd no pr load hoga
        <>
        {console.log('hello return ')}  
           
        </>
    )
}
export {Useeffect2}