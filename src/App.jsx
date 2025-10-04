import React, { useState } from "react";

const countries = ["USA", "UK", "Canada", "Australia", "Germany"];

function VisaFeeTracker() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [totalFee, setTotalFee] = useState(null);

  const calculateFee = () => {
    const baseCost = 3000;
    const countryIndex = countries.indexOf(country) + 1;
    if (countryIndex === 0) {
      alert("Please select a valid country");
      return;
    }
    const additionalCost = 4 * countryIndex;
    setTotalFee(baseCost + additionalCost);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px", margin: "auto" }}>
      <h2>Visa Fee Tracker</h2>
      <div>
        <label>Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      </div>
      <div>
        <label>Country: </label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select a country</option>
          {countries.map((c, idx) => (
            <option key={idx} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <button onClick={calculateFee}>Calculate Visa Fee</button>

      {totalFee !== null && (
        <div style={{ marginTop: "20px" }}>
          <h3>Passenger: {name}</h3>
          <h3>Country: {country}</h3>
          <h3>Total Visa Fee: ₹{totalFee}</h3>
        </div>
      )}
    </div>
  );
}

export default VisaFeeTracker;
