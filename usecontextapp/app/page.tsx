import { CounterProvider } from "@/components/Context/CounterContext";
import MyCounter from "./Counter/page";

export default function Home() {
  return (
    <div>
      <CounterProvider>
        <MyCounter />
      </CounterProvider>
    </div>
  );
}
