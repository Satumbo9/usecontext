"use client";
import React, { useState, useContext, createContext } from "react";

interface counterType {
  count: number;
  theme: {
    text: string;
    background: string;
  };
  onIncrement: () => void;
  onDecrement: () => void;
  onThemeChange: () => void;
}

const defaultCounter = {
  count: 0,
  theme: {
    text: "text-black",
    background: "bg-white",
  },
  onIncrement: () => {},
  onDecrement: () => {},
  onThemeChange: () => {},
};

const CounterContext = createContext<counterType>(defaultCounter);

//Create a provider component
export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //working on default values

  const [count, setCount] = useState<number>(0);
  const [theme, setTheme] = useState({
    text: "",
    background: "",
  });

  const onIncrement = () => {
    console.log("INCREMENT");
    setCount((prev) => prev + 1);
  };
  const onDecrement = () => {
    console.log("DECREMENT");
    setCount((prev) => prev - 1);
  };

  const onThemeChange = () => {
    setTheme((prev) => {
      if (prev.background === "") {
        return {
          text: "text-white",
          background: "bg-black",
        };
      } else {
        return {
          text: "",
          background: "",
        };
      }
    });
  };

  return (
    <CounterContext.Provider
      value={{ count, theme, onIncrement, onDecrement, onThemeChange }}
    >
      {children}
    </CounterContext.Provider>
  );
};

//Create a custom hook for easier usage
export const useCounter = () => {
  return useContext(CounterContext);
};
