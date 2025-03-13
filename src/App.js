import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import Calendar from "./components/Calendar";
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import Home from "./pages/Home";
import Ini from "./pages/Ini";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Transfer from "./components/Transfer";
import Profile from "./components/Profile";

function App() {
  return (
    <AuthProvider> {/* Wrap the entire app in AuthProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Ini />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/Transfer" element={<Transfer />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/Income" element={<Income />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
