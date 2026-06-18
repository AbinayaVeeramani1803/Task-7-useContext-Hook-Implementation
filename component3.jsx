import React, { useContext } from "react";
import { UserContext } from "./App";

function Component3() {
  const { formData, theme } = useContext(UserContext);

  return (
    <div className="box">
      <h2>Component 3</h2>

      <h3>User Details</h3>

      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>City:</strong> {formData.city}</p>

      <h3>Current Theme: {theme}</h3>
    </div>
  );
}

export default Component3;
