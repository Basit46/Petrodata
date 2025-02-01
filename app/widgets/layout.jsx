import React from "react";
import WidgetSideBar from "../components/WidgetSideBar";

const layout = ({ children }) => {
  return (
    <div className="relative w-full  flex gap-[10px] vsm:gap-[30px]">
      <WidgetSideBar />
      <div className="flex-1 h-full py-[30px]">{children}</div>
      <div className="w-[20%] h-[400px] py-[30px] border-l border-l-gray"></div>
    </div>
  );
};

export default layout;
