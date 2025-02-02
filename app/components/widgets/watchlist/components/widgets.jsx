"use client";

import React from "react";
import SelectPlusIcon from "@/app/components/SelectPlusIcon";
import { watchlistData } from "@/app/constants";
import { IoTriangleSharp as Trend } from "react-icons/io5";
import PriceChart from "@/app/components/PriceChart";

export const SmallWidget = () => {
  return (
    <div className="small py-[10px]">
      <SelectPlusIcon id={3} size="S" />
      {watchlistData.map((product, index) => (
        <ProductSmall
          key={index}
          name={product.name}
          fullName={product.fullName}
          data={product.data}
        />
      ))}
    </div>
  );
};

export const MediumWidget = () => {
  return (
    <div className="medium">
      <SelectPlusIcon id={3} size="M" />
      {watchlistData.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          fullName={product.fullName}
          data={product.data}
        />
      ))}
    </div>
  );
};

export const LargeWidget = () => {
  return (
    <div className="large py-[5px]">
      <SelectPlusIcon id={3} size="L" />
      {watchlistData.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          fullName={product.fullName}
          data={product.data}
          size={"L"}
        />
      ))}
      {watchlistData.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          fullName={product.fullName}
          data={product.data}
          size={"L"}
        />
      ))}
    </div>
  );
};

const Product = ({ name, fullName, data, size }) => {
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
    <div
      style={{ height: size ? "60px" : "25%" }}
      className="w-full h-[25%] border-b border-b-[#36353A] last:border-b-0 flex justify-between items-center px-[16px]"
    >
      <div className="w-[30%] mr-0">
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
        <p className="text-[12px] font-[500] text-[#A3A3A3]">{fullName}</p>
      </div>

      <div className="w-[85.44px] h-[24.22px]">
        <PriceChart data={data} chartHeight={24.22} />
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
    <div className="w-full h-[25%] flex justify-between gap-[10px] items-center px-[16px]">
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
        <p className="text-[12px] font-[500] text-[#A3A3A3]">{fullName}</p>
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
