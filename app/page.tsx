import PlayFul from "./components/PlayFul";

export default function Home() {
  return (
    <div className="font-sans  flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="dark:bg-white/[.06] rounded-lg p-4 ">
        <PlayFul text="Code in Assembly 💾" id="firstCheckbox" />
        <div className="w-1/2 bg-white mx-auto  h-[1px] opacity-50 my-1 rounded-2xl" />
        <PlayFul text="Present a bug as a feature 🪲" id="secondCheckbox" />
        <div className="w-1/2 bg-white mx-auto  h-[1px] opacity-50 my-1 rounded-2xl" />
        <PlayFul text="Push to prod on a Friday 🚀" id="thirdCheckbox" />
      </div>
    </div>
  );
}
