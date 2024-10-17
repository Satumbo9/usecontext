import React from "react";
import { CounterProvider, useCounter } from "@/app/CounterContext";

const CounterControls = () => {
  const { increment, decrement } = useCounter();

  return (
    <div className="h-[50vh] bg-red-500 text-white">
      <button onClick={increment}>Icrement</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterControls;
