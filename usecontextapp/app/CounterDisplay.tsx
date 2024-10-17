import React from "react";
import { useCounter } from "@/app/CounterContext";

const CounterDisplay = () => {
  const { count } = useCounter();
  return (
    <div className="h-[50vh] bg-sky-500 text-white">
      <h1>Count: {1}</h1>
    </div>
  );
};

export default CounterDisplay;
