"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const PriceChart = ({ data }) => {
  if (!data?.length) return null;

  const firstPrice = data[0].price;
  const lastPrice = data[data.length - 1].price;

  const priceColor = firstPrice > lastPrice ? "#F04438" : "#34C85A94";

  const gradientId = `colorPrice-${firstPrice < lastPrice ? "up" : "down"}`;

  return (
    <ResponsiveContainer width="100%" height={56}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={priceColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={priceColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" hide />
        <YAxis hide />
        <CartesianGrid strokeDasharray="0 0 0 3" />

        <Area
          type="monotone"
          dataKey="price"
          stroke={priceColor}
          fillOpacity={1}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
