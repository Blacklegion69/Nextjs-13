import Block from "./Block.jsx"

export default function Generate(){
  const data = [..."😅👇😂🥲👙👙😑😒😒🙂🔆😒☝️😊👇😊🔆😒👇😊📛🔞🌚💩🌚💩💩🤔😎🖊🖊😀🤬🤥☝️😂👇😅📛👨‍💻🥀😑👙👙👇😶‍🌫️😶‍🌫️👨‍💻😶‍🌫️⭐️🥀😒😒☝️😂👆😒👆😒😀🥰🥰💝🤥👇🤥⭐️👙😒😊👆😶‍🌫️📛⭐️☝️🥰🖕😒🤲😄💀👙🥲😒😊🥲😊🤲😄🥰☝️🥰🙂😄☝️😎📛😊😊☝️⭐️⭐️🙂😄😀💩😇😇😀🔆🙂💀💝🔥💝👆🌟⚘️😊"]
  return (
    <>
    <div className="w-full h-screen flex justify-center items-center flex-wrap p-2 m-2">
      {
        data.map((value,index)=>{
          return (
            <div key={index} className="w-10 h-10 grid grid-cols-2 justify-center items-center m-2 relative bg-slate-100">
               <Block value={value} />           
            </div>
          )
        })
      }
    </div>
    </>
    )
}