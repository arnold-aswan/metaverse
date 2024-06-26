"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/index";
import { navVariants } from "@/utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
      className={`${styles.xPaddings} py-8 relative`}>
      <div className="absolute w-[50%] inset-0 gradient-01 " />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <Image
          width={24}
          height={24}
          src="/search.svg"
          alt="search"
          className="object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white ">
          METAVERSUS
        </h2>
        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
