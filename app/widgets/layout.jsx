"use client";

import React from "react";
import WidgetSideBar from "../components/WidgetSideBar";
import { useGlobalContext } from "../context/GlobalContext";

const layout = ({ children }) => {
  const { selectedWidgets } = useGlobalContext();

  return (
    <div className="relative w-full flex gap-[30px]">
      <WidgetSideBar />
      <div className="flex-1 h-full py-[30px]">{children}</div>

      <div className="w-[20%] h-[400px] py-[30px] border-l border-l-gray">
        {selectedWidgets.map((widget) => (
          <p key={widget.id}>
            {widget.id} - {widget.size}
          </p>
        ))}
      </div>
    </div>
  );
};

export default layout;
