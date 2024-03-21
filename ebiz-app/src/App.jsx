import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Aboutus from "./pages/Aboutus";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
