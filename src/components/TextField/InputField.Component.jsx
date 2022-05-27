import React from "react";
import { TextField } from "@mui/material";

const InputField = ({ formInput, handleChange }) => {
  return (
    <>
      <TextField onChange={handleChange} {...formInput} />
    </>
  );
};

export default InputField;