import React from "react";
import styles from "@/styles";

const StartSteps = ({ number, text }) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} size-[70px] rounded-[24px] bg-[#323f5d] `}>
        <p className="font-bold text-white text-[20px] ">0{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px] ">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;
