"use client"
import { useState, useEffect } from "react";
import Box from "./Box.jsx";




















export default function Hexa(){
  const [colors, setColors] = useState([]);
  const generateHexadecimalColor =()=> {
    let one = "#";
    let two = "#";
    for(let i=0; i<6; i++) {
      let randomNumber = Math.floor(Math.random()*16);
      one += [..."0123456789abcdef"][randomNumber];
      two += [..."fedcba9876543210"][randomNumber];
    }
    return {
      one,
      two,
      bg : `-webkit-linear-gradient(left,${one},${two})`
    }
  }
  
  const generateHexadecimalColorArray =()=> {
   setColors([]);
    let final = [];
    for(let i=0; i<20; i++) {
      final.push(generateHexadecimalColor())
    }
   setColors([...final])
    return final;
  }
  
  
  useEffect(()=>{
    generateHexadecimalColorArray();
  },[])
  
  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-2 relative">
      {
        colors.map((val)=>(
        <Box
          a = {val.one}
          b = {val.two}
          bg = {val.bg}
        />
        ))
      }
    </div>
    )
}