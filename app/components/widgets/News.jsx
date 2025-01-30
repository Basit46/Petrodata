import React from "react";
import { SiApplenews } from "react-icons/si";

const News = () => {
  return (
    <div className="news-widget relative w-full md:w-[266px] h-[290px] bg-[#171717] rounded-[24px] p-[16px] overflow-hidden">
      <div className="cover absolute left-0 top-0 h-full w-full" />
      <div className="relative h-full w-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="w-[36px] h-[22px] rounded-[24px] bg-[#00796B] text-[12px] font-[500] text-[white] grid place-items-center">
            ICE
          </div>
          <SiApplenews size={15} color="white" />
        </div>
        <div>
          <p className="mb-[5px] text-[12px] text-[white]">Vanguard</p>
          <p className="font-[600] text-[white] leading-[1.1]">
            Shareholders Enjoy a Massive Windfall as BP Expands Glo...
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
