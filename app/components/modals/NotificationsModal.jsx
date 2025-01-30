"use client";

import { notifications } from "@/app/constants";
import { useGlobalContext } from "@/app/context/GlobalContext";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuCheckCheck } from "react-icons/lu";

const NotificationsModal = () => {
  const { showModal, setShowModal } = useGlobalContext();

  //Notifcation filter state
  const [filteredNotis, setFilteredNotis] = useState(notifications);
  const [filter, setFilter] = useState(""); // "" / "Comment" / "Mention"

  const handleFilter = (filterType) => {
    setFilter(filterType);

    if (filterType == "") {
      setFilteredNotis(notifications);
      return;
    }
    setFilteredNotis(notifications.filter((noti) => noti.type === filterType));
  };

  const markAllAsRead = () => {
    setFilteredNotis(
      notifications.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    );
  };

  return (
    <div
      onClick={() => setShowModal("")}
      className={`${
        showModal == "Noti" ? "visible" : "invisible"
      } fixed left-0 top-0 h-screen w-screen bg-[black]/60 z-[5] flex justify-end`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          showModal == "Noti" ? "translate-x-0" : "translate-x-[410px]"
        } bg-black duration-500 w-full vsm:w-[400px] h-full border-l border-l-[#404040] flex flex-col`}
      >
        <div className="w-full px-[10px] vsm:px-[24px] pt-[24px] pb-[20px] flex items-center justify-between">
          <p className="font-[500]">Your notifications</p>
          <button onClick={() => setShowModal("")}>
            <IoClose size={20} />
          </button>
        </div>

        <div className="mx-[10px] vsm:mx-[24px] px-[2px] h-[40px] py-[2px] border border-[#404040] rounded-[10px] flex justify-between items-center">
          <button
            onClick={() => handleFilter("")}
            className={`${
              filter == "" ? "bg-[#525252]" : ""
            } w-[33%] h-[33px] rounded-[8px] text-[14px] font-[500] duration-300`}
          >
            All
          </button>
          <button
            onClick={() => handleFilter("Comment")}
            className={`${
              filter == "Comment" ? "bg-[#525252]" : ""
            } w-[33%] h-[33px] rounded-[8px] text-[14px] font-[500] duration-300`}
          >
            Comments
          </button>
          <button
            onClick={() => handleFilter("Mention")}
            className={`${
              filter == "Mention" ? "bg-[#525252]" : ""
            } w-[33%] h-[33px] rounded-[8px] text-[14px] font-[500] duration-300`}
          >
            Mentioned
          </button>
        </div>

        <div className="noti-box px-[10px] vsm:pl-[24px] mr-[20px] vsm:mr-[30px] pt-[20px] flex-1 overflow-y-auto">
          <div className="flex flex-col space-y-[5px] pr-[10px]">
            {filteredNotis.map((noti, i) => (
              <div key={i}>
                <div className="flex gap-[10px]">
                  <div className="relative size-[48px]">
                    <Image
                      src={noti.img}
                      fill
                      className="rounded-full object-cover"
                    />
                    {noti.status == "online" && (
                      <div className="absolute bottom-0 right-0 size-[12px] border-[1.5px] border-[#FAFAFA] rounded-full bg-[#12B76A]"></div>
                    )}
                  </div>

                  <div>
                    <div className="flex gap-[5px] items-center">
                      <p className="text-[14px] font-[500] ">{noti.name}</p>
                      <p className="text-[12px] text-[#A3A3A3]">
                        {noti.minAgo} mins ago
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px]">
                        {noti.body1}{" "}
                        <span className="text-[#009688]">
                          {noti.highlightedText}
                        </span>{" "}
                        {noti.body2}
                      </p>
                    </div>
                  </div>

                  {!noti.isRead && (
                    <div className="ml-auto size-[8px] rounded-full bg-[#12B76A]" />
                  )}
                </div>

                <div className="mt-[5px] ml-[24px] pl-[34px] h-fit border-l border-l-[#525252] py-[10px] ">
                  <p className="text-[14px] text-[#A3A3A3]">{noti.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto w-full h-[84px] border-t-[0.8px] border-t-[#404040] flex justify-center items-center gap-[10px]">
          <button
            onClick={() => setShowModal("")}
            className="w-[45%] vsm:w-[40%] h-[40px] vsm:h-[36px] bg-[#525252] rounded-[16px] border border-[#737373] text-[14px] font-[500]"
          >
            Close
          </button>
          <button
            onClick={markAllAsRead}
            className="w-[45%] vsm:w-[40%] h-[40px] vsm:h-[36px] bg-[#00897B] rounded-[16px] border border-[#00897B] text-[14px] font-[500] flex items-center justify-center gap-[5px]"
          >
            <LuCheckCheck size={20} />
            <p>Mark all as read</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
