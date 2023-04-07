export default async function id({ params }) {
  const data = await fetch("http://localhost:3001/data", {});
  const res = await data.json();

  return (
    <div>
      <h1>{res[params.id]?.sprites?.normal}</h1>
    </div>
  );
}

const getInitialProps = (ee) => {
  console.log(ee);
};
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
