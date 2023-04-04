export default function Generate(){
  const data = [..."😅👇😂🥲👙👙😑😒😒🙂🔆😒☝️😊👇😊🔆😒👇😊📛🔞🌚💩🌚💩💩🤔😎🖊🖊😀🤬🤥☝️😂👇😅📛👨‍💻🥀😑👙👙👇😶‍🌫️😶‍🌫️👨‍💻😶‍🌫️⭐️🥀😒😒☝️😂👆😒👆😒😀🥰🥰💝🤥👇🤥⭐️👙😒😊👆😶‍🌫️📛⭐️☝️🥰🖕😒🤲😄💀👙🥲😒😊🥲😊🤲😄🥰☝️🥰🙂😄☝️😎📛😊😊☝️⭐️⭐️🙂😄😀💩😇😇😀🔆🙂💀💝🔥💝👆🌟⚘️😊"]
  return (
    <>
    <div className="w-full h-screen flex justify-center items-center flex-wrap p-2 m-2">
      {
        data.map((value,index)=>{
          return (
            <div key={index} className="w-10 h-10 grid grid-cols-2 justify-center items-center m-2 relative bg-slate-100">
              <div className="w-4 h-4 border border-slate-900 flex justify-center items-center relative rounded bg-slate-100 text-slate-900">{value}</div>
              <div className="w-4 h-4 border border-slate-900 flex justify-center items-center relative rounded bg-slate-100 text-slate-900">{value}</div>
              <div className="w-4 h-4 border border-slate-900 flex justify-center items-center relative rounded bg-slate-100 text-slate-900">{value}</div>
              <div className="w-4 h-4 border border-slate-900 flex justify-center items-center relative rounded bg-slate-100 text-slate-900">{value}</div>
            </div>
          )
        })
      }
    </div>
    </>
    )
}