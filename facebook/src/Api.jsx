import React, { useState } from "react";
import { useEffect } from "react";

function Api() {
  const [variable, setvariable] = useState();

  useEffect(()=>{
    Apidata();
  },[])

  const Apidata = async () => {
    const Myapi = await fetch("https://fakestoreapi.com/products/1");

    const apidata = await Myapi.json();
            
    setvariable(apidata.title);


  };

  return( 
  <>
  {variable}
  </>

  )
}

export { Api };


// async - promise ko return krta hai
// await - promise ko handle krta hia
