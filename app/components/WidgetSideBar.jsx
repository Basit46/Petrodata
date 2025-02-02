"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsChevronBarRight } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import {
  LuSearch,
  LuTag,
  LuPlane,
  LuWarehouse,
  LuNewspaper,
  LuFile,
  LuArrowRightLeft,
} from "react-icons/lu";

const widgetSections = [
  { name: "Product retail price", path: "/widgets", icon: <LuTag /> },
  { name: "Flight widget", path: "/widgets/flight", icon: <LuPlane /> },
  { name: "Depot widget", path: "/widgets/depot", icon: <LuWarehouse /> },
  { name: "News widget", path: "/widgets/news", icon: <LuNewspaper /> },
  { name: "Report widget", path: "/widgets/report", icon: <LuFile /> },
  {
    name: "Exchange rate",
    path: "/widgets/exchange",
    icon: <LuArrowRightLeft />,
  },
];

const WidgetSideBar = () => {
  const pathname = usePathname();

  const [isWidgetBarOpen, setIsWidgetBarOpen] = useState(false);

  return (
    <div
      className={`${
        isWidgetBarOpen ? "left-0" : "left-[-250px]"
      } fixed duration-300 w-[220px] px-[20px] lg:pl-[20px] pt-[30px] lg:sticky top-0 h-screen z-[3] bg-ash lg:bg-transparent border-r border-r-white lg:border-r-0`}
    >
      <div className="w-full h-[44px] bg-[#404040] rounded-[36px] border border-[#525252] flex px-[10px] items-center gap-[5px]">
        <LuSearch size={15} color="#A3A3A3" className="flex-shrink-0" />
        <input
          className="w-full bg-transparent outline-none"
          placeholder="Search..."
          type="text"
        />
      </div>

      <div className="mt-[20px] flex flex-col gap-y-[10px]">
        {widgetSections.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            onClick={() => setIsWidgetBarOpen(false)}
            className={`${
              pathname === item.path ? "bg-[#404040]" : ""
            } w-full h-[36px] px-[10px] hover:bg-[#404040] rounded-[36px] flex items-center gap-[8px]`}
          >
            {item.icon}
            <p className="text-[14px] font-[500] text-[#E5E5E5]">{item.name}</p>
          </Link>
        ))}
      </div>

      <button
        onClick={() => setIsWidgetBarOpen((prev) => !prev)}
        className="lg:hidden fixed right-[20px] top-[20px] text-[20px]"
      >
        {isWidgetBarOpen ? <FaTimes /> : <BsChevronBarRight />}
      </button>

      {isWidgetBarOpen && (
        <div
          onClick={() => setIsWidgetBarOpen(false)}
          className="fixed left-[220px] h-screen w-full top-0 z-[3]"
        ></div>
      )}
    </div>
  );
};

export default WidgetSideBar;
