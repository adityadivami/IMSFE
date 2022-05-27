import "@progress/kendo-theme-default/dist/all.css";
import LoginPage from "./pages/loginpage/Login.page";
import AdminPage from "./pages/landingpages/admin/admin.page";
import HeadPage from "./pages/landingpages/head/head.page";
import JobSeekerPage from "./pages/landingpages/jobseeker/jobseeker.page";
import Button from "@mui/material/Button";
import BookingSlots2 from "./pages/bookingslots/BookingSlots2.Component";

function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <AdminPage /> */}
      {/* <HeadPage />
      <JobSeekerPage />
      <Button variant="contained">Hello World</Button>  */}
      <BookingSlots2 />
    </>
  );
}

export default App;
