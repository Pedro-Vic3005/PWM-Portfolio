import React from "react";
import Link from "next/link";

const Forca = () => {
  return (
    <section
      id="forca"
      className="w-full bg-gray-50 py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Jogo da Forca</h2>
        <p className="text-gray-600 text-lg mb-10">
          Teste suas habilidades com o clássico Jogo da Forca! Tente adivinhar as palavras antes que seja tarde. 
        </p>

        

        <div className="flex-1 flex justify-center">
          <img
            src="\image.png" // coloque a imagem do seu perfil aqui
            alt="Pedro Araújo"
            className="w-30 h-80 object-cover shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Link
        href="/Forca"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Vamos Jogar
      </Link>
        </div>
      </div>
    </section>
  );
};

export default Forca;
