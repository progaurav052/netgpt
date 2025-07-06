import { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="login-page-background logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="py-4 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            
            type="text"
            placeholder="Name"
            className="p-4 my-4 rounded-lg bg-gray-700 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 rounded-lg bg-gray-700 w-full"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 rounded-lg bg-gray-700 w-full "
        />
        {errorMessage && <p className="text-red-600 font-bold mx-auto">{errorMessage}</p>}
        <button
          className="bg-red-500 p-4 my-6 rounded-lg text-cyan-50 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer hover:underline" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix ?, Sign Up now"
            : "Already have an account ?,Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
