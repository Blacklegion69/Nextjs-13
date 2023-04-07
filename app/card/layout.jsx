import Lists from "./Lists.jsx";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <head />
      <body>
        <div className="flex justify-between items-center">
          <Lists />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
