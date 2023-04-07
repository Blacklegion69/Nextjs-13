export default async function id({ params }) {
  const data = await fetch("http://localhost:3001/data", {
    cache: "force-cache",
  });
  const res = await data.json();
  return (
    <div>
      <h1 className="bg-cyan-200 p-2 rounded flex justify-center items-center flex-wrap">
        <p className="bg-cyan-300 p-1 rounded inline">sprires.normal :</p>{" "}
        {res[params.id]?.sprites?.normal}
      </h1>
      <h1 className="bg-cyan-200 p-2 rounded flex justify-center items-center flex-wrap">
        <p className="bg-cyan-300 p-1 rounded inline">params.id :</p>{" "}
        {params.id}
      </h1>
    </div>
  );
}

export async function generateStaticParams() {
  const data = await fetch("http://localhost:3001/data", {
    cache: "force-cache",
  });
  const res = await data.json();
  return res.map((todo) => ({
    id: todo.national_number,
  }));
}

/*
national_number: '009',
    evolution: null,
    sprites: {
      normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png',
      large: 'https://img.pokemondb.net/artwork/blastoise.jpg',
      animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif'
    },
    name: 'Blastoise',
    type: [ 'Water' ],
    total: 530,
    hp: 79,
    attack: 83,
    defense: 100,
    sp_atk: 85,
    sp_def: 105,
    speed: 78
*/
