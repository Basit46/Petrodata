"use client";

import SelectSize from "@/app/components/SelectSize";
import React, { useState } from "react";
import { LargeWidget, MediumWidget, SmallWidget } from "./widgets";

const Retail = () => {
  const [size, setSize] = useState("S"); // "S" / "M" / "L"

  return (
    <div className="widget-bg">
      <h1 className="font-[500] text-[#F5F5F5]">Retail Product</h1>
      <p className="text-[12px] text-[#D4D4D4]">
        View price quotes and track performance of a product throughout the week
      </p>

      <div className="flex-1 flex items-center justify-center">
        {size === "S" && <SmallWidget />}
        {size === "M" && <MediumWidget />}
        {size === "L" && <LargeWidget />}
      </div>

      <SelectSize size={size} setSize={setSize} />
    </div>
  );
};

export default Retail;
