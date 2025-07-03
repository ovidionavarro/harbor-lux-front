export default function Footer() {
  return (
    <footer className="bg-[#0b1d3a] text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} TuEmpresaYates. Todos los derechos reservados.</p>
        
        <div className="flex space-x-5 text-xl">
          <a href="https://facebook.com/tuempresa" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/tuempresa" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/tuempresa" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
