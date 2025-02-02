"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const PriceChart = ({ data, chartHeight, xlabel, ylabel }) => {
  if (!data?.length) return null;

  const firstPrice = data[0].price;
  const lastPrice = data[data.length - 1].price;

  const priceColor = firstPrice > lastPrice ? "#F04438" : "#34C85A94";

  const gradientId = `colorPrice-${firstPrice < lastPrice ? "up" : "down"}`;

  return (
    <ResponsiveContainer width="100%" height={chartHeight || 56}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        {xlabel && <CartesianGrid strokeDasharray="1 1" stroke="#262626" />}
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={priceColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={priceColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          hide={!xlabel}
          tick={{ fill: "#A3A3A3", fontSize: 6.2, fontWeight: 500 }}
          tickLine={false}
        />
        <YAxis
          hide={!ylabel}
          tick={{ fill: "#A3A3A3", fontSize: 6.2, fontWeight: 500 }}
          tickLine={false}
          orientation="right"
        />
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
