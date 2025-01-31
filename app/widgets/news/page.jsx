"use client";

import SelectPlusIcon from "@/app/components/SelectPlusIcon";
import SelectSize from "@/app/components/SelectSize";
import React, { useState } from "react";
import { SiApplenews } from "react-icons/si";

const news = [
  {
    paper: "Vanguard",
    tags: [{ tag: "ICE", color: "#00796B" }],
    title:
      "Shareholders Enjoy a Massive Windfall as BP Expands Global Operations",
    content:
      "BP’s shareholders can expect a multibillion-dollar payout this year after the oil giant reported better than expected quarterly profits of almost $2.8 billion and set out plans to develop a new oil hub in the Gulf of Mexico.",
    img: "",
  },
  {
    paper: "Vanguard",
    tags: [{ tag: "ICE", color: "#00796B" }],
    title: "Eni granted regulator consent for NAOC sales to Oando",
    content:
      "BP’s shareholders can expect a multibillion-dollar payout this year after the oil giant reported better than expected quarterly profits of almost $2.8 billion and set out plans to develop a new oil hub in the Gulf of Mexico.",
    img: "",
  },
  {
    paper: "Vanguard",
    tags: [{ tag: "ICE", color: "#00796B" }],
    title: "Eni granted regulator consent for NAOC sales to Oando",
    content:
      "BP’s shareholders can expect a multibillion-dollar payout this year after the oil giant reported better than expected quarterly profits of almost $2.8 billion and set out plans to develop a new oil hub in the Gulf of Mexico.",
    img: "",
  },
  {
    paper: "Vanguard",
    tags: [{ tag: "ICE", color: "#00796B" }],
    title: "Eni granted regulator consent for NAOC sales to Oando",
    content:
      "BP’s shareholders can expect a multibillion-dollar payout this year after the oil giant reported better than expected quarterly profits of almost $2.8 billion and set out plans to develop a new oil hub in the Gulf of Mexico.",
    img: "",
  },
];

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

const SmallWidget = () => {
  return (
    <div className="news-widget relative group size-[240px] bg-[#171717] rounded-[24px] p-[10px]">
      <SelectPlusIcon />

      <div className="cover absolute left-0 top-0 h-full w-full rounded-[24px]" />
      <div className="relative h-full w-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="group-hover:scale-90 duration-300 w-[36px] h-[22px] rounded-[24px] bg-[#00796B] text-[12px] font-[500] text-[white] grid place-items-center">
            ICE
          </div>
          <SiApplenews size={15} color="white" />
        </div>
        <div>
          <p className="mb-[5px] text-[12px] text-[white]">Vanguard</p>
          <p className="font-[600] group-hover:text-[14px] text-[15px] duration-300 text-[white] leading-[1.1]">
            Shareholders Enjoy a Massive Windfall as BP Expands Glo...
          </p>
        </div>
      </div>
    </div>
  );
};

const MediumWidget = () => {
  return (
    <div className="relative group w-full min-h-[149.8px] bg-[#171717] rounded-[24px]">
      <SelectPlusIcon />

      <div className="px-[10px] py-[8px] flex justify-between items-center">
        <p className="font-bold text-[#F04438] text-[8.26px]">Top Stories</p>
        <SiApplenews size={7.75} color="white" />
      </div>

      <div>
        {news
          .filter((_, i) => i < 2)
          .map((item, i) => (
            <div
              key={i}
              className="border-t border-t-[#36353A] flex pt-[5px] pb-[10px] px-[10px] gap-[10px]"
            >
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-[8px] text-[#737373]">{item.paper}</p>
                  <span>
                    {item.tags.map((tag, i) => (
                      <span
                        className="w-[13.36px] h-[7px] rounded-[9.54px] flex justify-center items-center"
                        key={i}
                        style={{ backgroundColor: tag.color }}
                      >
                        <p className="font-[500] text-[3.97px] text-[white]">
                          {tag.tag}
                        </p>
                      </span>
                    ))}
                  </span>
                </div>
                <p className="font-[600] text-[8.26px]">{item.title}</p>
                <p className="text-[6.2px] font-gray">
                  {item.content.length > 170
                    ? item.content.slice(0, 170) + "..."
                    : item.content}
                </p>
              </div>

              <div className="size-[29.8px] rounded-[3.18px] bg-[pink]"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

const LargeWidget = () => {
  return (
    <div className="relative group w-[90%] min-h-[149.8px] bg-[#171717] rounded-[24px]">
      <SelectPlusIcon />

      <div className="px-[10px] py-[8px] flex justify-between items-center">
        <p className="font-bold text-[#F04438] text-[8.26px]">Top Stories</p>
        <SiApplenews size={7.75} color="white" />
      </div>

      <div>
        {news.map((item, i) => (
          <div
            key={i}
            className="border-t border-t-[#36353A] flex pt-[5px] pb-[10px] px-[10px] gap-[10px]"
          >
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-[8px] text-[#737373]">{item.paper}</p>
                <span>
                  {item.tags.map((tag, i) => (
                    <span
                      className="w-[13.36px] h-[7px] rounded-[9.54px] flex justify-center items-center"
                      key={i}
                      style={{ backgroundColor: tag.color }}
                    >
                      <p className="font-[500] text-[3.97px] text-[white]">
                        {tag.tag}
                      </p>
                    </span>
                  ))}
                </span>
              </div>
              <p className="font-[600] text-[8.26px]">{item.title}</p>
              <p className="text-[6.2px] font-gray">
                {item.content.length > 100
                  ? item.content.slice(0, 100) + "..."
                  : item.content}
              </p>
            </div>

            <div className="size-[29.8px] rounded-[3.18px] bg-[pink]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
