import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#065169] text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} PVGA3005. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 mt-3">
          <a
            href="https://www.instagram.com/pvga3005/?hl=en" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-victor-271400289/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Pedro-Vic3005" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
