import LoginPage from "./pages/loginpage/Login.page";
import AdminPage from "./pages/landingpages/admin/admin.page";
import HeadPage from "./pages/landingpages/head/head.page";
import JobSeekerPage from "./pages/landingpages/jobseeker/jobseeker.page";

function App() {
  return (
    <>
      <LoginPage />
      <AdminPage />
      <HeadPage />
      <JobSeekerPage />
    </>
  );
}

export default App;
