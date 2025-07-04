export default function Footer() {
  return (
    <footer className="bg-[#0b1d3a] text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} TuEmpresaYates. Todos los derechos reservados.</p>
        
      </div>
    </footer>
  );
}
