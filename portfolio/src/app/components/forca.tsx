import React from "react";
import Link from "next/link";
import Image from "next/image";

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

        {/* Imagem ilustrativa */}
        <div className="flex justify-center mb-8">
          <Image
            src="/image.png" // coloque a imagem em /public/image.png
            alt="Ilustração do Jogo da Forca"
            width={200}
            height={320}
            className="object-cover shadow-lg"
            priority
          />
        </div>

        {/* Botão */}
        <div className="flex justify-center">
          <Link
            href="/Forca" // cuidado com maiúsculas/minúsculas
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
