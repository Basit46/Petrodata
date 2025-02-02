"use client";

import React from "react";
import SelectPlusIcon from "@/app/components/SelectPlusIcon";
import { news, watchlistData } from "@/app/constants";
import { IoTriangleSharp as Trend } from "react-icons/io5";
import { SiApplenews } from "react-icons/si";

export const SmallWidget = () => {
  return (
    <div className="relative group w-[240px] min-h-[240px] bg-[#171717] rounded-[12.4px] py-[5px] flex flex-col">
      <SelectPlusIcon id={4} size="S" />
      <div className="flex-1 flex flex-col">
        {watchlistData
          .filter((_, i) => i < 3)
          .map((product, index) => (
            <ProductSmall
              key={index}
              name={product.name}
              fullName={product.fullName}
              data={product.data}
            />
          ))}
      </div>
      <div className="mt-[5px] border-t border-t-[#36353A]">
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
      <SelectPlusIcon id={4} size="M" />

      <div className="grid grid-cols-2">
        {watchlistData.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            fullName={product.fullName}
            data={product.data}
          />
        ))}
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
      <SelectPlusIcon id={4} size="L" />

      <div className="grid grid-cols-2">
        {watchlistData.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            fullName={product.fullName}
            data={product.data}
          />
        ))}
      </div>

      <div className="mt-[5px] border-t border-t-[#36353A]">
        {news.map((item, i) => (
          <div
            key={i}
            className="border-b border-b-[#36353A] last:border-b-0 flex py-[5px] px-[10px] gap-[10px]"
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

const Product = ({ name, fullName, data }) => {
  const firstPrice = data[0].price;
  const lastPrice = data[data.length - 1].price;

  // Calculate if price has increased or decreased
  const isPriceUp = lastPrice > firstPrice;
  const trendColor = isPriceUp ? "#12B76A" : "#F04438";

  return (
    <div className="w-full h-[10px] flex justify-between items-center px-[10px]">
      <div className="w-[30%] mr-0">
        <div className="flex items-center gap-[4px]">
          <Trend
            size={4.13}
            color={trendColor}
            style={{
              transform: isPriceUp ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
          <p className="text-[7.23px] font-[600]">{name}</p>
        </div>
      </div>

      <p className="text-[6.2px] font-[600]">₦{lastPrice.toFixed(2)}</p>
    </div>
  );
};

const ProductSmall = ({ name, fullName, data }) => {
  const firstPrice = data[0].price;
  const lastPrice = data[data.length - 1].price;

  // Calculate if price has increased or decreased
  const isPriceUp = lastPrice > firstPrice;
  const trendColor = isPriceUp ? "#12B76A" : "#F04438";

  // Calculate price change
  const priceChange = lastPrice - firstPrice;
  const priceChangeFormatted =
    (priceChange > 0 ? "+" : "") + priceChange.toFixed(2);

  return (
    <div className="w-full h-[50px] flex justify-between items-center px-[10px] gap-[10px]">
      <div className="">
        <div className="flex items-center gap-[4px]">
          <Trend
            size={10}
            color={trendColor}
            style={{
              transform: isPriceUp ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
          <p className="text-[14px] font-[600]">{name}</p>
        </div>
        <p className="text-[12px] font-[500] text-gray">{fullName}</p>
      </div>

      <div className="flex flex-col items-end">
        <p className="text-[12px] font-[600]">N{lastPrice.toFixed(2)}</p>
        <p className="text-[12px] font-[500]" style={{ color: trendColor }}>
          {priceChangeFormatted}
        </p>
      </div>
    </div>
  );
};
