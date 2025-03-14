import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api"; // Your Django API URL

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Function to Register a User
export const registerUser = async (userData) => {
    return api.post("/register/", userData);
};

// Function to Login
export const loginUser = async (userData) => {
    return api.post("/login/", userData);
};

// Function to Logout
export const logoutUser = async (token) => {
    return api.post("/logout/", {}, {
        headers: { Authorization: `Token ${token}` },
    });
};

// Get User Profile
export const getUserProfile = async (token) => {
    return api.get("/profile/", {
        headers: { Authorization: `Token ${token}` },
    });
};

// Function to Add Income
export const addIncome = async (incomeData, token) => {
    return api.post("/income/", incomeData, {
        headers: { Authorization: `Token ${token}` },
    });
};

// Function to Add Expense
export const addExpense = async (expenseData, token) => {
    return api.post("/expense/", expenseData, {
        headers: { Authorization: `Token ${token}` },
    });
};

// Function to Get Bill Reminders
export const getBillReminders = async (token) => {
    return api.get("/bill-reminder/", {
        headers: { Authorization: `Token ${token}` },
    });
};

// Function to Transfer Money
export const transferMoney = async (transferData, token) => {
    return api.post("/money-transfer/", transferData, {
        headers: { Authorization: `Token ${token}` },
    });
};

export default api;