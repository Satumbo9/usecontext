import Image from "next/image";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";
import { CounterProvider } from "./CounterContext";

export default function Home() {
  return (
    <div>
      <CounterProvider>
        <CounterDisplay />
        <CounterControls />
      </CounterProvider>
    </div>
  );
}
