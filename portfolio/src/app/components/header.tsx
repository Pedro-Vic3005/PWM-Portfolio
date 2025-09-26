import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full bg-[#065169] shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo / Nome */}
        <Link href="#home" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
          Bem vindo!
        </Link>

        {/* Navegação */}
        <nav>
          <ul className="flex gap-6 text-white font-medium">
            <li>
              <Link href="#home" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-300 transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#forca" className="hover:text-gray-300 transition-colors">
                Jogo da Forca
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
