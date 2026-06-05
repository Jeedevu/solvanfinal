import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("flex flex-col items-center gap-4 p-6 rounded-2xl bg-neutral-50/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 backdrop-blur-md max-w-sm mx-auto shadow-xl transition-colors duration-300")}>
      <h1 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white">Component Example</h1>
      <h2 className="text-4xl font-semibold font-mono text-blue-500 my-2">{count}</h2>
      <div className="flex gap-4">
        <button 
          onClick={() => setCount((prev) => prev - 1)}
          className="h-10 w-10 rounded-full border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center font-bold text-lg cursor-pointer"
        >
          -
        </button>
        <button 
          onClick={() => setCount((prev) => prev + 1)}
          className="h-10 w-10 rounded-full border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center font-bold text-lg cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};
