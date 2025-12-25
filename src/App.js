import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

// Pages
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import Contractors from "./pages/Contractors";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Routing */}
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} /> 
        
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contractors" element={<Contractors />} />
        <Route path="/about" element={<About />} />

        {/* Auth pages */}
        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected dashboard */}
        <Route
          path="/dashboard"
          element={
            user ? <Dashboard user={user} /> : <Navigate to="/login" />
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
