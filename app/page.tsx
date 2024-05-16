import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold  text-white drop-shadow-md", font.className )}>Auth</h1>
        <p className="text-white text-lg">A simple login</p>
        <div>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}
