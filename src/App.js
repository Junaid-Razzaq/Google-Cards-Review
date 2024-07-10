import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import CreateUser from "./components/Createuser";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import { Grid } from "@mui/material";

function App() {
  const token = localStorage.getItem("token");
  console.log(token, "Token is here");
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid item xs>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
