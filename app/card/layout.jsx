import List from "./List.jsx";
import head from "../head.jsx";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="w-full text-slate-900 h-screen flex justify-center items-center relative">
        <List />
        {children}
      </body>
    </html>
  );
}
