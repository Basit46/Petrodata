"use client";

import React from "react";
import SelectPlusIcon from "@/app/components/SelectPlusIcon";
import { news, PMSWeekData } from "@/app/constants";
import { IoTriangleSharp as Trend } from "react-icons/io5";
import PriceChart from "@/app/components/PriceChart";
import { SiApplenews } from "react-icons/si";

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
        </div>

        <p className="text-[12px] font-[600] text-[white]">
          {analyzePrices(PMSWeekData).priceChange}
        </p>
      </div>

      <div className="flex-1 w-full flex items-center justify-center">
        <PriceChart data={PMSWeekData} chartHeight={95.58} xlabel ylabel />
      </div>

      <div className="h-[80px]">
        {news
          .filter((_, i) => i < 1)
          .map((item, i) => (
            <div
              key={i}
              className="border-b border-b-[#36353A] last:border-b-0 flex pt-[5px] pb-[10px] px-[10px] gap-[10px]"
            >
              <div className="flex-1">
                <div className="flex items-center gap-[3px]">
                  <SiApplenews className="size-[6px] text-[#737373]" />
                  <p className="text-[10px] text-[#737373]">{item.paper}</p>
                </div>
                <p className="font-[600]">
                  {item.title.length > 30
                    ? item.title.slice(0, 30) + "..."
                    : item.title}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export const MediumWidget = () => {
  return (
    <div className="relative group w-full h-fit bg-[#171717] rounded-[12.4px] py-[5px]">
      <SelectPlusIcon />

      <div className="w-full h-[25%] px-[10px] flex justify-between gap-[10px] items-center">
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

        <div className="w-[85.44px] h-full">
          <PriceChart data={PMSWeekData} chartHeight={28.93} />
        </div>

        <div className="flex flex-col items-end">
          <p className="text-[6.2px] font-[600] text-[white]">
            ₦{PMSWeekData[PMSWeekData.length - 1].price.toFixed(2)}
          </p>
          <p className="text-[6.2px] font-[500]" style={{ color: "#12B76A" }}>
            +{analyzePrices(PMSWeekData).priceChange}
          </p>
        </div>
      </div>

      <div className="mt-[5px] border-t border-t-[#36353A]">
        {news
          .filter((_, i) => i < 2)
          .map((item, i) => (
            <div
              key={i}
              className="border-b border-b-[#36353A] last:border-b-0 flex pt-[5px] pb-[10px] px-[10px] gap-[10px]"
            >
              <div className="flex-1">
                <div className="flex items-center gap-[3px]">
                  <SiApplenews className="size-[5px] text-[#737373]" />
                  <p className="text-[8px] text-[#737373]">{item.paper}</p>
                </div>
                <p className="font-[600] text-[8.26px]">{item.title}</p>
                <p className="text-[6.2px] text-gray">
                  {item.content.length > 100
                    ? item.content.slice(0, 100) + "..."
                    : item.content}
                </p>
              </div>

              <div className="size-[29.8px] rounded-[3.18px] bg-[pink]"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export const LargeWidget = () => {
  return (
    <div className="relative group w-[90%] h-fit bg-[#171717] rounded-[12.4px] py-[5px]">
      <SelectPlusIcon />

      <div className="w-full h-[25%] px-[10px] flex justify-between gap-[10px] items-center">
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

        <div className="w-[85.44px] h-full">
          <PriceChart data={PMSWeekData} chartHeight={28.93} />
        </div>

        <div className="flex flex-col items-end">
          <p className="text-[6.2px] font-[600] text-[white]">
            ₦{PMSWeekData[PMSWeekData.length - 1].price.toFixed(2)}
          </p>
          <p className="text-[6.2px] font-[500]" style={{ color: "#12B76A" }}>
            +{analyzePrices(PMSWeekData).priceChange}
          </p>
        </div>
      </div>

      <div className="mt-[5px] border-t border-t-[#36353A]">
        {news.map((item, i) => (
          <div
            key={i}
            className="border-b border-b-[#36353A] last:border-b-0 flex pt-[5px] pb-[5px] px-[10px] gap-[10px]"
          >
            <div className="flex-1">
              <div className="flex items-center gap-[3px]">
                <SiApplenews className="size-[5px] text-[#737373]" />
                <p className="text-[8px] text-[#737373]">{item.paper}</p>
              </div>
              <p className="font-[600] text-[8.26px]">{item.title}</p>
              <p className="text-[6.2px] text-gray">
                {item.content.length > 100
                  ? item.content.slice(0, 100) + "..."
                  : item.content}
              </p>
            </div>

            <div className="size-[29.8px] rounded-[3.18px] bg-[pink]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
