"use client";

import React from "react";
import WidgetSideBar from "../components/WidgetSideBar";
import { useGlobalContext } from "../context/GlobalContext";
import Link from "next/link";

const layout = ({ children }) => {
  const { selectedWidgets } = useGlobalContext();

  return (
    <div className="relative w-full lg:flex gap-[30px]">
      <WidgetSideBar />

      <div className="lg:flex-1 px-[20px] lg:px-0 flex flex-col xmd:flex-row gap-[30px]">
        <div className="flex-1 h-full py-[50px] lg:py-[30px]">{children}</div>

        <div className="w-[200px] h-[400px] pt-[80px] sm:py-[50px] lg:py-[30px]">
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
    </div>
  );
};

export default layout;
