import React from "react";
import WidgetSideBar from "../components/WidgetSideBar";

const layout = ({ children }) => {
  return (
    <div className="relative w-full flex">
      <WidgetSideBar />
      <div className="w-full flex-1 h-full px-[10px] vsm:px-[30px] overflow">
        {children}
      </div>
    </div>
  );
};

export default layout;
