import Link from "next/link"

export function NavbarAbout() {
  return (
    <div className="text-white w-full py-9 grid grid-cols-1 items-center text-center md:flex flex-row h-10 bg-slate-900 opacity-1 justify-around rounded-b-sm">
      <h2 className=" w-full hidden md:block ml-10 font-bold ">Desarrollo FrontEnd</h2>
       <nav className="w-full mt-0 mr-5 grid grid-cols-1  justify-end items-center md:flex flex-row bg-slate-900 opacity-1 text-white font-bold list-none gap-5">
        
         <li className="mt-0 p-3 md:p-0 border-b border-b-zinc-700 md:border-none"><Link href='/'>Volver a inicio</Link></li>
      
       </nav>
      </div>
  )
}
