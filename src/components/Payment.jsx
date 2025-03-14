import React, { useEffect, useState } from "react";
import api, { registerUser, loginUser, logoutUser, getUserProfile, addIncome, addExpense, getBillReminders, transferMoney } from './apiService';

const BillReminders = () => {
  const [bills, setBills] = useState([]);
  const [billName, setBillName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const storedBills = JSON.parse(localStorage.getItem("bills")) || [];
    setBills(storedBills);
  }, []);

  const addBill = () => {
    if (!billName || !amount || !dueDate) return;
    const newBill = { id: Date.now(), name: billName, amount, dueDate, status: "Pending" };
    const updatedBills = [...bills, newBill];
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
    setBillName("");
    setAmount("");
    setDueDate("");
  };

  const markAsPaid = (id) => {
    const updatedBills = bills.map(bill => 
      bill.id === id ? { ...bill, status: "Paid" } : bill
    );
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg mt-16">
      <h2 className="text-2xl font-bold text-center mb-14">Bill Reminders</h2>
      <div className="mb-14">
        <input type="text" placeholder="Bill Name" value={billName} onChange={(e) => setBillName(e.target.value)} className="border p-2 mr-2" />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="border p-2 mr-2" />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="border p-2 mr-2" />
        <button onClick={addBill} className="bg-blue-500 text-white px-4 py-2 rounded">Add Bill</button>
      </div>
      <ul>
        {bills.map((bill) => (
          <li key={bill.id} className="flex justify-between items-center p-2 border-b">
            <span>{bill.name} - ₹{bill.amount} (Due: {bill.dueDate})</span>
            <span className={bill.status === "Pending" ? "text-red-500" : "text-green-500"}>{bill.status}</span>
            {bill.status === "Pending" && (
              <button onClick={() => markAsPaid(bill.id)} className="bg-green-500 text-white px-2 py-1 rounded">Mark as Paid</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillReminders;
