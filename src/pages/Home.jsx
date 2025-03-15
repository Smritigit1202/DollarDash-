import React, { useState } from "react";

const Home = () => {
  const [totalBudget, setTotalBudget] = useState(50000);
  const [newBudget, setNewBudget] = useState("");
  const totalOnlineExpense = 10000; // Example value
  const totalCashExpense = 10000; // Example value
  const totalExpenses = totalOnlineExpense + totalCashExpense;
  const remainingBalance = totalBudget - totalExpenses;

  const handleSaveBudget = () => {
    const updatedBudget = parseInt(newBudget, 10);
    if (!isNaN(updatedBudget) && updatedBudget >= 0) {
      setTotalBudget(updatedBudget);
      setNewBudget("");
    }
  };

  return (
    <div className="h-screen bg-green-50 text-gray-900 flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold text-green-900">Welcome to DollarDash 📊</h1>
        <p className="mt-3 text-lg text-gray-700">Effortlessly manage your finances and track your budget.</p>
      </div>

      {/* Budget Summary */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 w-full max-w-4xl">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold text-green-700">Total Budget</h2>
          <p className="text-3xl font-bold mt-2">₹{totalBudget}</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold text-green-700">Total Expenses</h2>
          <p className="text-3xl font-bold mt-2">₹{totalExpenses}</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold text-green-700">Remaining Balance</h2>
          <p className="text-3xl font-bold mt-2">₹{remainingBalance}</p>
        </div>
      </div>

      {/* New Budget Setup */}
      <div className="mt-12 w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-green-800">Set Up a New Budget</h2>
        <input
          type="number"
          placeholder="Enter Amount"
          value={newBudget}
          onChange={(e) => setNewBudget(e.target.value)}
          className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <button
          onClick={handleSaveBudget}
          className="mt-4 w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
        >
          Save Budget
        </button>
      </div>
    </div>
  );
};

export default Home;