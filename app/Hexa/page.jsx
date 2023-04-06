"use client";
import { useState, useEffect } from "react";
import Box from "./Box.jsx";

export default function Hexa() {
  const [colors, setColors] = useState([]);
  const generateHexadecimalColor = () => {
    let one = "#";
    let final = "";
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * 16);
      one += [..."0123456789abcdef"][randomNumber];
      final += [..."fedcba9876543210"][randomNumber];
    }

    let job = [...final].reverse();
    let two = "#";
    for (let i = 0; i < job.length; i++) {
      two += job[i];
    }

    return {
      one,
      two,
      bg: `-webkit-linear-gradient(left,${one},${two})`,
    };
  };

  const generateHexadecimalColorArray = () => {
    setColors([]);
    let final = [];
    for (let i = 0; i < 120; i++) {
      final.push(generateHexadecimalColor());
    }
    setColors([...final]);
    return final;
  };

  useEffect(() => {
    generateHexadecimalColorArray();
  }, []);

  return (
    <>
      <button
        onClick={generateHexadecimalColorArray}
        className="w-[100px] text-center bg-cyan-600 p-2 m-2 px-4 text-slate-100 rounded font-bold active:scale(0.9)"
      >
        Random
      </button>
      <div className="w-full flex justify-center items-center flex-wrap gap-2 relative">
        {colors.map((val) => (
          <Box a={val.one} b={val.two} bg={val.bg} />
        ))}
      </div>
    </>
  );
}
