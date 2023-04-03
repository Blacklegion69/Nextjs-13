// 'use client'
// import { useState } from "react";



export default function Hexadecimal(){
  
  const generate =()=> {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
  }
  return (
    <div>
      {generate()}
    </div>
    )
}