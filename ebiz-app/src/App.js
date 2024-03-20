import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </>
  );
}

export default App;
