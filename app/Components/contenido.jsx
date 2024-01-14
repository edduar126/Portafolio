import Link from "next/link";

export function Contenido() {
  return (
    <section id="main" className=" flex justify-center items-center mt-20">
      <div className=" grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden">
            <Link
              href="https://astonishing-genie-0c73a4.netlify.app/"
              target="_blank"
            >
                <img
                src="/tienda.png"
                alt="imagen-tienda"
                width={300}
                height={400}
              />
            </Link>
            </div>
            <p className="font-extrabold">Simulador de compras</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden">
            <Link
              href="https://graceful-salamander-edd483.netlify.app/"
              target="_blank"
            >
            <img
                src="/form.png"
                alt="imagen-tienda"
                width={300}
                height={400}
              />
            </Link>
            </div>
            <p className="font-extrabold">Validacion form</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden">
            <Link
            href="https://stately-torte-ddf675.netlify.app/"
            target="_blank"
          >
            <img
                src="/datos.png"
                alt="imagen-tienda"
                width={300}
                height={400}
              />
          </Link>
            </div>
           <p className="font-extrabold">Filtrado de datos</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden">
            <Link
            href="https://jovial-taiyaki-3bc25b.netlify.app/"
            target="_blank"
          >
            <img
                src="/bag.png"
                alt="imagen-tienda"
                width={300}
                height={400}
              />
          </Link>
            </div>
            <p className="font-extrabold">Control presupuesto</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden">
            <Link
            href="https://incomparable-douhua-409d1e.netlify.app/"
            target="_blank"
          >
            <img
                src="/medical.png"
                alt="imagen-tienda"
                width={300}
                height={400}
              />
          </Link>
            </div>
             <p className="font-extrabold">Administrador citas</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden">
            <Link
            href="https://silver-daifuku-8c1234.netlify.app/"
            target="_blank"
          >
            <img
                src="/laptop.png"
                alt="imagen-tienda"
                width={300}
                height={400}
              />
          </Link>
            </div>
            <p className="font-extrabold">Buscaador de bebidas</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden">
            <Link
            href="https://subtle-nougat-fda827.netlify.app/"
            target="_blank"
          >
           <img
                src="/telescope.png"
                alt="imagen-tienda"
                width={300}
                height={400}
              />
          </Link>
            </div>
           <p className="font-extrabold">Api clima</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden">
            <Link
            href="https://helpful-bunny-e51456.netlify.app/"
            target="_blank"
          >
           <img
                src="/photo.png"
                alt="imagen-tienda"
                width={300}
                height={400}
              />
          </Link>
            </div>
           <p className="font-extrabold">Buscador de imagenes</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden">
            <Link
            href="https://gorgeous-florentine-47e219.netlify.app/"
            target="_blank"
          >
               <img
                src="/location.png"
                alt="imagen-tienda"
                width={300}
                height={400}
              />
          </Link>
            </div>
           <p className="font-extrabold">Buscador de recetas</p>
          </div>
        </div>

        
      </div>
    </section>
  );
}