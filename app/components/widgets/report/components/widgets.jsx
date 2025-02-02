"use client";

import { reports } from "@/app/constants";
import Image from "next/image";

export const SmallWidget = () => {
  return (
    <div className="small p-[16px]">
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
    <div className="medium p-[16px]">
      <div className="flex gap-[20px] flex-col">
        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[32px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[12px] font-[500]">Reports - week 31</p>
          </div>

          <div className="mt-[10px] flex flex-wrap gap-[8px]">
            {reports["31"].map((report, i) => (
              <div className="w-[30%] h-[34.61px] rounded-[7.23px] bg-[#8280803D] flex flex-row items-center gap-[6px] px-[10px] py-[5px]">
                <div key={i} className="relative w-[20.15px] h-full">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[10px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[32px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[12px] font-[500]">Reports - week 31</p>
          </div>
          <div className="mt-[10px] flex flex-wrap gap-[8px]">
            {reports["30"].map((report, i) => (
              <div className="w-[30%] h-[34.61px] rounded-[7.23px] bg-[#8280803D] flex flex-row items-center gap-[6px] px-[10px] py-[5px]">
                <div key={i} className="relative w-[20.15px] h-full">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[10px] text-[#C2C2C2]">{report.title}</p>
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
    <div className="large p-[16px]">
      <div className="flex gap-[10px] flex-col">
        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[32px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[12px] font-[500]">Reports - week 31</p>
          </div>
          <div className="mt-[3px] flex justify-center gap-y-[20px]">
            {reports["31"].map((report, i) => (
              <div className="w-[33%] flex flex-col items-center gap-[6px]">
                <div key={i} className="relative w-[19.07px] h-[24.03px]">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[12px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[32px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[12px] font-[500]">Reports - week 31</p>
          </div>
          <div className="mt-[3px] flex justify-center gap-y-[20px]">
            {reports["30"].map((report, i) => (
              <div className="w-[33%] flex flex-col items-center gap-[6px]">
                <div key={i} className="relative w-[19.07px] h-[24.03px]">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[12px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[32px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[12px] font-[500]">Reports - week 31</p>
          </div>
          <div className="mt-[3px] flex justify-center gap-y-[20px]">
            {reports["29"].map((report, i) => (
              <div className="w-[33%] flex flex-col items-center gap-[6px]">
                <div key={i} className="relative w-[19.07px] h-[24.03px]">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[12px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-[5px]">
            <div className="relative size-[32px]">
              <Image src="/reportIcon.png" alt="report" fill />
            </div>
            <p className="text-[12px] font-[500]">Reports - week 31</p>
          </div>
          <div className="mt-[3px] flex justify-center gap-y-[20px]">
            {reports["28"].map((report, i) => (
              <div className="w-[33%] flex flex-col items-center gap-[6px]">
                <div key={i} className="relative w-[19.07px] h-[24.03px]">
                  <Image src="/fileImg.png" fill alt="file" />
                </div>
                <p className="text-[12px] text-[#C2C2C2]">{report.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
