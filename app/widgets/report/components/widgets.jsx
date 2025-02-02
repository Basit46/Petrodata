"use client";

import SelectPlusIcon from "@/app/components/SelectPlusIcon";
import { reports } from "@/app/constants";
import Image from "next/image";

export const SmallWidget = () => {
  return (
    <div className="relative group scale-[0.8] w-full md:w-[266px] h-[290px] bg-[#171717] rounded-[24px] p-[16px]">
      <SelectPlusIcon id={8} size="S" />
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

export const MediumWidget = () => {
  return (
    <div className="relative group scale-[1] w-full md:w-[266px] h-fit bg-[#171717] rounded-[24px] p-[16px]">
      <SelectPlusIcon id={8} size="M" />

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

export const LargeWidget = () => {
  return (
    <div className="relative group scale-[0.8] w-full md:w-[266px] h-[290px] bg-[#171717] rounded-[24px] p-[16px]">
      <SelectPlusIcon id={8} size="L" />

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
