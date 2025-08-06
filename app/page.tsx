"use client";
import Link from "next/link";
import PlayFul from "./components/PlayFul";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Home() {
  const [isCode, setIsCode] = useState<boolean>(false);
  return (
    <div className="font-sans w-full xl:w-1/2 mx-auto  tracking-[-.01em]  flex flex-col items-center justify-evenly min-h-screen p-8 pb-20  sm:p-20">
      <div>
        <h1 className="text-7xl font-medium">Playful Todolist</h1>
        <p className="opacity-50 my-2">
          A playful todolist component with animated wavy strikethroughs for
          each completed task.
        </p>
        <span className="font-mono text-gray-400 block">
          Made by
          <Link href={""} className="text-[#0073c5]">
            {" "}
            Mohamed elhaissan
          </Link>
        </span>
        <Link
          href={""}
          className=" items-center inline-flex text-xs bg-white/[0.06] mt-4 gap-5 py-1 px-4 rounded-lg font-mono"
        >
          Edit in Github{" "}
        </Link>
      </div>
      <div className="w-full">
        <div className="inline-flex gap-3 mb-4 relative ">
          <motion.span
            initial={{
              x: 0,
            }}
            animate={{
              x: isCode ? "100%" : 0,
            }}
            className="inline-block w-25 h-10 bg-white/[0.06] rounded-lg absolute left-0 top-0 z-0"
          ></motion.span>
          <button
            style={{
              color: !isCode ? "white" : "gray",
            }}
            onClick={() => setIsCode(false)}
            className="py w-1/2 h-10 cursor-pointer px-4    relative z-20  rounded-md"
          >
            Preview
          </button>
        </div>
        <div
          style={{
            border: "1px solid #262626",
          }}
          className=" rounded-lg p-20 w-full flex items-center justify-center"
        >
          <div className="dark:bg-white/[.06]  rounded-lg p-4 ">
            <PlayFul text="Code in Assembly 💾" id="firstCheckbox" />
            <div className="w-1/2 bg-white mx-auto  h-[1px] opacity-50 my-1 rounded-2xl" />
            <PlayFul text="Present a bug as a feature 🪲" id="secondCheckbox" />
            <div className="w-1/2 bg-white mx-auto  h-[1px] opacity-50 my-1 rounded-2xl" />
            <PlayFul text="Push to prod on a Friday 🚀" id="thirdCheckbox" />
          </div>
        </div>
      </div>
    </div>
  );
}
