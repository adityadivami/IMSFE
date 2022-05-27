import { useState } from "react";

const useChangeForm = () => {
  const [loginFormDetails, setLoginFormDetails] = useState({
    userName: "",
    password: "",
    name: "",
    email: "",
  });
  const handleChange = (e, value) => {
    setLoginFormDetails({
      ...loginFormDetails,
      [e?.target?.name ?? "value"]: value ?? e.target.value,
    });
  };
  return [loginFormDetails, handleChange, setLoginFormDetails];
};

export default useChangeForm;
