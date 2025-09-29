// contexts/UnitContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const UnitContext = createContext();

export const useUnit = () => {
  const context = useContext(UnitContext);
  if (!context) {
    throw new Error("useUnit must be used within a UnitProvider");
  }
  return context;
};

export const UnitProvider = ({ children }) => {
  // Load units from localStorage or use defaults
  const [units, setUnits] = useState(() => {
    const saved = localStorage.getItem("weatherUnits");
    return saved
      ? JSON.parse(saved)
      : {
          temperature: "celsius",
          windSpeed: "kmh",
          precipitation: "mm",
        };
  });

  // Save to localStorage whenever units change
  useEffect(() => {
    localStorage.setItem("weatherUnits", JSON.stringify(units));
  }, [units]);

  // Bulk toggle between metric and imperial
  const toggleBulkUnits = () => {
    const isCurrentlyMetric = units.temperature === "celsius";
    const newUnits = {
      temperature: isCurrentlyMetric ? "fahrenheit" : "celsius",
      windSpeed: isCurrentlyMetric ? "mph" : "kmh",
      precipitation: isCurrentlyMetric ? "inch" : "mm",
    };
    setUnits(newUnits);
  };

  // Update individual unit type
  const updateUnit = (type, value) => {
    setUnits((prev) => ({ ...prev, [type]: value }));
  };

  const value = {
    units,
    toggleBulkUnits,
    updateUnit,
  };

  return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>;
};
