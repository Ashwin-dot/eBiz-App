import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Aboutus from "./pages/Aboutus";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CommonViewProduct from "./components/CommonViewProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<CommonViewProduct />} />
      </Routes>
    </>
  );
}

export default App;
