import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Place from "./pages/Place/Place";
import RegisterPlace from "./pages/RegisterPlace/RegisterPlace";

export default function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/criar-conta" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/locais" element={<Place />} />
      <Route path="/locais/novo" element={<RegisterPlace />} />
      </Routes>
  </>
  )
}
