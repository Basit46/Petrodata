import React from "react";
import Sidebar from "../components/Sidebar";
import NotificationsModal from "../components/modals/NotificationsModal";
import SearchModal from "../components/modals/SearchModal";
import AlertModal from "../components/modals/AlertModal";

const layout = ({ children }) => {
  return (
    <div className="relative w-full flex">
      <Sidebar />
      <div className="flex-1 h-full px-[30px]">{children}</div>

      {/* Modals */}
      <NotificationsModal />
      <SearchModal />
      <AlertModal />
    </div>
  );
};

export default layout;
