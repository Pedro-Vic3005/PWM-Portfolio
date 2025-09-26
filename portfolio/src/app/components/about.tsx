import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gray-50 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagem / Avatar */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="\WhatsApp Image 2025-08-21 at 20.34.33.jpeg" // coloque a imagem do seu perfil aqui
            alt="Pedro Araújo"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
          <p className="text-gray-600 text-lg mb-4">
            Sou estudante de Ciência da Computação, me escontro no 5º período do curso.
            Tabem trabalho como Testes no Projeto CIn - Motorola na Universidade Federal de Pernambuco.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Meu objetivo é buscar conhecimento, expandir meus horizontes e deixar no mundo um pouco da minha marca.
          </p>
          <Link
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CNvvJFXwClSGjLrZdVMcQnlhwGrQsNhNZQgmGgcZdfZnhSLznRXZkXNvGKjvSfDLQhpwfxVsltVVPqjbJkVJxhstkScnvDCLvmBlnNBHSjTHftQjcXCHRLRvMRdZBzzRMKVBvjlNnWvjBpVgfpDqfBTDNr"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
