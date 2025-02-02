"use client";

import React from "react";
import SelectPlusIcon from "@/app/components/SelectPlusIcon";
import { IoTriangleSharp as Trend } from "react-icons/io5";
import Image from "next/image";
import { useEffect, useState } from "react";
import { depotData, products } from "@/app/constants";
import PriceChart from "@/app/components/PriceChart";

export const SmallWidget = () => {
  const [selected, setSelected] = useState("PMS");
  const [productData, setProductData] = useState(depotData[selected]);

  useEffect(() => {
    setProductData(depotData[selected]);
  }, [selected]);

  return (
    <div className="relative group min-w-[240px] min-h-[240px] bg-[#171717] rounded-[12.4px] flex flex-col">
      <SelectPlusIcon />

      <div className="px-[10px] pt-[10px] flex items-center justify-between">
        <div className="flex gap-[10px] items-center">
          <div className="relative size-[16.53px]">
            <Image src="/depotIcon.png" fill alt="Depot" />
          </div>
          <p className="text-[6.2px]">Depot</p>
        </div>

        <div>
          <div className="flex items-center gap-[4px]">
            <Trend
              size={4.13}
              color="red"
              style={{
                transform: "rotate(180deg)",
              }}
            />
            <p className="text-[7.23px] font-[600]">NIPCO</p>
          </div>
          <p className="text-[6.2px] font-[500] text-[#A3A3A3]">lagos</p>
        </div>
      </div>

      {productData
        .filter((_, i) => i < 1)
        .map((station, index) => (
          <StationSmall
            key={index}
            stationName={station.station}
            location={station.location}
            data={station.data}
          />
        ))}

      <div className="mt-auto h-[23.43px] border-t border-t-[#404040] px-[5px] flex gap-[3px]">
        {products.map((product, i) => (
          <button
            key={i}
            onClick={() => setSelected(product.id)}
            className={`${
              product.id == selected
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-[25px] h-full duration-300 text-[6.2px] font-[500] uppercase`}
          >
            {product.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export const MediumWidget = () => {
  const [selected, setSelected] = useState("PMS");
  const [productData, setProductData] = useState(depotData[selected]);

  useEffect(() => {
    setProductData(depotData[selected]);
  }, [selected]);

  return (
    <div className="relative group w-full h-[150px] bg-[#171717] rounded-[12.4px] flex flex-col">
      <SelectPlusIcon />

      <div className="flex pt-[10px] px-[5px] gap-[10px] items-center">
        <div className="relative size-[16.53px]">
          <Image src="/depotIcon.png" fill alt="Depot" />
        </div>
        <p className="text-[6.2px]">Depot</p>
      </div>

      {productData
        .filter((_, i) => i < 3)
        .map((station, index) => (
          <Station
            key={index}
            stationName={station.station}
            location={station.location}
            data={station.data}
          />
        ))}

      <div className="mt-auto h-[23.43px] border-t border-t-[#404040] px-[5px] flex gap-[3px]">
        {products.map((product, i) => (
          <button
            key={i}
            onClick={() => setSelected(product.id)}
            className={`${
              product.id == selected
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-[25px] h-full duration-300 text-[6.2px] font-[500] uppercase`}
          >
            {product.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export const LargeWidget = () => {
  const [selected, setSelected] = useState("PMS");
  const [productData, setProductData] = useState(depotData[selected]);

  useEffect(() => {
    setProductData(depotData[selected]);
  }, [selected]);

  return (
    <div className="relative group w-full h-fit bg-[#171717] rounded-[12.4px] flex flex-col">
      <SelectPlusIcon />

      <div className="flex pt-[10px] px-[5px] gap-[10px] items-center">
        <div className="relative size-[16.53px]">
          <Image src="/depotIcon.png" fill alt="Depot" />
        </div>
        <p className="text-[6.2px]">Depot</p>
      </div>

      {productData.map((station, index) => (
        <Station
          key={index}
          stationName={station.station}
          location={station.location}
          data={station.data}
        />
      ))}

      <div className="mt-auto h-[23.43px] border-t border-t-[#404040] px-[5px] flex gap-[3px]">
        {products.map((product, i) => (
          <button
            key={i}
            onClick={() => setSelected(product.id)}
            className={`${
              product.id == selected
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-[25px] h-full duration-300 text-[6.2px] font-[500] uppercase`}
          >
            {product.id}
          </button>
        ))}
      </div>
    </div>
  );
};

const Station = ({ stationName, location, data }) => {
  if (!data) return null;

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
    <div className="w-full h-[25%] border-b border-b-[#36353A] last:border-b-0 flex justify-between items-center px-[5px]">
      <div className="w-[30%] ">
        <div className="flex items-center gap-[4px]">
          <Trend
            size={4.13}
            color={trendColor}
            style={{
              transform: isPriceUp ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
          <p className="text-[7.23px] font-[600]">{stationName}</p>
        </div>
        <p className="text-[6.2px] font-[500] text-[#A3A3A3]">{location}</p>
      </div>

      <div className="w-[85.44px] h-[28.93px]">
        <PriceChart data={data} chartHeight={28.93} />
      </div>

      <div className="flex flex-col items-end">
        <p className="text-[6.2px] font-[600]">N{lastPrice.toFixed(2)}</p>
        <p className="text-[6.2px] font-[500]" style={{ color: trendColor }}>
          {priceChangeFormatted}
        </p>
      </div>
    </div>
  );
};
const StationSmall = ({ stationName, location, data }) => {
  if (!data) return null;

  const firstPrice = data[0].price;
  const lastPrice = data[data.length - 1].price;

  // Calculate if price has increased or decreased
  const isPriceUp = lastPrice > firstPrice;
  const trendColor = isPriceUp ? "#12B76A" : "#F04438";

  // Calculate price change
  const priceChange = lastPrice - firstPrice;
  const priceChangeFormatted =
    (priceChange > 0 ? "+" : "") + priceChange.toFixed(2);

  // Calculate price change percent
  const priceChangePercent = ((priceChange / lastPrice) * 100).toFixed(2) + "%";

  return (
    <div className="w-full h-full flex flex-col px-[10px] pt-[10px]">
      <div className="w-full h-[72.29px]">
        <PriceChart data={data} chartHeight={72.29} />
      </div>

      <div className="mt-[20px] w-full flex h-fit items-center justify-between gap-[20px]">
        <p className="text-[48px] font-[600]">₦{lastPrice.toFixed(2)}</p>
        <div>
          <p className="text-[12px] font-[500]" style={{ color: trendColor }}>
            {priceChangeFormatted}
          </p>
          <p className="text-[12px] font-[500]" style={{ color: trendColor }}>
            {priceChangePercent}
          </p>
        </div>
      </div>
    </div>
  );
};
