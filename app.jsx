import React, { createContext, useState } from "react";
import Component1 from "./Component1";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <UserContext.Provider value={{ formData, theme }}>
      <div className={`container ${theme}`}>
        <h1>useContext Hook Implementation</h1>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <div className="form-box">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <Component1 />
      </div>
    </UserContext.Provider>
  );
}

export default App;
