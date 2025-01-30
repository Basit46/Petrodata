import React from "react";
import Sidebar from "../components/Sidebar";
import NotificationsModal from "../components/modals/NotificationsModal";
import SearchModal from "../components/modals/SearchModal";
import AlertModal from "../components/modals/AlertModal";

const layout = ({ children }) => {
  return (
    <div className="relative w-full flex">
      <Sidebar />
      <div className="w-full flex-1 h-full px-[10px] vsm:px-[30px] overflow">
        {children}
      </div>

      {/* Modals */}
      <NotificationsModal />
      <SearchModal />
      <AlertModal />
    </div>
  );
};

export default layout;
