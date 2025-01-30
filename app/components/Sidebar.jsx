"use client";

import Image from "next/image";
import Link from "next/link";
import { sections } from "../constants";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Sidebar = () => {
  const pathname = usePathname();

  const { isBarOpen, setIsBarOpen } = useGlobalContext();

  //Manage the expansion and minimizing the sidebar
  const [isMini, setIsMini] = useState(true);

  return (
    <div
      className={`side-bar ${isMini ? "w-[64px]" : "w-[64px] lg:w-[240px]"} ${
        isBarOpen ? "left-0" : "left-[-70px]"
      } fixed lg:sticky duration-300 top-0 h-screen bg-black pl-[20px] z-[3]`}
    >
      <Link
        href="/"
        className="mt-[20px] flex items-center gap-[5px] overflow-hidden"
      >
        <div className="relative size-[32px] flex-shrink-0">
          <Image src="/logo.png" alt="logo" fill />
        </div>

        <p
          className={`${
            isMini ? "opacity-0" : "opacity-100"
          }  hidden lg:inline duration-300 text-[24px] font-[500] text-[#009688]`}
        >
          Petro<span className="text-[#A3A3A3]">data</span>
        </p>
      </Link>

      <div className="mt-[120px] space-y-[5px]">
        {sections.map((section, i) => (
          <Link
            key={i}
            href={section.path}
            className={`${
              section.path == pathname
                ? "text-green border-r-2 border-r-green"
                : ""
            } w-full h-[48px] flex items-center gap-[10px] text-[#D4D4D4] font-[500] overflow-hidden`}
          >
            {section.icon}
            <p
              className={`${
                isMini ? "opacity-0" : "opacity-100"
              } hidden lg:block duration-300`}
            >
              {section.name}
            </p>
          </Link>
        ))}
      </div>

      <button
        onClick={() => setIsMini((prev) => !prev)}
        className="hidden lg:grid absolute z-[2] top-[80px] right-[-18px] size-[36px] border border-[#404040] bg-[#262626] place-items-center rounded-full"
      >
        {isMini ? <FiChevronsRight size={20} /> : <FiChevronsLeft size={20} />}
      </button>

      {/* Line border style   */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF00 0%, #FFFFFF66 50%, #FFFFFF00 100%)",
        }}
        className="absolute right-0 top-0 h-full w-[0.5%]"
      />

      {isBarOpen && (
        <div
          onClick={() => setIsBarOpen(false)}
          className="fixed top-0 left-[64px] h-screen w-full z-[2]"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
