"use client";

import { IoTriangleSharp as Trend } from "react-icons/io5";
import PriceChart from "../PriceChart";
import { depotData, products } from "../../constants";
import Image from "next/image";
import { useEffect, useState } from "react";

const Depot = () => {
  const [selected, setSelected] = useState("PMS");

  const [productData, setProductData] = useState(depotData[selected]);

  useEffect(() => {
    setProductData(depotData[selected]);
  }, [selected]);

  return (
    <div className="w-full xmd:w-[556px] h-[290px] bg-[#171717] rounded-[24px] flex flex-col">
      <div className="flex pt-[10px] px-[16px] gap-[10px] items-center">
        <div className="relative size-[32px]">
          <Image src="/depotIcon.png" fill alt="Depot" />
        </div>
        <p>Depot</p>
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

      <div className="mt-auto h-[44px] border-t border-t-[#404040] px-[16px] flex gap-[10px]">
        {products.map((product, i) => (
          <button
            key={i}
            onClick={() => setSelected(product.id)}
            className={`${
              product.id == selected
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-[35px] h-full duration-300 text-[12px] font-[500] uppercase`}
          >
            {product.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Depot;

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
    <div className="w-full h-[25%] border-b border-b-[#36353A] last:border-b-0 flex justify-between items-center px-[16px]">
      <div className="w-[30%] sm:w-[25%] mr-[10px] sm:mr-0">
        <div className="flex items-center gap-[4px]">
          <Trend
            size={10}
            color={trendColor}
            style={{
              transform: isPriceUp ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
          <p className="text-[14px] font-[600]">{stationName}</p>
        </div>
        <p className="text-[12px] font-[500] text-[#A3A3A3]">{location}</p>
      </div>

      <div className="w-[150px] sm:w-[165px]">
        <PriceChart data={data} />
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
