"use client";

import { IoTriangleSharp as Trend } from "react-icons/io5";
import PriceChart from "../PriceChart";
import { watchlistData } from "../../constants";

const Watchlist = () => {
  return (
    <div className="w-full xmd:w-[556px] h-[290px] bg-[#171717] rounded-[24px]">
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

export default Watchlist;

const Product = ({ name, fullName, data }) => {
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
      <div className="w-[25%]">
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

      <div className="w-[165px]">
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
