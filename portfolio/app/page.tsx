import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16 z-50 w-full ">
        <div className="about flex justify-center items-center gap-32 w-full max-w-6xl mx-auto px-4 py-32">
          <div className="w-[260px] h-[260px] rounded-full overflow-hidden">
            <Image
              src="/photo.jpg"
              alt="pablo logo"
              width={300}
              height={300}
              className="object-cover"
              priority
            />
          </div>

          <div className="text-white  p-4 max-w-xl space-y-12">
            <div className="flex flex-col gap-2">
              <span className="text-5xl text-gray-300 font-bold">
                Pablo Losada
              </span>
              <span className="text-3xl text-gray-200">
                Fullstack developer
              </span>
              <span className="text-gray-400 text">
                Construyo experiencias digitales accesibles y perfectas al píxel
                para la web.
              </span>
            </div>
            <div className="text-gray-400 text-lg mt-4 space-y-4">
              <p>
                Hola, soy Pablo Losada, desarrollador Fullstack apasionado por
                crear experiencias digitales limpias, accesibles y eficientes.
                Me especializo en transformar ideas en interfaces funcionales y
                atractivas, cuidando cada detalle visual y técnico.
              </p>
              <p>
                Mi enfoque combina diseño minimalista, rendimiento optimizado y
                buenas prácticas de desarrollo. Me encanta trabajar con
                tecnologías modernas como React, Next.js y Node.js, y siempre
                estoy buscando aprender y mejorar.
              </p>
              <p>
                Cuando no estoy programando, estudio nuevas herramientas de
                inteligencia artificial, diseño flujos de automatización y
                colaboro en proyectos creativos. Mi objetivo es aportar valor
                real a través del código y construir soluciones tecnológicas que
                marquen la diferencia.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            priority
            className=" w-full h-full object-cover"
            src="/portfolio/public/next.svg"
            alt="background image"
            width={1920}
            height={1080}
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
