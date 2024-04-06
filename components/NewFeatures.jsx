import React from "react";
import styles from "@/styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] ">
      <div
        className={`${styles.flexCenter} size-[70px] rounded-[24px] bg-[#323f5d] `}>
        <img
          src={imgUrl}
          alt="icon"
          lazy
          className="size-1/2 object-contain "
        />
      </div>
      <h1 className="mt-[26px] font-bold tex-[24px] leading-[30px] text-white ">
        Title {title}
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px] ">
        {subtitle}
      </p>
    </div>
  );
};

export default NewFeatures;
