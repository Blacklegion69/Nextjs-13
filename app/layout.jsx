import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      {children}
      </body>
    </html>
  )
}
