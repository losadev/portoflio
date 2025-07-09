import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 flex items-center justify-between px-32 bg-[rgba(10,17,40,0.6)] backdrop-blur-md">
      <p className="text-[var(--text-color)] uppercase font-semibold">
        Pablo Losada
      </p>
      <div className="flex gap-10 text-[var(--text-color)] justify-center items-center">
        <Link href="/home" className="flex gap-2 hover:scale-110 transition">
          <span className="text-[#1282A2] font-semibold">01.</span>
          Inicio
        </Link>
        <Link href="/skills" className="flex gap-2 hover:scale-110 transition">
          <span className="text-[#1282A2] font-semibold">02.</span>
          Skills
        </Link>
        <Link href="/about" className="flex gap-2 hover:scale-110 transition">
          <span className="text-[#1282A2] font-semibold">03.</span>
          Sobre mí
        </Link>
        <Link
          href="/projects"
          className="flex gap-2 hover:scale-110 transition"
        >
          <span className="text-[#1282A2] font-semibold">04.</span>
          Proyectos
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <a href={"https://github.com/losadev"} rel="noopener noreferrer">
          <FaGithub
            className="w-6 h-6 text-[var(--text-color)]"
            target="_blank"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-losada-ures-568453320/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 text-[var(--text-color)]" />
        </a>
        <button className="ml-8 border-2 px-6 py-1 border-[#1282A2] rounded text-[#1282A2] hover:text-[#9d12a2] cursor-pointer transition hover:bg-[3001F54]">
          Descargar CV
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
