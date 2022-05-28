import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";
import formConfig from "./form_config.json";
import InputField from "../../components/TextField/InputField.Component";
import ButtonComponent from "../../components/PrimaryButton/Button.Component";
import useChangeForm from "../../customhooks/useChangeForm";



const useStyles = makeStyles({
  typoroot: {
    marginTop: 50,
  },
  formContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#dedee7",
    paddingRight: "100px",
    background: "url('https://wallpaperaccess.com/full/99840.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  loginForm: {
    textAlign: "center",
    paddingTop: "50px",
    minHeight: "350px",
    padding: "20px",
    border: "none",
    marginBottom: "20px",
    backgroundColor: "rgb(255 255 255 / 100%)",
    borderRadius: "10px",
    boxShadow: "3px 5px 45px 3px rgba(5,31,245,0.33)",
    WebkitBoxShadow: "3px 5px 45px 3px rgba(5,31,245,0.33)",
    MozBoxShadow: "3px 5px 45px 3px rgba(5,31,245,0.33)",
  },
  abc: { marginBottom: "10px" },
  textField: {
    margin: "0px 0 20px 0",
    width: "300px",
  },
  loginButtonBox: {
    marginTop: "50px",
    width: "fit-content",
    float: "right",
    // margin:""
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
        <Typography
          variant={"h4"}
          style={{ marginBottom: '30px' }}
          // className={styles.abc}
        >
          User Login
        </Typography>
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
          <Button
            onClick={forgotPassword}
            sx={{ color: "#", marginTop: "20px" }}
          >
            Forgot Password
          </Button>
        </Box>
      </form>
      {/* <Button onClick={forgotPassword} sx={{color:'#fff'}}>Forgot Password</Button> */}
    </div>
  );
};

export default LoginPage;
