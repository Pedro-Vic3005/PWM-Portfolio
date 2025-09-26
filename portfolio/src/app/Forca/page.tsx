'use client'
import React, { useState } from "react";
import Link from "next/link"; // import para o botão de voltar

const palavras = [
  "REACT", "JAVASCRIPT", "PORTFOLIO", "NEXTJS", "FRONTEND",
  "BACKEND", "COMPONENTE", "ESTADO", "PROPS", "FUNCIONAL",
  "CLASSE", "HOOKS", "REDUX", "CONTEXT", "NODEJS",
  "EXPRESS", "MONGODB", "SQL", "GITHUB", "VSCODE",
  "TAILWIND", "CSS", "HTML", "TYPESCRIPT", "WEBPACK",
  "BABEL", "ESLINT", "JEST", "CYPRESS", "API",
  "AJAX", "PROMISE", "ASYNC", "AWAIT", "DOM"
];

const getPalavraAleatoria = () => {
  const index = Math.floor(Math.random() * palavras.length);
  return palavras[index];
};

const ForcaGame = () => {
  const [palavra, setPalavra] = useState(getPalavraAleatoria());
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [letraInput, setLetraInput] = useState("");
  const maxErros = 6;

  const handleLetra = (letra) => {
    letra = letra.toUpperCase();
    if (!letrasUsadas.includes(letra) && letra.match(/[A-Z]/)) {
      setLetrasUsadas([...letrasUsadas, letra]);
      if (!palavra.includes(letra)) {
        setErros(erros + 1);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLetra(letraInput);
    setLetraInput("");
  };

  const renderPalavra = () =>
    palavra.split("").map((letra, index) => (
      <span key={index} className="text-2xl font-bold w-8 inline-block mx-1">
        {letrasUsadas.includes(letra) ? letra : "_"}
      </span>
    ));

  const letrasAlfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const jogoFinalizado =
    erros >= maxErros || palavra.split("").every((l) => letrasUsadas.includes(l));

  const letrasCorretas = letrasUsadas.filter((l) => palavra.includes(l));
  const letrasIncorretas = letrasUsadas.filter((l) => !palavra.includes(l));

  const reiniciarJogo = () => {
    setErros(0);
    setLetrasUsadas([]);
    setLetraInput("");
    setPalavra(getPalavraAleatoria());
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-6">Jogo da Forca</h1>
      <p className="mb-4">Erros: {erros} / {maxErros}</p>

      {/* Boneco da forca */}
      <div className="forca-container mb-6">
        <div className="forca-base"></div>
        <div className="forca-poste-vertical"></div>
        <div className="forca-poste-horizontal"></div>
        <div className="forca-corda"></div>

        <div className={`forca-cabeca ${erros > 0 ? "show" : ""}`}></div>
        <div className={`forca-corpo ${erros > 1 ? "show" : ""}`}></div>
        <div className={`forca-braco-esquerdo ${erros > 2 ? "show" : ""}`}></div>
        <div className={`forca-braco-direito ${erros > 3 ? "show" : ""}`}></div>
        <div className={`forca-perna-esquerda ${erros > 4 ? "show" : ""}`}></div>
        <div className={`forca-perna-direita ${erros > 5 ? "show" : ""}`}></div>
      </div>

      {/* Palavra com underscores */}
      <div className="mb-6">{renderPalavra()}</div>

      {/* Tentativas anteriores */}
      <div className="mb-6 text-center">
        <p className="mb-2 font-semibold">Tentativas Anteriores:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {letrasCorretas.map((l) => (
            <span key={l} className="text-green-600 font-bold text-lg">{l}</span>
          ))}
          {letrasIncorretas.map((l) => (
            <span key={l} className="text-red-600 font-bold text-lg">{l}</span>
          ))}
        </div>
      </div>

      {/* Input de letra */}
      {!jogoFinalizado && (
        <form onSubmit={handleSubmit} className="mb-6 flex gap-2 justify-center">
          <input
            type="text"
            maxLength={1}
            value={letraInput}
            onChange={(e) => setLetraInput(e.target.value.toUpperCase())}
            className="border p-2 rounded-md w-16 text-center text-xl font-bold"
            placeholder="A"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enviar
          </button>
        </form>
      )}

      {/* Teclado virtual */}
      {!jogoFinalizado && (
        <div className="grid grid-cols-7 gap-2 max-w-md mb-6">
          {letrasAlfabeto.map((letra) => (
            <button
              key={letra}
              onClick={() => handleLetra(letra)}
              disabled={letrasUsadas.includes(letra)}
              className={`p-2 rounded-md font-bold ${
                letrasUsadas.includes(letra)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              }`}
            >
              {letra}
            </button>
          ))}
        </div>
      )}

      {/* Mensagem de fim de jogo */}
      {jogoFinalizado && (
        <div className="text-center">
          {erros >= maxErros ? (
            <p className="text-red-600 text-xl font-semibold mb-4">Você perdeu! Palavra: {palavra}</p>
          ) : (
            <p className="text-green-600 text-xl font-semibold mb-4">Parabéns! Você ganhou!</p>
          )}
          <button
            onClick={reiniciarJogo}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
          >
            Jogar Novamente
          </button>
        </div>
      )}

      {/* Botão voltar ao portfólio */}
      <div className="mt-6">
        <Link href="/" passHref>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Voltar ao Portfólio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ForcaGame;
