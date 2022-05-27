import axios from "axios";
import * as React from "react";
import styles from "./adminpage.module.css";
import EmployeeSignUp from "./components/empolyeesignup/EmployeeSignUp";

const AdminPage = (props) => {
  const [formdata, setformdata] = React.useState({
    roles: [],
    departments: [],
  });
  React.useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:8080/departments"),
        axios.get("http://localhost:8080/roles"),
      ])
      .then(
        axios.spread((departments, roles) => {
          setformdata((prev) => ({
            ...prev,
            departments: [...(departments?.data?.message ?? [])],
            roles: [...(roles?.data?.message ?? [])],
          }));
        })
      )
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div className={styles.container}>
      {/* <h1>Admin Page</h1> */}
      <EmployeeSignUp formdata={formdata} />
    </div>
  );
};

export default AdminPage;
