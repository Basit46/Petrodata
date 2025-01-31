import React from "react";
import { LuPlus } from "react-icons/lu";

const SelectPlusIcon = () => {
  return (
    <button className="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 origin-bottom-right duration-300 absolute top-[-18px] left-[-18px] bg-[#00897B] size-[36px] rounded-full grid place-items-center">
      <LuPlus size={20} />
    </button>
  );
};

export default SelectPlusIcon;
