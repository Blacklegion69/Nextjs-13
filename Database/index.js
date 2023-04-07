async function data() {
  const datas = await fetch("http://localhost:3001/dummy");
  const res = await datas.json();
  console.log(res);
}

data();
