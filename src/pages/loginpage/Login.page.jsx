import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, TextField } from "@mui/material";
const useStyles = makeStyles({
  formContainer: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginForm: {
    border: "1px solid #ddd",
    padding: "20px",
  },
  textField: {
    margin: "0 0 20px 0",
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
  const styles = useStyles();
  const [loginFormDetails, setLoginFormDetails] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginFormDetails({
      ...loginFormDetails,
      [e.target.name]: e.target.value,
    });
    console.log(loginFormDetails);
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.loginForm} onSubmit={formSubmit}>
        <Box className={styles.textField}>
          <TextField
            label="User Name"
            name="username"
            type="text"
            variant="outlined"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            onChange={handleChange}
          />
        </Box>
        <Box className={styles.loginButtonBox}>
          <Button
            className={styles.loginButton}
            type="submit"
            variant="outlined"
            onChange={handleChange}
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginPage;
