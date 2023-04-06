"use client";
import { useState, useEffect } from "react";
import Box from "./Box.jsx";

export default function Exp() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    setX(window.innerWidth);
    setY(window.innerHeight);
  }, []);

  return (
    <div>
      <Box>innerWidth : {x}</Box>
      <Box>innerHeight : {y}</Box>
    </div>
  );
}
