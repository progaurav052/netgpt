import { useState } from "react";
import Header from "./Header";
const Login=()=>{

    const [isShowSignIn,setIsShowSignIn]=useState(true);

 
    const clickHandler=()=>{
        setIsShowSignIn(!isShowSignIn);
    }



    return(
       
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg" alt="login-page-background logo" />
            </div>
            <form  className="bg-black w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="py-4 font-bold text-3xl">Sign In</h1>
                {!isShowSignIn &&  <input type="text" placeholder="Name" className="p-4 my-4 rounded-lg bg-gray-700 w-full" />}
                <input type="text" placeholder="Email" className="p-4 my-4 rounded-lg bg-gray-700 w-full" />
                <input type="text" placeholder="Password" className="p-4 my-4 rounded-lg bg-gray-700 w-full " />
                <button className="bg-red-500 p-4 my-6 rounded-lg text-cyan-50 w-full">Sign In</button>
                <p className="cursor-pointer hover:underline" onClick={clickHandler}>{isShowSignIn ?"New to Netflix ?, Sign Up now":"Already have an account ?,Sign In "}</p>
            </form>    
        </div>
    );
}
export default Login;