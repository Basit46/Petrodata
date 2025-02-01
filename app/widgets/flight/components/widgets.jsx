"use client";

import React, { useState } from "react";
import { airportData, flightData } from "@/app/constants";
import Image from "next/image";
import SelectPlusIcon from "@/app/components/SelectPlusIcon";

export const SmallWidget = () => {
  const [isDomestic, setIsDomestic] = useState(false);
  const totalFlights = airportData.reduce(
    (total, airport) => total + airport.flights,
    0
  );

  return (
    <div className="relative group scale-[0.8] origin-center w-full h-fit bg-[#171717] rounded-[12.4px] flex flex-col">
      <SelectPlusIcon />

      <div className="w-full h-[300px] flex flex-col">
        <div className="flex items-center gap-[5px] py-[10px] px-[16px]">
          <div className="relative size-[32px]">
            <Image src="/flightIcon.png" alt="flight" fill />
          </div>
          <p className="text-[20px] font-[500]">
            {totalFlights.toLocaleString()}
          </p>
          <p className="text-[12px] font-gray">Flight</p>
        </div>

        <div className="flex-1 w-full pl-[16px]">
          <FlightBarChart
            data={isDomestic ? flightData.domestic : flightData.international}
          />
        </div>

        <div className="mt-auto h-[44px] border-t border-t-[#404040] px-[16px] flex gap-[10px]">
          <button
            onClick={() => setIsDomestic(false)}
            className={`${
              !isDomestic
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[12px] font-[500]`}
          >
            International
          </button>
          <button
            onClick={() => setIsDomestic(true)}
            className={`${
              isDomestic
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[12px] font-[500]`}
          >
            Domestic
          </button>
        </div>
      </div>
    </div>
  );
};

export const MediumWidget = () => {
  const [isDomestic, setIsDomestic] = useState(false);
  const totalFlights = airportData.reduce(
    (total, airport) => total + airport.flights,
    0
  );

  return (
    <div className="relative group origin-center w-full h-[149.8px] bg-[#171717] rounded-[12.4px] flex flex-col xmd:flex-row">
      <SelectPlusIcon />

      <div className="w-full xmd:w-[55%] h-[300px] xmd:h-full flex flex-col">
        <div className="flex items-center gap-[5px] py-[10px] px-[5px]">
          <div className="relative size-[16.53px]">
            <Image src="/flightIcon.png" alt="flight" fill />
          </div>
          <p className="text-[10.33px] font-[500]">
            {totalFlights.toLocaleString()}
          </p>
          <p className="text-[6.2px] font-gray">Flight</p>
        </div>

        <div className="flex-1 w-full pl-[5px]">
          <FlightBarChart
            data={isDomestic ? flightData.domestic : flightData.international}
          />
        </div>

        <div className="mt-auto h-[23.43px] border-t border-t-[#404040] px-[5px] flex gap-[10px]">
          <button
            onClick={() => setIsDomestic(false)}
            className={`${
              !isDomestic
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[6.2px] font-[500]`}
          >
            International
          </button>
          <button
            onClick={() => setIsDomestic(true)}
            className={`${
              isDomestic
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[6.2px] font-[500]`}
          >
            Domestic
          </button>
        </div>
      </div>

      <div className="bg-[#404040] flex-1 h-full py-[20px] px-[5px] space-y-[12px] rounded-r-[12.4px]">
        {airportData.map((airport, i) => (
          <div key={i} className="flex justify-between items-center">
            <p className="text-[6.2px] font-[500]">
              {airport.name.length > 17
                ? airport.name.slice(0, 17) + "..."
                : airport.name}
            </p>
            <p className="w-[35%] text-[6.2px] text-[#D4D4D4]">
              {airport.flights} flights
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LargeWidget = () => {
  const [isDomestic, setIsDomestic] = useState(false);
  const totalFlights = airportData.reduce(
    (total, airport) => total + airport.flights,
    0
  );

  return (
    <div className="relative group size-[240px] bg-[#171717] rounded-[12.4px] flex flex-col">
      <SelectPlusIcon />

      <div className="w-full h-[60%] flex flex-col">
        <div className="flex items-center gap-[5px] py-[10px] px-[5px]">
          <div className="relative size-[16.53px]">
            <Image src="/flightIcon.png" alt="flight" fill />
          </div>
          <p className="text-[10.33px] font-[500]">
            {totalFlights.toLocaleString()}
          </p>
          <p className="text-[6.2px] font-gray">Flight</p>
        </div>

        <div className="flex-1 w-full pl-[5px]">
          <FlightBarChart
            data={isDomestic ? flightData.domestic : flightData.international}
          />
        </div>

        <div className="mt-auto h-[23px] border-t border-t-[#404040] px-[5px] flex gap-[10px]">
          <button
            onClick={() => setIsDomestic(false)}
            className={`${
              !isDomestic
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[6.2px] font-[500]`}
          >
            International
          </button>
          <button
            onClick={() => setIsDomestic(true)}
            className={`${
              isDomestic
                ? "border-t border-t-[#009688] text-[#009688]"
                : "border-t border-t-transparent text-gray"
            } w-fit px-[10px] h-full duration-300 text-[6.2px] font-[500]`}
          >
            Domestic
          </button>
        </div>
      </div>

      <div className="w-full bg-[#404040] flex-1 py-[10px] px-[5px] space-y-[8px] rounded-b-[12.4px]">
        {airportData.map((airport, i) => (
          <div key={i} className="w-full flex justify-between items-center">
            <p className="text-[6.2px] font-[500]">
              {airport.name.length > 17
                ? airport.name.slice(0, 17) + "..."
                : airport.name}
            </p>
            <p className="w-[35%] text-[6.2px] text-[#D4D4D4] text-end">
              {airport.flights} flights
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export const FlightBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barSize={6.35}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="1 1" stroke="#262626" />
        <XAxis
          dataKey="date"
          tick={{ fill: "#A3A3A3", fontSize: 6.2, fontWeight: 500 }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          orientation="right"
          tick={{ fill: "#A3A3A3", fontSize: 6.2, fontWeight: 500 }}
          tickFormatter={(value) =>
            `${value / 1000}K` == "0K" ? 0 : `${value / 1000}K`
          }
          tickLine={false}
          axisLine={false}
        />

        <Bar
          dataKey="arrivalsCommercial"
          stackId="a"
          fill="#3498db"
          name="Arrivals - Commercial"
        />
        <Bar
          dataKey="departuresCommercial"
          stackId="b"
          fill="#2980b9"
          name="Departures - Commercial"
        />
        <Bar
          dataKey="arrivalsMilitary"
          stackId="a"
          fill="#f39c12"
          name="Arrivals - Military"
        />
        <Bar
          dataKey="departuresMilitary"
          stackId="b"
          fill="#e67e22"
          name="Departures - Military"
        />
        <Bar
          dataKey="arrivalsPrivate"
          stackId="a"
          fill="#2ecc71"
          name="Arrivals - Private"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="departuresPrivate"
          stackId="b"
          fill="#27ae60"
          name="Departures - Private"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
