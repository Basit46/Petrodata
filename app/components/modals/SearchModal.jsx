"use client";

import { popularQueries } from "@/app/constants";
import { useGlobalContext } from "@/app/context/GlobalContext";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";

const SearchModal = () => {
  const { showModal, setShowModal } = useGlobalContext();

  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    setResult("Lorem Ipsum");
  };

  return (
    <div
      onClick={() => setShowModal("")}
      className={`${
        showModal == "Search" ? "visible" : "invisible"
      } fixed left-0 top-0 h-screen w-screen pt-[60px] bg-[black]/30 z-[5] flex justify-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          showModal == "Search" ? "opacity-100" : "opacity-0"
        } bg-[#0A0A0A] duration-500 w-[90%] vsm:w-[80%] xmd:w-[712px] h-fit xmd:h-[440px] flex flex-col rounded-[8px]`}
      >
        <div className="p-[16px] flex gap-[10px] items-center">
          <div className="relative size-[20px]">
            <Image src="/logo.png" alt="logo" fill />
          </div>
          <div className="w-fit px-[6px] py-[3px] bg-[#262626] rounded-[8px] text-[12px]">
            Ask Petrodata AI
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="border-b-[0.8px] border-b-[#262626] w-full px-[16px] h-[44px] flex gap-[8px] items-center"
        >
          <LuSparkles className="text-[#A3A3A3]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search using petrodata AI"
            className="w-full bg-transparent text-[#A3A3A3] outline-none"
          />
        </form>

        <div className="p-[16px]">
          {result == "" ? (
            <div>
              <p className="text-[12px] text-[#A3A3A3]">Popular</p>
              <div className="ml-[20px] mt-[10px] xmd:mt-[20px] space-y-[10px] xmd:space-y-[20px]">
                {popularQueries.map((query, i) => (
                  <button
                    onClick={() => {
                      setResult(query);
                      handleSearch();
                    }}
                    key={i}
                    className="text-[#A3A3A3] text-left"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-[#A3A3A3]">Result</p>
                <button onClick={() => setResult("")}>
                  <IoClose />
                </button>
              </div>
              <div className="ml-[20px] mt-[20px] space-y-[20px]">
                <p className="text-[#A3A3A3]">
                  {result}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam iusto eveniet repellendus recusandae praesentium optio
                  in dolore excepturi accusamus, voluptas iure enim minima
                  nostrum quae officia voluptatibus distinctio dolorem, sunt
                  minus maxime quia fuga corporis! Totam fuga vitae laborum
                  debitis voluptatibus maxime eligendi eius dicta velit
                  repellat, consequuntur soluta nemo.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
