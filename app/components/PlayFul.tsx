interface IPlayFul {
  text: string;
}

export default function PlayFul({ text }: IPlayFul) {
  return (
    <div className="dark:bg-white/[.06]  flex items-center gap-3 p-2 px-4 text-base rounded-xl">
      <input type="checkbox" id="ss" className="peer sr-only bg-transparent" />
      <label
        htmlFor="ss"
        className="w-5 h-5 rounded"
        style={{
          border: "1px solid gray ",
        }}
      ></label>

      <div className="peer-checked:bg-red-600">{text}</div>
    </div>
  );
}
