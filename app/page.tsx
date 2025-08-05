import Image from "next/image";
import PlayFul from "./components/PlayFul";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <PlayFul text="Code in Assembly 💾" />
    </div>
  );
}
