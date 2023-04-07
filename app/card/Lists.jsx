import Link from "next/link";

export default async function Lists() {
  const data = await fetch("http://localhost:3001/data");
  const res = await data.json();

  return (
    <div className="top-10 absolute left-2 flex justify-center items-center flex-col text-slate-100 bg-slate-800">
      {res.map((val) => {
        const id = crypto.randomUUID();
        return (
          <Link key={id} href={`/card/${val.national_number}`}>
            Card id : <strong>{val.national_number}</strong>
          </Link>
        );
      })}
    </div>
  );
}
