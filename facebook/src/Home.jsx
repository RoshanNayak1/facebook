import React from "react";
import { Update } from "./Usestate";
import image2 from '../src/polotno.png'
function Home(props){
    return(
        <>
        <Update/>
        <h1>this is homepage</h1>
        <img src={props.image1} alt="image not loaded" className="photo1"></img>


        <img src={image2} alt="image 2 not loaded"  className="photo1"/>
        </>
    )
}
export {Home}