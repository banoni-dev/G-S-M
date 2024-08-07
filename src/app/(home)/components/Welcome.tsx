"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Welcome() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log("Current theme:", theme);
  }, [theme]);

  return (
    <div
      id="home"
      className="h-[60rem] w-[80vw] flex-col m-auto rounded-md justify-between flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight
        className="top-0 left-[450px] w-[700px] md:top-0"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
      <div>
        <button
          className={`inline-flex mt-20 h-12 animate-shimmer items-center justify-center rounded-md border ${
            theme === "light"
              ? "border-slate-800 text-[#fff]"
              : "border-slate-800 text-slate-400"
          } bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 ${
            theme === "light"
              ? "focus:ring-white focus:ring-offset-white"
              : "focus:ring-slate-400 focus:ring-offset-slate-50"
          }`}
        >
          Create an account
        </button>
      </div>
    </div>
  );
}
