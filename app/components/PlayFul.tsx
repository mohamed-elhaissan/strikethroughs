"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface IPlayFul {
  text: string;
  id: string;
}

export default function PlayFul({ text, id }: IPlayFul) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-3 p-2 px-4 text-base rounded-xl">
      <input type="checkbox" id={id} className="peer sr-only" />
      <label
        onClick={() => setIsChecked(!isChecked)}
        htmlFor={id}
        className="w-5 h-5 rounded relative cursor-pointer overflow-hidden peer-checked:[&>span]:opacity-100 peer-checked:[&>svg]:scale-85"
        style={{
          border: "1px solid gray",
        }}
      >
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          data-slot="checkbox-indicator"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="size-3.5 absolute inset-0 z-30 scale-0 w-full h-full pointer-events-none transition-all duration-150 ease-in-out"
          data-state="checked"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            opacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
            stroke="oklch(0.205 0 0)"
            fill="none"
            strokeWidth="3.5px"
          />
        </svg>
        <span className="absolute bg-[var(--foreground)] inset-0 w-full h-full opacity-0 pointer-events-none z-10" />
      </label>

      <div className="relative ">
        <span className=" text-nowrap">{text}</span>
        <svg
          width="340"
          height="32"
          viewBox="0 0 340 32"
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-full h-10"
        >
          <motion.path
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: isChecked ? 1 : 0,
              opacity: isChecked ? 1 : 0,
            }}
            transition={{
              duration: 1.25,
              ease: "easeInOut",
            }}
            d="M 10 16.91 s 79.8 -11.36 98.1 -11.34 c 22.2 0.02 -47.82 14.25 -33.39 22.02 c 12.61 6.77 124.18 -27.98 133.31 -17.28 c 7.52 8.38 -26.8 20.02 4.61 22.05 c 24.55 1.93 113.37 -20.36 113.37 -20.36"
            vectorEffect="non-scaling-stroke"
            strokeWidth="2px"
            strokeLinecap="round"
            strokeMiterlimit="10"
            fill="none"
            className="stroke-neutral-900 dark:stroke-[#facc15]"
            opacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
            stroke="oklch(0.97 0 0)"
          />
        </svg>
      </div>
    </div>
  );
}
