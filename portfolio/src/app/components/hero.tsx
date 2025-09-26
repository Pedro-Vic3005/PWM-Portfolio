import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4"
    >
      {/* Nome */}
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        Olá, sou Pedro Victor Gomes de Araújo
      </h1>

      {/* Profissão */}
      <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
        Testador de Softwares | Estudante de Ciência da Computação
      </h2>

      {/* Descrição */}
      <p className="text-gray-500 max-w-xl mb-6">
        &quot;Acredite na grandeza de pequenos começos&quot;
      </p>

      {/* Botão de contato */}
      <Link
        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CNvvJFXwClSGjLrZdVMcQnlhwGrQsNhNZQgmGgcZdfZnhSLznRXZkXNvGKjvSfDLQhpwfxVsltVVPqjbJkVJxhstkScnvDCLvmBlnNBHSjTHftQjcXCHRLRvMRdZBzzRMKVBvjlNnWvjBpVgfpDqfBTDNr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Entre em Contato
      </Link>
    </section>
  );
};

export default Hero;
