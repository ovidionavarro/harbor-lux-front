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
        <div className="text-white max-w-2xl ml-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Vive una experiencia <br /> de lujo en alta mar
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Embárcate en una experiencia exclusiva con nuestros yates de primera clase.
          </p>
          <Link
            to="/reserva"
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
    </div>
  );
}
