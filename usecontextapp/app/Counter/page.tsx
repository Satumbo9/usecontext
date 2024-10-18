"use client";
import React from "react";
import { useCounter } from "@/components/Context/CounterContext";
import { BiSolidBrightnessHalf } from "react-icons/bi";

const MyCounter = () => {
  const { onIncrement, theme, onDecrement, count, onThemeChange } =
    useCounter();

  return (
    <div
      className={`${theme.text} ${theme.background} h-screen flex flex-col items-center justify-center gap-5`}
    >
      <div className="text-9xl">Count: {count}</div>

      <div className="flex gap-5">
        <button
          className="text-4xl bg-sky-500 px-5 rounded-md h-20 w-56"
          onClick={onIncrement}
        >
          Icrement
        </button>
        <button
          className="text-4xl bg-sky-500 px-5 rounded-md h-20 w-56"
          onClick={onDecrement}
        >
          Decrement
        </button>
        <button
          className="text-4xl bg-sky-500 px-5 rounded-md h-20 w-56 flex items-center justify-center"
          onClick={onThemeChange}
        >
          <BiSolidBrightnessHalf style={{ width: 50, height: 50 }} />
        </button>
      </div>
    </div>
  );
};

export default MyCounter;
