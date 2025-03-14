import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import api, { registerUser, loginUser, logoutUser, getUserProfile, addIncome, addExpense, getBillReminders, transferMoney } from './apiService';

const Expenses = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [budget, setBudget] = useState(50000); // Example budget

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    const sampleTransaction = {
      type: "income",
      amount: 0,
      paymentMethod: "Online",
      date: new Date().toISOString().split("T")[0],
    };
    const updatedTransactions = [...storedTransactions, sampleTransaction];
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    setTransactions(updatedTransactions);
  }, []);

  const totalIncome = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);

  const totalCashIncome = transactions.filter(t => t.type === "income" && t.paymentMethod === "Cash").reduce((sum, t) => sum + t.amount, 0);
  const totalOnlineIncome = transactions.filter(t => t.type === "income" && t.paymentMethod === "Online").reduce((sum, t) => sum + t.amount, 0);
  const totalCashExpense = transactions.filter(t => t.type === "expense" && t.paymentMethod === "Cash").reduce((sum, t) => sum + t.amount, 0);
  const totalOnlineExpense = transactions.filter(t => t.type === "expense" && t.paymentMethod === "Online").reduce((sum, t) => sum + t.amount, 0);

  const avgDailyIncome = (totalIncome / new Date().getDate()).toFixed(2);
  const avgDailyExpense = (totalExpenses / new Date().getDate()).toFixed(2);

  const lastMonthIncome = 30000; // Placeholder
  const lastMonthExpense = 25000; // Placeholder

  const formatDate = (date) => date.toISOString().split("T")[0];

  const selectedDayTransactions = transactions.filter(t => t.date === formatDate(selectedDate));

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-12 flex flex-col space-y-6">
      <h2 className="text-green-900 text-2xl font-bold text-center">Financial Overview</h2>
      
      <div className="grid grid-cols-2 gap-6 border-b pb-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700">Income & Expenses</h3>
          <p className="text-lg font-bold text-green-600">Total Income: ₹{totalIncome}</p>
          <p className="text-lg font-bold text-red-600">Total Expenses: ₹{totalExpenses}</p>
          <div className="mt-2">
            <p className="text-md">Cash Income: ₹{totalCashIncome}</p>
            <p className="text-md">Online Income: ₹{totalOnlineIncome}</p>
            <p className="text-md">Cash Expenses: ₹{totalCashExpense}</p>
            <p className="text-md">Online Expenses: ₹{totalOnlineExpense}</p>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700">Statistics</h3>
          <p className="text-md font-semibold">Avg Daily Income: ₹{avgDailyIncome}</p>
          <p className="text-md font-semibold">Avg Daily Expense: ₹{avgDailyExpense}</p>
          <p className={`font-bold mt-2 ${totalExpenses > budget ? "text-red-500" : "text-green-500"}`}>
            Budget Status: {totalExpenses > budget ? "Exceeded" : "Remaining"}
          </p>
          <p className="text-md mt-2">
            Compared to last month: {totalIncome > lastMonthIncome ? "Higher" : "Lower"} income, {totalExpenses > lastMonthExpense ? "Higher" : "Lower"} expenses.
          </p>
        </div>
      </div>
      
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold text-center">Calendar View</h3>
        <Calendar onChange={setSelectedDate} value={selectedDate} className="mx-auto" />
      </div>
  
      <div className="mt-6 p-4 border rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-center mb-2">Transactions on {formatDate(selectedDate)}</h3>
        {selectedDayTransactions.length > 0 ? (
          <ul>
            {selectedDayTransactions.map((t, index) => (
              <li
                key={index}
                className={`p-2 rounded-md mb-2 ${t.type === "income" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {t.type === "income" ? "+" : "-"}₹{t.amount} ({t.paymentMethod})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No transactions for this day</p>
        )}
      </div>
    </div>
  );
};

export default Expenses;