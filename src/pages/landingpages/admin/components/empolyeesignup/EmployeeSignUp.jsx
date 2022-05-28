import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import InputField from "../../../../../components/TextField/InputField.Component";
import formConfig from "./form_config.json";
import ButtonComponent from "../../../../../components/PrimaryButton/Button.Component";
import useChangeForm from "../../../../../customhooks/useChangeForm";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { cloneDeep, find, findIndex } from "lodash";

const useStyles = makeStyles({
  formContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
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
const EmployeeSignUp = ({ formdata }) => {
  const [data, setdata] = useState(formConfig);

  useEffect(() => {
    if (formdata) {
      const rolesIndex = findIndex(data, { name: "roles" });
      const departmentsIndex = findIndex(data, { name: "department" });
      const obj = cloneDeep(data);
      obj[rolesIndex].Departments = formdata.roles;
      obj[departmentsIndex].Departments = formdata.departments;
      setdata(obj);
    }
  }, [formdata]);

  const [loginFormDetails, handleChange] = useChangeForm();
  const [datePickerValue, setDatePickerValue] = useState();
  const [departmentState, setDeapartmentState] = useState({
    id: "",
    label: "",
    status: false,
  });
  const styles = useStyles();
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.loginForm} onSubmit={formSubmit}>
          {data?.map((formInput, key) => {
            switch (formInput.type) {
              case "text":
                return (
                  <Box
                    className={styles.textField}
                    key={`${formInput.label}-${key}`}
                  >
                    <InputField
                      fullWidth
                      loginFormDetails={loginFormDetails}
                      formInput={formInput}
                      handleChange={handleChange}
                    />
                  </Box>
                );
              case "date":
                return (
                  <LocalizationProvider
                    className={styles.textField}
                    key={`${formInput.label}-${key}`}
                    dateAdapter={AdapterDateFns}
                  >
                    <DatePicker
                      label="Basic example"
                      value={datePickerValue}
                      onChange={(value) => handleChange("", value)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                );
              case "email":
                return (
                  <Box
                    className={styles.textField}
                    key={`${formInput.label}-${key}`}
                  >
                    <InputField
                      fullWidth
                      loginFormDetails={loginFormDetails}
                      formInput={formInput}
                      handleChange={handleChange}
                    />
                  </Box>
                );
              case "select":
                return (
                  <FormControl
                    fullWidth
                    key={`${formInput.label}-${key}`}
                    sx={{ marginTop: "20px" }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      {formInput.label}
                    </InputLabel>
                    <Select value={departmentState?.id} label={formInput.label}>
                      {formInput?.Departments?.map((department, key) => {
                        return (
                          <MenuItem
                            key={`${formInput.label}-${key}`}
                            value={department?.id}
                            onClick={() => setDeapartmentState(department)}
                          >
                            {department.label}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                );
            }
          })}
          <Box className={styles.loginButtonBox}>
            <ButtonComponent name="SignUp" primary="outlined" />
          </Box>
        </form>
      </div>
    </>
  );
};

export default EmployeeSignUp;
