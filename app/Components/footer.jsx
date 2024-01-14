export function Footer() {
  return (
    <footer
      id="foot"
      className="grid grid-cols-1 text-center md:flex justify-around items-center mt-20 mb-0 bg-slate-900"
    >
      <div className="mt-10 mb-10">
        <div className="flex justify-center gap-10">
          <p>
            <img src="/brand-javascript.svg" alt="logo-js" />
            <span></span>{" "}
          </p>

          <p>
            <img src="/brand-nodejs.svg" alt="logo-node" />
            <span></span>{" "}
          </p>

          <p>
            {" "}
            <img src="/brand-php.svg" alt="logo-php" />
            <span></span>
          </p>
        </div>
        <div className="flex justify-center gap-10">
          <p>
            <img src="/brand-react.svg" alt="logo-react" /> <span></span>
          </p>

          <p>
            <img src="/brand-tailwind.svg" alt="logo-tailwind" /> <span></span>
          </p>

          <p>
            <img src="/brand-bootstrap.svg" alt="logo-bootstrap" />{" "}
            <span></span>
          </p>

          <p>
            <img src="/file-type-sql.svg" alt="logo-sql" />
            <span></span>{" "}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 text-center md:flex gap-10 mt-10 mb-10">
        <div className="text-white">
          <div>
            <p className="font-bold text-3xl mb-5">contacto</p>
          </div>
          <li className="list-none"><p className="font-extrabold">Telefono: <span className="font-normal">667-825-2021</span></p></li>
          <li className="list-none"><p className="font-extrabold">Correo: <span  className="font-normal">edduar126@hotmail.com</span></p></li>
          <li className="list-none"><p className="font-extrabold">Gmail: <span  className="font-normal">edduar126@gmail.com</span></p></li>
        </div>
      </div>
    </footer>
  );
}
