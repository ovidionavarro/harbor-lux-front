import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-start px-12"
        style={{
          backgroundImage: "url('/yacht-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white max-w-2xl ml-4 md:ml-16  -mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Vive una experiencia <br /> de lujo en alta mar
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Embárcate en una experiencia exclusiva con nuestros yates de primera clase.
          </p>
          <Link
            to="/yacht"
            className="bg-yellow-400 hover:bg-yellow-500 text-[#0b1d3a] font-semibold px-6 py-3 rounded-md transition"
          >
            Reservar ahora
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-[#0b1d3a] mb-12">Fecturajes</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div>
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-semibold text-lg mb-2">Seguridad y Comodidad</h3>
            <p className="text-gray-600">
              Yates equipados con las mejores medidas de seguridad y confort.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="text-5xl mb-4">💎</div>
            <h3 className="font-semibold text-lg mb-2">Experiencia de Lujo</h3>
            <p className="text-gray-600">
              Disfruta del lujo y la elegancia a bordo de nuestros exclusivos yates.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="text-5xl mb-4">🧢</div>
            <h3 className="font-semibold text-lg mb-2">Personal Calificado</h3>
            <p className="text-gray-600">
              Tripulación profesional a tu servicio para una travesía inolvidable.
            </p>
          </div>
        </div>
      </section>
      {/* Social Media Section */}

{/* Contact / Ticket Section */}
{/* Contacto y Redes Sociales juntos */}
<section className="py-12 px-8 bg-white">
  <div className="flex flex-col md:flex-row md:items-start md:justify-center md:gap-16">
    {/* Formulario de contacto */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h2 className="text-2xl font-bold text-[#0b1d3a] text-center md:text-left mb-6">¿Tienes preguntas? Contáctanos</h2>
      <form
        action="mailto:info@tuempresa.com"
        method="POST"
        encType="text/plain"
        className="max-w-xl mx-auto md:mx-0 space-y-4"
      >
        <input
          type="text"
          name="Nombre"
          placeholder="Tu nombre completo"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:border-blue-400"
          required
        />
        <input
          type="email"
          name="Correo"
          placeholder="Tu correo electrónico"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:border-blue-400"
          required
        />
        <textarea
          name="Mensaje"
          placeholder="Escribe tu mensaje aquí..."
          className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring focus:border-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold w-full transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
    {/* Redes sociales */}
    <div className="md:w-1/2 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-[#0b1d3a] mb-6 text-center">Síguenos en redes sociales</h2>
      <div className="flex justify-center gap-8 text-3xl text-gray-600">
        <a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@tuempresa" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="https://twitter.com/tuempresa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}
