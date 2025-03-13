const Dashboard = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-green-200 rounded-lg">Income: ₹50,000</div>
          <div className="p-4 bg-red-200 rounded-lg">Expenses: ₹30,000</div>
          <div className="p-4 bg-yellow-200 rounded-lg">Balance: ₹20,000</div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  