"use client";

import { dollarRates } from "@/app/constants";
import React, { useState } from "react";
import { LuArrowRightLeft } from "react-icons/lu";

export const SmallWidget = () => {
  const [isoffical, setIsoffical] = useState(true);

  return (
    <div className="small flex flex-col">
      <div className="w-full h-full flex flex-col pt-[10px]">
        <div className="px-[16px] flex items-center gap-[5px]">
          <div className="size-[32px] rounded-full bg-[#262626] grid place-items-center">
            <LuArrowRightLeft color="#26A69A" />
          </div>
          <p className="text-[12px] text-gray">Exchange rate</p>
        </div>

        <div className="px-[16px] flex-1 flex flex-col justify-center">
          <p className="text-[12px] text-gray">Naira (₦)</p>
          <p className="text-[30px] font-[500]">1544.71</p>
        </div>

        <div className="mt-auto h-[44px] border-t border-t-[#404040] px-[16px] flex gap-[10px]">
          <button
            onClick={() => setIsoffical(true)}
            className={`${
              isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[16px] h-full duration-300 text-[12px] font-[500]`}
          >
            Official rate
          </button>
          <button
            onClick={() => setIsoffical(false)}
            className={`${
              !isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[16px] h-full duration-300 text-[12px] font-[500]`}
          >
            Black market
          </button>
        </div>
      </div>
    </div>
  );
};

export const MediumWidget = () => {
  const [isoffical, setIsoffical] = useState(true);

  return (
    <div className="medium flex">
      <div className="w-[60%] h-full flex flex-col pt-[10px]">
        <div className="px-[16px] flex items-center gap-[5px]">
          <div className="size-[32px] rounded-full bg-[#262626] grid place-items-center">
            <LuArrowRightLeft color="#26A69A" />
          </div>
          <p className="text-[12px] text-gray">Exchange rate</p>
        </div>

        <div className="px-[16px] flex-1 flex flex-col justify-center">
          <p className="text-[12px] text-gray">Naira (₦)</p>
          <p className="text-[30px] font-[500]">1544.71</p>
        </div>

        <div className="mt-auto h-[44px] border-t border-t-[#404040] px-[16px] flex gap-[10px]">
          <button
            onClick={() => setIsoffical(true)}
            className={`${
              isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[16px] h-full duration-300 text-[12px] font-[500]`}
          >
            Official rate
          </button>
          <button
            onClick={() => setIsoffical(false)}
            className={`${
              !isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[16px] h-full duration-300 text-[12px] font-[500]`}
          >
            Black market
          </button>
        </div>
      </div>

      <div className="flex-1 h-full bg-[#404040] px-[16px] py-[20px] space-y-[15px] rounded-r-[12.4px]">
        {dollarRates.map((rate, i) => (
          <div key={i} className="flex items-center justify-between">
            <p className="text-[12px]">{rate.time}</p>
            <p className="text-[12px] text-[#D4D4D4]">₦{rate.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LargeWidget = () => {
  const [isoffical, setIsoffical] = useState(true);

  return (
    <div className="large flex flex-col">
      <div className="w-full h-full flex flex-col pt-[10px]">
        <div className="px-[16px] flex items-center gap-[5px]">
          <div className="size-[32px] rounded-full bg-[#262626] grid place-items-center">
            <LuArrowRightLeft color="#26A69A" />
          </div>
          <p className="text-[12px] text-gray">Exchange rate</p>
        </div>

        <div className="px-[16px] flex-1 flex flex-col justify-center">
          <p className="text-[12px] text-gray">Naira (₦)</p>
          <p className="text-[30px] font-[500]">1544.71</p>
        </div>

        <div className="mt-auto h-[44px] border-t border-t-[#404040] px-[16px] flex gap-[10px]">
          <button
            onClick={() => setIsoffical(true)}
            className={`${
              isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[16px] h-full duration-300 text-[12px] font-[500]`}
          >
            Official rate
          </button>
          <button
            onClick={() => setIsoffical(false)}
            className={`${
              !isoffical
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[16px] h-full duration-300 text-[12px] font-[500]`}
          >
            Black market
          </button>
        </div>
      </div>

      <div className="flex-1 h-full bg-[#404040] px-[16px] py-[20px] space-y-[15px] rounded-b-[12.4px]">
        {dollarRates.map((rate, i) => (
          <div key={i} className="flex items-center justify-between">
            <p className="text-[12px]">{rate.time}</p>
            <p className="text-[12px] text-[#D4D4D4]">₦{rate.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
