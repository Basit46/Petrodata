"use client";

import SelectSize from "@/app/components/SelectSize";
import React, { useState } from "react";
import { LargeWidget, MediumWidget, SmallWidget } from "./components/widgets";

const page = () => {
  const [size, setSize] = useState("S"); // "S" / "M" / "L"

  return (
    <div className="w-[350px] h-[440px] bg-[#404040] rounded-[24px] p-[20px] flex flex-col justify-between">
      <h1 className="font-[500] text-[#F5F5F5]">News widget</h1>
      <p className="text-[12px] text-[#D4D4D4]">
        Get the latest industry news and updates
      </p>

      <div className="flex-1 grid place-items-center">
        {size === "S" && <SmallWidget />}
        {size === "M" && <MediumWidget />}
        {size === "L" && <LargeWidget />}
      </div>

      <SelectSize size={size} setSize={setSize} />
    </div>
  );
};

export default page;
