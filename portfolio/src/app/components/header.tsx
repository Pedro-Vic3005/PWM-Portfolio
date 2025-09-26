import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full bg-[#065169] shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Nome */}
        <div className="text-xl font-bold text-white">Bem vindo!</div>

        {/* Navegação */}
        <nav>
          <ul className="flex gap-6 text-white font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-gray-300 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-300 transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#forca"
                className="hover:text-gray-300 transition-colors"
              >
                Jogo da Forca
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
