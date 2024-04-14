import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Aboutus from "./pages/Aboutus";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CommonViewProduct from "./components/CommonViewProduct";
import MyProfile from "./components/MyProfile";
import MyBusiness from "./components/MyBusiness";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<CommonViewProduct />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/mybusiness" element={<MyBusiness />} />
      </Routes>
    </>
  );
}

export default App;
