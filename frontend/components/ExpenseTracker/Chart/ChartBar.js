import React from "react";

const ChartBar = (props) => {
  let barFilledHeight = "0%";

  if (props.maxValue > 0) {
    barFilledHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="flex flex-col gap-1 items-center">
      <div className=" mt-2 h-[8rem] w-[12px] bg-[#baaaf0] rounded-full shadow-md relative">
        <div
          style={{ height: barFilledHeight }}
          className="bg-[#3e21ae] w-full rounded-full absolute bottom-0"
        ></div>
      </div>
      <div className="text-xs font-bold">{props.label}</div>
    </div>
  );
};

export default ChartBar;
