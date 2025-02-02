"use client";

import React from "react";
import SelectPlusIcon from "@/app/components/SelectPlusIcon";
import { PMSWeekData } from "@/app/constants";
import { IoTriangleSharp as Trend } from "react-icons/io5";
import PriceChart from "@/app/components/PriceChart";

function analyzePrices(data) {
  const prices = data.map((item) => item.price);
  const sortedPrices = [...prices].sort((a, b) => a - b);

  const highestPrice = Math.max(...prices).toFixed(2);
  const lowestPrice = Math.min(...prices).toFixed(2);
  const medianPrice =
    sortedPrices.length % 2 === 0
      ? (sortedPrices[sortedPrices.length / 2 - 1] +
          sortedPrices[sortedPrices.length / 2]) /
        2
      : sortedPrices[Math.floor(sortedPrices.length / 2)];

  const priceChange = (prices[prices.length - 1] - prices[0]).toFixed(2);
  const priceChangePercent = ((priceChange / prices[0]) * 100).toFixed(2);

  return {
    highestPrice,
    lowestPrice,
    medianPrice,
    priceChange,
    priceChangePercent: `${priceChangePercent}%`,
  };
}

export const SmallWidget = () => {
  return (
    <div className="relative group size-[240px] bg-[#171717] rounded-[12.4px] py-[5px] px-[10px] flex flex-col justify-between gap-[10px]">
      <SelectPlusIcon />

      <div className="w-full h-fit flex items-center justify-between gap-[10px] ">
        <div className="">
          <div className="flex items-center gap-[4px]">
            <Trend
              size={10}
              color={"#12B76A"}
              style={{
                transform: true ? "rotate(0deg)" : "rotate(180deg)",
              }}
            />
            <p className="text-[14px] font-[600]">PMS</p>
          </div>
          <p className="text-[12px] font-[500] text-[#A3A3A3]">
            Premium Motor Spirit
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-[12px] font-[600] text-[#12B76A]">
            {analyzePrices(PMSWeekData).priceChange}
          </p>
          <p className="text-[12px] font-[500]" style={{ color: "#12B76A" }}>
            +{analyzePrices(PMSWeekData).priceChangePercent}
          </p>
        </div>
      </div>

      <div className="flex-1 w-full flex items-center justify-center">
        <PriceChart data={PMSWeekData} chartHeight={95.58} xlabel ylabel />
      </div>

      <p className="text-[48px] font-[500] text-[white] text-center">
        ₦{PMSWeekData[PMSWeekData.length - 1].price.toFixed(2)}
      </p>
    </div>
  );
};

export const MediumWidget = () => {
  return (
    <div className="relative group w-full h-[150px] bg-[#171717] rounded-[12.4px] py-[5px] px-[10px]">
      <SelectPlusIcon />

      <div className="w-full h-[25%] flex justify-between gap-[10px] items-center">
        <div className="">
          <div className="flex items-center gap-[4px]">
            <Trend
              size={6}
              color={"#12B76A"}
              style={{
                transform: true ? "rotate(0deg)" : "rotate(180deg)",
              }}
            />
            <p className="text-[7.23px] font-[600]">PMS</p>
          </div>
          <p className="text-[6.2px] font-[500] text-[#A3A3A3]">
            Premium Motor Spirit
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-[6.2px] font-[600] text-[#12B76A]">
            {analyzePrices(PMSWeekData).priceChange}
          </p>
          <p className="text-[6.2px] font-[500]" style={{ color: "#12B76A" }}>
            +{analyzePrices(PMSWeekData).priceChangePercent}
          </p>
        </div>
      </div>

      <div className="mt-[10px] flex gap-[20px]">
        <div className="w-[30%] space-y-[15px]">
          <div className="space-y-[10px]">
            <span className="flex justify-between items-center">
              <p className="text-[6.2px] font-[500] text-[#939298]">
                Highest price
              </p>
              <p className="text-[6.2px] font-[500] text-[#939298]">
                {analyzePrices(PMSWeekData).highestPrice}
              </p>
            </span>

            <span className="flex justify-between items-center">
              <p className="text-[6.2px] font-[500] text-[#939298]">
                Median price
              </p>
              <p className="text-[6.2px] font-[500] text-[#939298]">
                {analyzePrices(PMSWeekData).medianPrice}.00
              </p>
            </span>

            <span className="flex justify-between items-center">
              <p className="text-[6.2px] font-[500] text-[#939298]">
                Lowest price
              </p>
              <p className="text-[6.2px] font-[500] text-[#939298]">
                {analyzePrices(PMSWeekData).lowestPrice}
              </p>
            </span>
          </div>
          <p className="text-[18.6px] text-[white] font-[500]">
            ₦{PMSWeekData[PMSWeekData.length - 1].price.toFixed(2)}
          </p>
        </div>

        <div className="flex-1 h-full">
          <PriceChart data={PMSWeekData} chartHeight={95.58} xlabel />
        </div>
      </div>
    </div>
  );
};

export const LargeWidget = () => {
  return (
    <div className="relative group w-full h-fit bg-[#171717] rounded-[12.4px] py-[5px] px-[10px]">
      <SelectPlusIcon />

      <div className="w-full h-fit flex items-center justify-between gap-[10px] ">
        <div className="">
          <div className="flex items-center gap-[4px]">
            <Trend
              size={6}
              color={"#12B76A"}
              style={{
                transform: true ? "rotate(0deg)" : "rotate(180deg)",
              }}
            />
            <p className="text-[7.23px] font-[600]">PMS</p>
          </div>
          <p className="text-[6.2px] font-[500] text-[#A3A3A3]">
            Premium Motor Spirit
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-[6.2px] font-[600] text-[#12B76A]">
            {analyzePrices(PMSWeekData).priceChange}
          </p>
          <p className="text-[6.2px] font-[500]" style={{ color: "#12B76A" }}>
            +{analyzePrices(PMSWeekData).priceChangePercent}
          </p>
        </div>
      </div>

      <div className="mt-[10px] flex flex-col gap-[20px]">
        <div className="w-full flex justify-between">
          <div className="space-y-[6px]">
            <span className="flex justify-between items-center">
              <p className="text-[6.2px] font-[500] text-[#939298]">
                Highest price
              </p>
              <p className="text-[6.2px] font-[500] text-[#939298]">
                {analyzePrices(PMSWeekData).highestPrice}
              </p>
            </span>

            <span className="flex justify-between items-center">
              <p className="text-[6.2px] font-[500] text-[#939298]">
                Median price
              </p>
              <p className="text-[6.2px] font-[500] text-[#939298]">
                {analyzePrices(PMSWeekData).medianPrice}.00
              </p>
            </span>

            <span className="flex justify-between items-center">
              <p className="text-[6.2px] font-[500] text-[#939298]">
                Lowest price
              </p>
              <p className="text-[6.2px] font-[500] text-[#939298]">
                {analyzePrices(PMSWeekData).lowestPrice}
              </p>
            </span>
          </div>
          <p className="text-[18.6px] text-[white] font-[500]">
            ₦{PMSWeekData[PMSWeekData.length - 1].price.toFixed(2)}
          </p>
        </div>

        <div className="w-full h-full">
          <PriceChart data={PMSWeekData} chartHeight={95.58} xlabel ylabel />
        </div>
      </div>
    </div>
  );
};
