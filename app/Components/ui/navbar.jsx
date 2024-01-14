'use client'
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [istrue,setIstrue] = useState(false)

  const handlerState = ()=>{
    setIstrue(!istrue)
  }
  return (
    <div className=" text-white w-full py-9 items-center text-center md:flex flex-row h-10 bg-slate-900 opacity-1 justify-around rounded-b-sm">
      <h2 className=" w-full hidden md:block ml-10 ">Desarrollo FrontEnd</h2>
      <div className="flex mt-0 items-end place-self-start">
      <button type="button" className="inline-block w-full text-end items-end md:hidden py-3  bg-slate-900  p-5" onClick={handlerState}>{istrue == false ? (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>):<p>x</p>}</button>
      </div>
      
      <nav className="hidden w-full justify-end pr-5 items-center md:flex flex-row bg-slate-900 opacity-1 text-white font-bold list-none gap-5">
        <li className="p-2 md:p-0 border-b border-b-zinc-700 md:border-none">
          <Link href="/about">Sobre mi</Link>
        </li>
        <li className="p-3 md:p-0 border-b border-b-zinc-700 md:border-none">
          <Link href="#main">Portafolio</Link>
        </li>
        <li className="p-4 sm:p-0">
          <Link href="#foot">Contacto</Link>
        </li>
      </nav>
      
      {istrue?( <nav className="md:hidden w-full  mr-5 grid grid-cols-1  bg-slate-800 opacity-1 text-white font-bold list-none ">
        <li className="p-3  border-b border-b-zinc-700 hover:font-extrabold">
          <Link href="/about">Sobre mi </Link>
        </li>
        <li className="p-3  border-b border-b-zinc-700 hover:font-extrabold ">
          <Link href="#main">Portafolio</Link>
        </li>
        <li className="p-4 hover:font-extrabold ">
          <Link href="#foot">Contacto</Link>
        </li>
      </nav>):''}
    
    </div>
  );
}
