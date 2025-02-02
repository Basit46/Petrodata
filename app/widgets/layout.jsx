"use client";

import React from "react";
import WidgetSideBar from "../components/WidgetSideBar";
import { useGlobalContext } from "../context/GlobalContext";
import Link from "next/link";

const layout = ({ children }) => {
  const { selectedWidgets } = useGlobalContext();

  return (
    <div className="relative w-full flex gap-[30px]">
      <WidgetSideBar />
      <div className="flex-1 h-full py-[30px]">{children}</div>

      <div className="w-[20%] h-[400px] py-[30px]">
        <div>
          {selectedWidgets.map((widget) => (
            <p key={widget.id}>
              Widget Id: {widget.id} - Size: {widget.size}
            </p>
          ))}
        </div>

        <Link
          href="/dashboard"
          className="mt-[20px] mx-auto w-[64px] h-[36px] grid place-items-center rounded-[36px] bg-[#525252] border border-[#737373]"
        >
          Done
        </Link>
      </div>
    </div>
  );
};

export default layout;
