import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import Header from "./Header";
import {  toast } from "react-toastify";
const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responce = await axiosInstance.get("/api/users");

        console.log(responce.data, "  : user");
        const user = responce.data
        setCurrentUser(user);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);
  console.log(currentUser , " :jhgj");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance.put("https://interview-plus.onrender.com/api/update-user", {
        name,
        password,
      });
      console.log("Profile updated:", response.data);

      setName("");
      setPassword("");

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      // Display error message
      alert("Failed to update profile. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              defaultValue={currentUser.name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              defaultValue={currentUser.password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
