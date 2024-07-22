"use client";
import { Plans } from "@/components/pricing-container";
export default function Pricing() {
  return (
    <div
      id="pricing"
      className="flex m-auto w-[80vw] justify-center flex-col mt-[200px]"
    >
      <div className="title">
        <h1 className="text-center text-[3rem]">Pricing</h1>
      </div>
      <div className="cards flex justify-around items-start">
        <Plans />
      </div>
    </div>
  );
}
