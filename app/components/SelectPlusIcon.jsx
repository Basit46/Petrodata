import React from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { useGlobalContext } from "../context/GlobalContext";

const SelectPlusIcon = ({ id, size }) => {
  const { handleSelectWidget, handleRemoveWidget, isAlreadySelected } =
    useGlobalContext();

  const selectState = isAlreadySelected({ id, size });

  const handleClick = () => {
    if (selectState) {
      handleRemoveWidget(id);
    } else {
      handleSelectWidget({ id, size });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 origin-bottom-right duration-300 absolute top-[-18px] left-[-18px] bg-[#00897B] size-[36px] rounded-full grid place-items-center"
    >
      {selectState ? <LuMinus size={20} /> : <LuPlus size={20} />}
    </button>
  );
};

export default SelectPlusIcon;
