"use client";
import React, { useState, useContext, createContext } from "react";

// interface CounterContextType {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
// }

//Crreate the context
const CounterContext = createContext<undefined | any>(undefined);

//Create a provider component
export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

//Create a custom hook for easier usage
export const useCounter = () => {
  return useContext(CounterContext);
};
