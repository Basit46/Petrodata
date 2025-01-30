"use client";

import React, { useState } from "react";
import { FiSearch, FiMoon, FiSun } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { LuAlarmClockPlus } from "react-icons/lu";
import { useGlobalContext } from "../context/GlobalContext";
import Link from "next/link";
import Image from "next/image";
import { BsChevronBarRight } from "react-icons/bs";

const Header = () => {
  const { showModal, setShowModal, isBarOpen, setIsBarOpen } =
    useGlobalContext();

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className="w-full pt-[20px] lg:pt-[50px] pb-[30px] border-b-[0.8px] border-b-[#404040]">
      <div className="flex lg:hidden items-center justify-between mb-[20px]">
        <Link href="/" className="">
          <div className="relative size-[32px] flex-shrink-0">
            <Image src="/logo.png" alt="logo" fill />
          </div>
        </Link>

        <button
          onClick={() => setIsBarOpen((prev) => !prev)}
          className="text-[20px]"
        >
          {isBarOpen ? <FaTimes /> : <BsChevronBarRight />}
        </button>
      </div>

      <div className="w-full flex flex-col vsm:flex-row vsm:items-center gap-[10px] vsm:gap-0 justify-between">
        <div>
          <h1 className="text-[24px] font-[500] text-[#F5F5F5]">Hello, John</h1>
          <p className="text-[#A3A3A3]">{formattedDate}</p>
        </div>

        <div className="flex items-center gap-[10px]">
          <button
            onClick={() => setShowModal("Search")}
            className="size-[36px] bg-[#525252] hover:bg-black duration-200 rounded-full border border-[#737373] grid place-items-center"
          >
            <FiSearch color="#FAFAFA" />
          </button>

          <button
            onClick={() => setShowModal("Alert")}
            className="w-[36px] xmd:w-[113px] h-[36px] bg-[#525252] hover:bg-black duration-200 rounded-full border border-[#737373] flex justify-center items-center gap-[5px]"
          >
            <LuAlarmClockPlus color="#FAFAFA" />
            <p className="hidden xmd:inline text-[14px] font-[500]">
              Set alert
            </p>
          </button>

          <button
            onClick={() => setShowModal("Noti")}
            className="size-[36px] bg-[#525252] hover:bg-black duration-200 rounded-full border border-[#737373] grid place-items-center"
          >
            <LuBell color="#FAFAFA" />
          </button>

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`${
              darkMode ? "bg-[#00695C]" : "bg-[#00695C]/50"
            } relative w-[72px] h-[36px] rounded-[36px] px-[10px] flex justify-between items-center text-[15px]`}
          >
            <FiMoon className="" color={darkMode ? "#00695C" : ""} />
            <FiSun className="" color={!darkMode ? "#00695C" : ""} />

            <div
              className={`${
                darkMode ? "left-[2px]" : "left-[38px]"
              } absolute bg-[#F5F5F5] size-[32px] rounded-full duration-500 flex justify-center items-center text-[#00695C]`}
            >
              {darkMode ? <FiMoon /> : <FiSun />}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
