import React, { useState, useEffect } from "react";

const Country = () => {
  // Predefined location data
  const locationData = {
    USA: {
      California: ["Los Angeles", "San Francisco"],
      Texas: ["Houston", "Dallas"],
    },
    India: {
      Maharashtra: ["Mumbai", "Pune"],
      Gujarat: ["Ahmedabad", "Surat"],
    },
    Canada: {
      Ontario: ["Toronto", "Ottawa"],
      Quebec: ["Montreal", "Quebec City"],
    },
  };

  // State variables
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Update states when country changes
  useEffect(() => {
    if (country) {
      setStates(Object.keys(locationData[country]));
    } else {
      setStates([]);
    }
    setState("");
    setCity("");
    setCities([]);
  }, [country]);

  // Update cities when state changes
  useEffect(() => {
    if (country && state) {
      setCities(locationData[country][state]);
    } else {
      setCities([]);
    }
    setCity("");
  }, [state, country]);

  return (
    <div>
        <h1><u>USEEFFECT</u></h1>
      <h3>Country, State, City Selector</h3>

      <div>
        <label>Country: </label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">-- Select Country --</option>
          {Object.keys(locationData).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      

      <div>
        <label>State: </label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          disabled={!states.length}
        >
          <option value="">-- Select State --</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label>City: </label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!cities.length}
        >
          <option value="">-- Select City --</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {city && (
        <div>
          <p>
            <strong>Selected:</strong> {country} / {state} / {city}
          </p>
        </div>
      )}
    </div>
  );
};

export default Country;