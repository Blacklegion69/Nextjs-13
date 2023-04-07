import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-[100px] text-center bg-cyan-600 p-2 m-2 px-4 text-slate-100 rounded font-bold active:scale(0.9)">
        Home
      </div>
      <Link
        className="w-[100px] text-center bg-cyan-600 p-2 m-2 px-4 text-slate-100 rounded font-bold active:scale(0.9)"
        href="/card"
      >
        Card
      </Link>
      <Link
        className="w-[100px] text-center bg-cyan-600 p-2 m-2 px-4 text-slate-100 rounded font-bold active:scale(0.9)"
        href="/Hexa"
      >
        Hexa
      </Link>
    </>
  );
}
