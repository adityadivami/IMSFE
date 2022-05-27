import { useState } from "react";

const useChangeForm = () => {
  const [loginFormDetails, setLoginFormDetails] = useState({
    userName: "",
    password: "",
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    setLoginFormDetails({
      ...loginFormDetails,
      [e.target.name]: e.target.value,
    });
  };
  return [loginFormDetails, handleChange, setLoginFormDetails];
};

export default useChangeForm;
