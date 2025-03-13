import React, { useState } from "react";

const IncomeTracker = () => {
  const [income, setIncome] = useState(0);
  const [taxPercentage, setTaxPercentage] = useState(0);
  const [incomeType, setIncomeType] = useState("cash");
  const [incomes, setIncomes] = useState([]);

  const taxAmount = (income * taxPercentage) / 100;
  const finalIncome = income - taxAmount;

  const addIncome = () => {
    if (income <= 0) {
      alert("Please enter a valid income amount!");
      return;
    }

    const newIncome = {
      amount: income,
      category: incomeType,
      tax: taxAmount.toFixed(2),
      finalAmount: finalIncome.toFixed(2),
      date: new Date().toLocaleDateString(),
    };

    setIncomes([...incomes, newIncome]);
    setIncome(0);
    setTaxPercentage(0);
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
     

      <div className="flex flex-col md:flex-row">
        {/* Left Side - Income Form */}
        <div className="w-full md:w-1/2 p-6 bg-white-50">
          <h3 className="text-green-900 text-2xl font-bold text-center mb-4">
            Add Income
          </h3>

          <label className="block font-medium ">Income Amount:</label>
          <input
            type="number"
            className="w-full border rounded-lg p-2 mt-1 mb-3"
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
            placeholder="Enter your income"
          />

          <label className="block font-medium">Income Type:</label>
         <div className="mb-4">
  
  <div className="inline-flex space-x-4">
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="paymentMethod"
        value="Cash"
        checked={incomeType === "Cash"}
        onChange={() => setIncomeType("Cash")}
      />
      <span>Cash</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="paymentMethod"
        value="Online"
        checked={incomeType === "Online"}
        onChange={() => setIncomeType("Online")}
      />
      <span>Online</span>
    </label>
  </div>
</div>




          <label className="block font-medium">Tax Percentage (%):</label>
          <input
            type="number"
            className="w-full border rounded-lg p-2 mt-1 mb-3"
            value={taxPercentage}
            onChange={(e) => setTaxPercentage(parseFloat(e.target.value) || 0)}
            placeholder="Enter tax percentage"
          />

          <div className="border-t pt-4 mt-4">
            <p className="text-lg font-semibold">Tax Amount: ₹{taxAmount.toFixed(2)}</p>
            <p className="text-lg font-bold text-green-700">
              Final Income: ₹{finalIncome.toFixed(2)}
            </p>
          </div>

          <button
            onClick={addIncome}
            className="w-full bg-green-600 text-white py-2 mt-4 rounded-lg hover:bg-green-700"
          >
            Add Income
          </button>
        </div>

        {/* Right Side - Income History */}
        <div className="w-full md:w-1/2 p-6 bg-white-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Income History 
          </h3>

          {incomes.length === 0 ? (
            <p className="text-gray-500">No income added yet.</p>
          ) : (
            <ul className="space-y-3">
              {incomes.map((inc, index) => (
                <li
                  key={index}
                  className="p-3 border rounded-lg bg-white shadow-sm flex justify-between"
                >
                  <div>
                    <span className="font-bold">₹{inc.amount}</span> - {inc.category}
                    <p className="text-sm text-gray-500">
                      Tax: ₹{inc.tax}, Final: ₹{inc.finalAmount}
                    </p>
                  </div>
                  <span className="text-gray-600 text-sm">{inc.date}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default IncomeTracker;
