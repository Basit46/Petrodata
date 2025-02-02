"use client";

import { news } from "@/app/constants";
import { SiApplenews } from "react-icons/si";

export const SmallWidget = () => {
  return (
    <div className="news-widget small p-[10px]">
      <div className="cover absolute left-0 top-0 h-full w-full rounded-[12.4px]" />
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

export const MediumWidget = () => {
  return (
    <div className="medium">
      <div className="px-[16px] py-[8px] flex justify-between items-center">
        <p className="font-bold text-[#F04438]">Top Stories</p>
        <SiApplenews size={15} color="white" />
      </div>

      <div>
        {news
          .filter((_, i) => i < 2)
          .map((item, i) => (
            <div
              key={i}
              className="border-t border-t-[#36353A] flex py-[10px] px-[16px] gap-[10px]"
            >
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-[12px] text-[#737373]">{item.paper}</p>
                  <span>
                    {item.tags.map((tag, i) => (
                      <span
                        className="px-[10px] py-[1px] rounded-[9.54px] flex justify-center items-center"
                        key={i}
                        style={{ backgroundColor: tag.color }}
                      >
                        <p className="font-[500] text-[12px] text-[white]">
                          {tag.tag}
                        </p>
                      </span>
                    ))}
                  </span>
                </div>
                <p className="font-[600]">{item.title}</p>
                <p className="text-[12px] text-gray">
                  {item.content.length > 170
                    ? item.content.slice(0, 170) + "..."
                    : item.content}
                </p>
              </div>

              <div
                style={{ width: "60px", height: "60px" }}
                className="rounded-[3.18px] bg-[pink]"
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export const LargeWidget = () => {
  return (
    <div className="large">
      <div className="px-[16px] py-[8px] flex justify-between items-center">
        <p className="font-bold text-[#F04438]">Top Stories</p>
        <SiApplenews size={15} color="white" />
      </div>

      <div>
        {news.map((item, i) => (
          <div
            key={i}
            className="border-t border-t-[#36353A] flex py-[10px] px-[16px] gap-[10px]"
          >
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-[12px] text-[#737373]">{item.paper}</p>
                <span>
                  {item.tags.map((tag, i) => (
                    <span
                      className="px-[10px] py-[1px] rounded-[9.54px] flex justify-center items-center"
                      key={i}
                      style={{ backgroundColor: tag.color }}
                    >
                      <p className="font-[500] text-[12px] text-[white]">
                        {tag.tag}
                      </p>
                    </span>
                  ))}
                </span>
              </div>
              <p className="font-[600]">{item.title}</p>
              <p className="text-[12px] text-gray">
                {item.content.length > 170
                  ? item.content.slice(0, 170) + "..."
                  : item.content}
              </p>
            </div>

            <div
              style={{ width: "60px", height: "60px" }}
              className="rounded-[3.18px] bg-[pink]"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
