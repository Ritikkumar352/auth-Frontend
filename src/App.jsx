import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import PrivateRouter from "./components/Privaterouter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/dash-board" element={<Dashboard />} /> */}  
      {/* this dash-board working */}
      {/* <Route path="/about" element={<About />} /> */}

      {/* protected route */}

      <Route
        path="/about"
        element={
          <PrivateRouter>
            <About />
          </PrivateRouter>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        }
      />

      {/* Need session data to be not null, then this will work */}
      <Route
        path="/dash-board"
        element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        }
      />      
    </Routes>
  );
}

export default App;
