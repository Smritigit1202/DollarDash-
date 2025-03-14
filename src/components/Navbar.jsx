import { Menu, X } from "lucide-react"; // Icons
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api, { registerUser, loginUser, logoutUser, getUserProfile, addIncome, addExpense, getBillReminders, transferMoney } from './apiService';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Pages where Navbar should NOT be shown
  const hideNavbarRoutes = ["/", "/login", "/signup"];

  if (hideNavbarRoutes.includes(location.pathname)) {
    return null; // Don't render Navbar on these pages
  }

  return (
    <>
      {/* Navbar */}
      <div className="bg-green-900 text-white py-4 px-6 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          💰 DollarDash
        </Link>

        <button 
  onClick={() => setIsOpen(!isOpen)} 
  className="absolute top-0.2 right-4 w-10 h-10 flex items-center justify-center bg-white text-green-900 rounded-full shadow-md focus:outline-none z-50"
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>



      </div>

      {/* Sidebar (Always Controlled by isOpen) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-800 text-white p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
       {/* Menu Button - Compact & Positioned to Top-Right */}
{/* Menu Button - Top-Right Fixed */}
<button 
  onClick={() => setIsOpen(!isOpen)} 
  className="fixed top-4 right-4 p-2 rounded-md bg-transparent focus:outline-none z-50"
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>


        <ul className="mt-12 space-y-6 text-lg">
          <li><Link to="/Home" onClick={() => setIsOpen(false)}>🏠 Home</Link></li>
          <li><Link to="/expenses" onClick={() => setIsOpen()}>📉 Add Expenses</Link></li>
          <li><Link to="/Income" onClick={() => setIsOpen()}>💰 Add Income</Link></li>
          <li><Link to="/calendar" onClick={() => setIsOpen(false)}>📅 Financial Overview </Link></li>
          <li><Link to="/Transfer" onClick={() => setIsOpen()}>💳 Transfer Money</Link></li>
          <li><Link to="/payment" onClick={() => setIsOpen(false)}>🧾 Pay Bills</Link></li>
          <li><Link to="/Profile" onClick={() => setIsOpen(false)}>👤 My Profile</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>🚪 Log Out</Link></li>
       
        </ul>
      </div>
    </>
  );
};

export default Navbar;
