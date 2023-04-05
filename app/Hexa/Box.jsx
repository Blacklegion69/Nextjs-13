import Link from "next/link";













export default function Box({a,b,bg}){
  const a1 = a.slice(1)
  const b1 = b.slice(1)
  const id = a1 + b1
  return (
    <Link href={`/${id}`}
    className="flex justify-center items-center flex-col gap-1 bg-slate-300 py-1 rounded"
    >
      <div className="w-[180px] flex justify-center gap-2 items-center relative font-bold p-1 rounded">
        <div style={{backgroundColor : a, color : b}} className="w-full text-center bg-lime-400 rounded py-2 shadow-md">{a}</div>
        <div style={{backgroundColor : b, color : a}} className="w-full text-center bg-lime-400 rounded py-2 shadow-md">{b}</div>
      </div>
      <div style={{background : bg}} className="w-full rounded font-bold p-2 text-center text-[8px] shadow-md">
      {bg}
      </div>
    </Link>
    )
}