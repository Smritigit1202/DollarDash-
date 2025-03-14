import React, { useEffect, useState } from "react";
import api, { registerUser, loginUser, logoutUser, getUserProfile, addIncome, addExpense, getBillReminders, transferMoney } from './apiService';

const MyProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    contact: "9876543210",
    accountNumber: "1234567890",
    profilePhoto: "https://via.placeholder.com/150"
  });

  const [stars, setStars] = useState(0);
  const [isWithinBudget, setIsWithinBudget] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newPhoto, setNewPhoto] = useState("");

  useEffect(() => {
    // Fetch profile and rewards from local storage or API
    const storedProfile = JSON.parse(localStorage.getItem("profile")) || profile;
    const storedStars = JSON.parse(localStorage.getItem("stars")) || 0;
    setProfile(storedProfile);
    setStars(storedStars);
  }, []);

  useEffect(() => {
    if (isWithinBudget) {
      setStars((prevStars) => {
        const newStars = prevStars + 1;
        localStorage.setItem("stars", JSON.stringify(newStars));
        return newStars;
      });
    }
  }, [isWithinBudget]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedProfile = { ...profile, profilePhoto: newPhoto || profile.profilePhoto };
    localStorage.setItem("profile", JSON.stringify(updatedProfile));
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-100 to-green-300 shadow-2xl p-10 rounded-3xl mt-16 border-2 border-green-500">
      <h2 className="text-green-900 text-3xl font-bold text-center mb-6">My Profile</h2>
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <img src={profile.profilePhoto} alt="Profile" className="w-32 h-32 rounded-full border-4 border-green-500 shadow-md" />
          {isEditing && (
            <input type="file" accept="image/*" onChange={handlePhotoChange} className="mt-3" />
          )}
        </div>
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3 shadow-sm"
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3 shadow-sm"
              placeholder="Enter your email"
            />
            <input
              type="text"
              name="contact"
              value={profile.contact}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3 shadow-sm"
              placeholder="Enter your contact number"
            />
            <input
              type="text"
              name="accountNumber"
              value={profile.accountNumber}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3 shadow-sm"
              placeholder="Enter your account number"
            />
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-5 py-2 rounded-lg mt-3 hover:bg-green-700 transition-all"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold text-gray-700">Userame: {profile.name}</p>
            <p className="text-lg text-gray-700">Password: {profile.email}</p>
            <p className="text-lg text-gray-700">Contact: {profile.contact}</p>
            <p className="text-lg text-gray-700">Account Number: {profile.accountNumber}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-3 hover:bg-blue-700 transition-all"
            >
              Edit
            </button>
          </>
        )}
      </div>
      <div className="border-t pt-6">
        <h3 className="text-2xl font-semibold text-center text-gray-800">Rewards System</h3>
        <p className="text-lg text-center text-gray-700">Stars Earned: ⭐ {stars}</p>
        {stars >= 10 ? (
          <p className="text-center text-green-600 font-bold text-xl mt-3">
          🎁 <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">
            Congratulations! You've earned a reward!
          </a>
        </p>
         ) : (
          <p className="text-center text-gray-600 mt-3">Collect 10 stars to receive a special gift!</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
