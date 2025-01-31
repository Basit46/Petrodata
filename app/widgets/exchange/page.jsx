"use client";

import SelectPlusIcon from "@/app/components/SelectPlusIcon";
import SelectSize from "@/app/components/SelectSize";
import { dollarRates } from "@/app/constants";
import React, { useState } from "react";
import { LuArrowRightLeft } from "react-icons/lu";

const page = () => {
  const [size, setSize] = useState("S"); // "S" / "M" / "L"

  return (
    <div className="w-[350px] h-[440px] bg-[#404040] rounded-[24px] p-[20px] flex flex-col justify-between">
      <h1 className="font-[500] text-[#F5F5F5]">Exchange rate</h1>
      <p className="text-[12px] text-[#D4D4D4]">
        Get updates on new prices of dollar
      </p>

      <div className="flex-1 grid place-items-center">
        {size === "S" && <SmallWidget />}
        {size === "M" && <MediumWidget />}
        {size === "L" && <LargeWidget />}
      </div>

      <SelectSize size={size} setSize={setSize} />
    </div>
  );
};

export default page;

const SmallWidget = () => {
  const [isoffical, setIsoffical] = useState(true);

  return (
    <div className="relative group scale-[1] w-[240px] h-[240px] bg-[#171717] rounded-[12.4px] flex flex-col">
      <SelectPlusIcon />

      <div className="w-full h-full flex flex-col pt-[10px]">
        <div className="px-[10px] flex items-center gap-[5px]">
          <div className="size-[26px] rounded-full bg-[#262626] grid place-items-center">
            <LuArrowRightLeft color="#26A69A" />
          </div>
          <p className="text-[9.93px] text-gray">Exchange rate</p>
        </div>

        <div className=" px-[10px] flex-1 flex flex-col justify-center">
          <p className="text-[12px] text-gray">Naira (N)</p>
          <p className="text-[30px] font-[500]">1544.71</p>
        </div>

        <div className="mt-auto h-[36.52px] border-t border-t-[#404040] px-[10px] flex gap-[10px]">
          <button
            onClick={() => setIsoffical(true)}
            className={`${
              isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[8px] font-[500]`}
          >
            Official rate
          </button>
          <button
            onClick={() => setIsoffical(false)}
            className={`${
              !isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[8px] font-[500]`}
          >
            Black market
          </button>
        </div>
      </div>
    </div>
  );
};

const MediumWidget = () => {
  const [isoffical, setIsoffical] = useState(true);
  return (
    <div className="relative group scale-[1] w-full h-[150px] bg-[#171717] rounded-[12.4px] flex">
      <SelectPlusIcon />

      <div className="w-[60%] h-full flex flex-col pt-[10px]">
        <div className="px-[10px] flex items-center gap-[5px]">
          <div className="size-[26px] rounded-full bg-[#262626] grid place-items-center">
            <LuArrowRightLeft color="#26A69A" />
          </div>
          <p className="text-[9.93px] text-gray">Exchange rate</p>
        </div>

        <div className="px-[10px] flex-1 pt-[15px]">
          <p className="text-[12px] text-gray">Naira (N)</p>
          <p className="text-[30px] font-[500]">1544.71</p>
        </div>

        <div className="mt-auto h-[23.43px] border-t border-t-[#404040] px-[10px] flex gap-[10px]">
          <button
            onClick={() => setIsoffical(true)}
            className={`${
              isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[8px] font-[500]`}
          >
            Official rate
          </button>
          <button
            onClick={() => setIsoffical(false)}
            className={`${
              !isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[8px] font-[500]`}
          >
            Black market
          </button>
        </div>
      </div>

      <div className="flex-1 h-full bg-[#404040] px-[5px] py-[6px] space-y-[8px]">
        {dollarRates.map((rate, i) => (
          <div key={i} className="flex items-center justify-between">
            <p className="text-[8px]">{rate.time}</p>
            <p className="text-[8px] text-[#D4D4D4]">{rate.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const LargeWidget = () => {
  const [isoffical, setIsoffical] = useState(true);

  return (
    <div className="relative group scale-[1] w-[80%] h-fit bg-[#171717] rounded-[12.4px] flex flex-col">
      <SelectPlusIcon />

      <div className="w-full h-full flex flex-col pt-[10px]">
        <div className="px-[10px] flex items-center gap-[5px]">
          <div className="size-[26px] rounded-full bg-[#262626] grid place-items-center">
            <LuArrowRightLeft color="#26A69A" />
          </div>
          <p className="text-[9.93px] text-gray">Exchange rate</p>
        </div>

        <div className=" px-[10px] flex-1 pt-[15px]">
          <p className="text-[12px] text-gray">Naira (N)</p>
          <p className="text-[30px] font-[500]">1544.71</p>
        </div>

        <div className="mt-auto h-[23.43px] border-t border-t-[#404040] px-[10px] flex gap-[10px]">
          <button
            onClick={() => setIsoffical(true)}
            className={`${
              isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[8px] font-[500]`}
          >
            Official rate
          </button>
          <button
            onClick={() => setIsoffical(false)}
            className={`${
              !isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[8px] font-[500]`}
          >
            Black market
          </button>
        </div>
      </div>

      <div className="flex-1 h-full bg-[#404040] px-[5px] py-[6px] space-y-[10px]">
        {dollarRates
          .filter((_, i) => i < 4)
          .map((rate, i) => (
            <div key={i} className="flex items-center justify-between">
              <p className="text-[8px]">{rate.time}</p>
              <p className="text-[8px] text-[#D4D4D4]">{rate.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
