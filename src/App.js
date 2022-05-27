import LoginPage from "./pages/loginpage/Login.page";
import AdminPage from "./pages/landingpages/admin/admin.page";
import HeadPage from "./pages/landingpages/head/head.page";
import JobSeekerPage from "./pages/landingpages/jobseeker/jobseeker.page";
import Button from "@mui/material/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<AdminPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="head" element={<HeadPage />} />
        <Route path="candidate" element={<JobSeekerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
