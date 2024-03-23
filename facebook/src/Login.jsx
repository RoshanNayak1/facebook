import React  from "react";
import './Login.css'
import {  Link} from "react-router-dom";




function Login(){
    return(
<>

        <div className="container">
<div className="heading">
<h1 >facebook</h1>
<p>Facebook helps you connect and share with the people in your life</p>

</div>
 <div>

 <div className="form-div">
    <form action="" id="form">
        <input type="text" className="input-box"  placeholder="Email address or phone number "/><br />
        <input type="password" className="input-box" placeholder="password "/><br /><br />

    <Link to='/home'><button id="login-btn">Log in </button>  </Link>    
       

       <p id="frgt-ps">Forgotten password?</p>
       <hr />
     
     <button id="create-na"> Create new account</button>
    </form>
 </div>

</div>
 </div>
    <p><b>Create a page</b> for a celebrity,brand or business</p>
    </>
    )
}
export {Login}