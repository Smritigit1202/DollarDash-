import React, { useEffect, useState } from "react";

const TransferMoney = () => {
  const [transfers, setTransfers] = useState([]);
  const [amount, setAmount] = useState("");
  const [transferType, setTransferType] = useState("Online to Cash");

  useEffect(() => {
    const storedTransfers = JSON.parse(localStorage.getItem("transfers")) || [];
    setTransfers(storedTransfers);
  }, []);

  const handleTransfer = () => {
    if (!amount || isNaN(amount) || amount <= 0) return;
    
    const newTransfer = {
      id: Date.now(),
      type: transferType,
      amount: parseFloat(amount),
      date: new Date().toISOString().split("T")[0],
    };

    const updatedTransfers = [newTransfer, ...transfers];
    setTransfers(updatedTransfers);
    localStorage.setItem("transfers", JSON.stringify(updatedTransfers));
    setAmount("");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-xl mt-16">
      <h2 className="text-2xl text-green-900 font-bold text-center mb-14">Transfer Money</h2>
      
      <div className="mb-4">
        <label className="block text-lg font-semibold">Amount (₹):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-lg font-semibold">Transfer Type:</label>
        <select
          value={transferType}
          onChange={(e) => setTransferType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Online to Cash">Online to Cash (ATM Withdrawal)</option>
          <option value="Cash to Online">Cash to Online (Bank Deposit)</option>
        </select>
      </div>
      
      <button onClick={handleTransfer} className="w-full bg-green-600 text-white py-2 rounded text-lg">
        Transfer
      </button>
      
      <h3 className="text-xl font-bold mt-6">Transfer History</h3>
      <div className="mt-2 border rounded p-2 max-h-60 overflow-y-auto">
        {transfers.length > 0 ? (
          transfers.map((t) => (
            <div key={t.id} className="p-2 border-b">
              <p className="text-md font-semibold">{t.date}</p>
              <p className="text-sm">{t.type}: ₹{t.amount}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No transfers recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default TransferMoney;
