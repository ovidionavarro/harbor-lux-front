import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0b1d3a] text-white px-8 py-4 flex justify-between items-center shadow-md">
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
          to="/yatchDetail"
          className={({ isActive }) =>
            `pb-1 border-b-2 transition-all duration-400 ${
              isActive
                ? "border-yellow-400 text-yellow-400"
                : "border-transparent hover:text-yellow-400"
            }`
          }
        >
          Ofertas
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
      <NavLink
        to="/reserva"
        className="bg-yellow-400 hover:bg-yellow-500 text-[#0b1d3a] px-5 py-2 rounded-full font-semibold transition flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 20h18l-3-8H6l-3 8z" />
          <path d="M16 10a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span>RESERVAR</span>
      </NavLink>
    </nav>
  );
}