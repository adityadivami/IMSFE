import React from "react";
import { makeStyles } from "@mui/styles";

import { Button } from "@mui/material";
const useStyles = makeStyles({
  loginButton: {
    width: "100%",
    height: "56px",
  },
});

const ButtonComponent = ({ name, primary }) => {
  const styles = useStyles();
  return (
    <>
      <Button className={styles.loginButton} type="submit" variant={primary}>
        {name}
      </Button>
    </>
  );
};

export default ButtonComponent;
