
// contexts/UnitContext.jsx
import { createContext, useContext, useState } from 'react';

const UnitContext = createContext();

export const useUnits = () => useContext(UnitContext);

export const UnitProvider = ({ children }) => {
  const [units, setUnits] = useState('metric'); // 'metric' or 'imperial'
  
  const toggleUnits = () => {
    setUnits(prev => prev === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <UnitContext.Provider value={{ units, toggleUnits }}>
      {children}
    </UnitContext.Provider>
  );
};