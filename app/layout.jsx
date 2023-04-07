import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Link
          href="/"
          className="w-full text-center bg-cyan-600 p-2 m-2 px-4 text-slate-100 rounded font-bold fixed top-0 left-0"
        >
          Home
        </Link>
        {children}
      </body>
    </html>
  );
}
