import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0b1d3a] text-white px-8 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex space-x-8 text-lg font-medium">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `pb-1 border-b-2 transition-all duration-400 ${
              isActive
                ? "border-yellow-400 text-yellow-400"
                : "border-transparent hover:text-yellow-400"
            }`
          }
        >
          Main
        </NavLink>
        <NavLink
          to="/yacht"
          className={({ isActive }) =>
            `pb-1 border-b-2 transition-all duration-400 ${
              isActive
                ? "border-yellow-400 text-yellow-400"
                : "border-transparent hover:text-yellow-400"
            }`
          }
        >
          Yacht
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `pb-1 border-b-2 transition-all duration-400 ${
              isActive
                ? "border-yellow-400 text-yellow-400"
                : "border-transparent hover:text-yellow-400"
            }`
          }
        >
          About Us
        </NavLink>
      </div>

       <div className="flex items-center space-x-3">
        {/* Puedes reemplazar el SVG por otro logo si tienes uno propio */}
        <svg
          className="w-10 h-10 text-yellow-400"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Yate estilizado */}
          <path d="M6 36C18 30 30 30 42 36" stroke="#FFD600" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 10L30 26H18L24 10Z" fill="#FFD600" stroke="#FFD600" strokeWidth="2"/>
          <path d="M12 32C20 28 28 28 36 32" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-2xl font-bold text-yellow-400 tracking-wide select-none">Harbor Lux</span>
      </div>
    </nav>
  );
}