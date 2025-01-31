import React from "react";

const SelectSize = ({ size, setSize }) => {
  return (
    <div className="select-size-wrap">
      <button
        onClick={() => setSize("S")}
        className={size === "S" ? "bg-[#262626]" : "bg-[#525252]"}
      >
        S
      </button>
      <button
        onClick={() => setSize("M")}
        className={size === "M" ? "bg-[#262626]" : "bg-[#525252]"}
      >
        M
      </button>
      <button
        onClick={() => setSize("L")}
        className={size === "L" ? "bg-[#262626]" : "bg-[#525252]"}
      >
        L
      </button>
    </div>
  );
};

export default SelectSize;
