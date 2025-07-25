const checkValidData = (email, password,userName) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  

  if (!isEmailValid) {
    return "Email ID is not Valid";
  }
  if (!isPasswordValid) {
    return "Password is Not valid";
  }
 
  return null;
};

export default checkValidData;
