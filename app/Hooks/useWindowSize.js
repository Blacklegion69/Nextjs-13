"use Client"
import { useState, useEffect} from "react";

export default function useWindowSize(){
  const [screenSize, setScreenSize] = useState(false);

  useEffect(()=>{
    const size = Window.innerWidth();
    setScreenSize(size < 760)

  },[screenSize])

  return screenSize;
}
