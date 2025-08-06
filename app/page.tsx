import Link from "next/link";
import PlayFul from "./components/PlayFul";

export default function Home() {
  return (
    <div className="font-sans  tracking-[-.01em]  flex flex-col items-center justify-evenly min-h-screen p-8 pb-20  sm:p-20">
      <div>
        <h1 className="text-7xl font-medium">Playful Todolist</h1>
        <p className="opacity-50 my-2">
          A playful todolist component with animated wavy strikethroughs for
          each completed task.
        </p>
        <span className="text-gray-400 ">
          Made by
          <Link href={""} className="text-[#0073c5]">
            {" "}
            arhamkhnz
          </Link>
        </span>
      </div>
      <div></div>
      <div className="w-full">
        <div className="flex gap-3 mb-4">
          <span></span>
          <button className="py-2 w-25 h-10 cursor-pointer px-4 bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-md">
            Preview
          </button>
          <button className="py-2 w-25 h-10 cursor-pointer px-4 bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-md">
            Code
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
