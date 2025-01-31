"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
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

  return (
    <div className="w-[240px] px-[20px] pt-[30px]">
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
            className={`${
              pathname === item.path ? "bg-[#404040]" : ""
            } w-full h-[36px] px-[10px] hover:bg-[#404040] rounded-[36px] flex items-center gap-[8px]`}
          >
            {item.icon}
            <p className="text-[14px] font-[500] text-[#E5E5E5]">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WidgetSideBar;
