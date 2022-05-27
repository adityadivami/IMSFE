import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import formConfig from "./form_config.json";
import InputField from "../../components/TextField/InputField.Component";
import ButtonComponent from "../../components/PrimaryButton/Button.Component";
import useChangeForm from "../../customhooks/useChangeForm";
const useStyles = makeStyles({
  formContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginForm: {
    padding: "20px",
    border: "1px solid #ddd",
    marginBottom: "20px",
  },
  textField: {
    margin: "0 0 20px 0",
    width: "100%",
  },
  loginButtonBox: {
    marginTop: "20px",
  },
  loginButton: {
    width: "100%",
    height: "56px",
  },
});

const LoginPage = (props) => {
  const [loginFormDetails, handleChange] = useChangeForm();
  const styles = useStyles();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormDetails);
    // post api call for login authentication
  };
  const forgotPassword = () => {
    // email notification api call
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.loginForm} onSubmit={formSubmit}>
        {formConfig.map((formInput, key) => {
          return (
            <Box className={styles.textField} key={key}>
              <InputField
                loginFormDetails={loginFormDetails}
                formInput={formInput}
                handleChange={handleChange}
              />
            </Box>
          );
        })}
        <Box className={styles.loginButtonBox}>
          <ButtonComponent name="Login" primary="outlined" />
        </Box>
      </form>
      <Button onClick={forgotPassword}>Forgot Password</Button>
    </div>
  );
};

export default LoginPage;
