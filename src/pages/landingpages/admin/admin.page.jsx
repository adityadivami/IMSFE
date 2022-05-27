import * as React from "react";
import styles from "./adminpage.module.css";
import EmployeeSignUp from "./components/empolyeesignup/EmployeeSignUp";

const AdminPage = (props) => {
  return (
    <div className={styles.container}>
      {/* <h1>Admin Page</h1> */}
      <EmployeeSignUp />
    </div>
  );
};

export default AdminPage;
