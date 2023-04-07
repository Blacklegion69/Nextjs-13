export default async function(){
    const data = await fetch("http://localhost:3001/dummy");
    const res = await data.json();
  return (
    <div className="w-[120px] h-[700px] overflow-y-scroll p-2 flex justify-center items-center flex-col relative">
      {
        res.map((value)=>(
        <a href={`/card/${res.id}`} key={value.uuid}>{value.id}</a>
        ))
      }
    </div>
    )
}