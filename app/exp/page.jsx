export default async function Exa() {
  const data = await fetch("http://localhost:3001/data", {
    cache: "force-cache",
  });
  const res = await data.json();
  return (
    <div>
      {res.map((val, i) => {
        return (
          <div key={i}>
            <div>{val.evolution?.name}</div>
            <div>{val.sprited?.normal}</div>
            <div>{val.sprited?.large}</div>
            <div>{val.sprited?.animated}</div>
            <div>{val?.name}</div>
            <div>{val?.type[0]}</div>
            <div>{val?.total}</div>
            <div>{val?.hp}</div>
          </div>
        );
      })}
    </div>
  );
}
