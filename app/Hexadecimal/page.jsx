export default function Hexadecimal(){
  const digit = [..."0123456789abcdef"];
  
  const generateCode =()=> {
    let code = "#";
    for(let i=0; i<6; i++) {
      const len = digit.length;
      code += digit[Math.floor(Math.random()*len)]
    }
    return code;
  }
  
  const generateData =()=> {
    let x = [];
    for(let i=0; i<5; i++) {
      x.push(generateCode())
    }
    return x;
  }
  
  console.log(generateData())
  
  return (
    <div className="w-full h-screen flex justify-center items-center flex-wrap">
    {generateData()?.map((val,i)=>(
      <div 
        key={i}
        style={{backgroundColor : val}} 
        className="p-2 m-2 rounded"
      >
      {val}
      </div>
    ))}
    </div>
    )
}
