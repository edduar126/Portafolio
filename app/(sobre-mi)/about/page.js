import Link from "next/link"
export default function SobreMi(){
  return(
    <main className="grid grid-cols-1 container mx-auto md:flex gap-10 justify-evenly">
      <div className="flex flex-col">
      <div className="flex mt-20 p-10 border-8 border-dashed list-none border-indigo-900">
        <div>
        <h3 className="font-extrabold mb-2">Habilidades</h3>
         <li>JavaScritp</li>
         <li>Mysql,Mongodb</li>
         <li>React,NextJs,Prisma,React Native</li>
         <li>Bootstrap</li>
         <li>Tailwind</li>
         <li>PHP</li>
         </div>
      </div>
      <div className="flex mt-20 p-10 gap-4 border-8 border-dashed list-none border-indigo-900">
      <div>
        <h3 className="font-extrabold mb-2">Datos de contacto</h3>
         <li>669-825-2021</li>
         <li>edduar126@hotmail.com</li>
         <li className="text-blue-400"><Link href="https://www.linkedin.com/in/edduardo-rodriguez-moreno-3660a6236" target="_blank">linkedin</Link></li>
         </div>
      </div>
      </div>
      <div className="flex mt-20 p-10 border-8 border-dashed  border-indigo-900">    
         <div className="container flex flex-col gap-4 text-justify text-wrap w-200">
          <h2 className="text-4xl text-bold">Acerca de mi</h2>
           <p className="text-justify">Soy un programador web con enfoque en javaScript, mi primer contacto con el desarrollo web fue en 2020 con mi proyecto de residencias y desde ahi me he enfocado en dominar el Mern stack , soy capaz de desarrollar aplicaciones fullstack gracias a nodeJs, Prisma y NextJs ademas de poder desarrollar aplicaciones moviles con react native, actualmente me encuentro en camino a aprender Astro y programacion web con .net .    </p>
           <p>Tengo pleno conocimiento de la Arquitectura de desarrollo MVC Modelo vista controlador, Puedo desarrollar Apis que realizan las 4 acciones del crud en nodeJs utilizando una base de datos de Msql o MongoDb, Antes de decidirme por utilizar react probe con angular y vueJs siendo de estos angular el que menos me gusto, Se validar formularios, sanitizar datos, validar cuentas por medio de correos, manejo de secciones , manejo de cookies, prevencion de ataques CSRF,Autentificacion. </p>
         </div>
      </div>
    </main>
  )
}
