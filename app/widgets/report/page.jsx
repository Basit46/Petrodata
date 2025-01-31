"use client";

import SelectPlusIcon from "@/app/components/SelectPlusIcon";
import SelectSize from "@/app/components/SelectSize";
import { reports } from "@/app/constants";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [size, setSize] = useState("M"); // "S" / "M" / "L"

  return (
    <div className="w-[350px] h-[440px] bg-[#404040] rounded-[24px] p-[20px] flex flex-col justify-between">
      <h1 className="font-[500] text-[#F5F5F5]">Report widget</h1>
      <p className="text-[12px] text-[#D4D4D4]">
        Get comprehensive reports & insights
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

const SmallWidget = () => {
  return (
    <div className="relative group scale-[0.8] w-full md:w-[266px] h-[290px] bg-[#171717] rounded-[24px] p-[16px]">
      <SelectPlusIcon />
      <div className="flex items-center gap-[5px]">
        <div className="relative size-[32px]">
          <Image src="/reportIcon.png" alt="report" fill />
        </div>
        <p className="text-[12px] font-[500]">Reports - week 31</p>
      </div>
      <div className="mt-[20px] flex flex-wrap justify-center gap-y-[20px]">
        {reports["31"].map((report, i) => (
          <div className="w-[50%] flex flex-col items-center gap-[6px]">
            <div key={i} className="relative w-[48px] h-[63px]">
              <Image src="/fileImg.png" fill alt="file" />
            </div>
            <p className="text-[12px] text-[#C2C2C2]">{report.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MediumWidget = () => {
  return (
    <div className="relative group scale-[1] w-full md:w-[266px] h-fit bg-[#171717] rounded-[24px] p-[16px]">
      <SelectPlusIcon />

      <div className="flex gap-[10px] flex-col">
        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[12.72px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[10px] font-[500]">Reports - week 31</p>
          </div>
          <div className="mt-[5px] flex flex-wrap gap-[8px]">
            {reports["31"].map((report, i) => (
              <div className="w-[30%] h-[34.61px] rounded-[7.23px] bg-[#8280803D] flex flex-row items-center gap-[6px] p-[5px]">
                <div key={i} className="relative w-[20.15px] h-full">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[6px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[12.72px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[10px] font-[500]">Reports - week 30</p>
          </div>
          <div className="mt-[5px] flex flex-wrap gap-[8px]">
            {reports["30"].map((report, i) => (
              <div className="w-[30%] h-[34.61px] rounded-[7.23px] bg-[#8280803D] flex flex-row items-center gap-[6px] p-[5px]">
                <div key={i} className="relative w-[20.15px] h-full">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[6px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LargeWidget = () => {
  return (
    <div className="relative group scale-[0.8] w-full md:w-[266px] h-[290px] bg-[#171717] rounded-[24px] p-[16px]">
      <SelectPlusIcon />

      <div className="flex gap-[10px] flex-col">
        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[12.72px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[10px] font-[500]">Reports - week 31</p>
          </div>
          <div className="mt-[3px] flex justify-center gap-y-[20px]">
            {reports["31"].map((report, i) => (
              <div className="w-[25%] flex flex-col items-center gap-[6px]">
                <div key={i} className="relative w-[19.07px] h-[24.03px]">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[6px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[12.72px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[10px] font-[500]">Reports - week 30</p>
          </div>
          <div className="mt-[3px] flex justify-center gap-y-[20px]">
            {reports["30"].map((report, i) => (
              <div className="w-[25%] flex flex-col items-center gap-[6px]">
                <div key={i} className="relative w-[19.07px] h-[24.03px]">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[6px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[12.72px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[10px] font-[500]">Reports - week 29</p>
          </div>
          <div className="mt-[3px] flex justify-center gap-y-[20px]">
            {reports["29"].map((report, i) => (
              <div className="w-[25%] flex flex-col items-center gap-[6px]">
                <div key={i} className="relative w-[19.07px] h-[24.03px]">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[6px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[12.72px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[10px] font-[500]">Reports - week 28</p>
          </div>
          <div className="mt-[3px] flex justify-center gap-y-[20px]">
            {reports["28"].map((report, i) => (
              <div className="w-[25%] flex flex-col items-center gap-[6px]">
                <div key={i} className="relative w-[19.07px] h-[24.03px]">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[6px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
