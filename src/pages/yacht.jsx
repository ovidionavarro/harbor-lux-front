import yachtExamples from '../mooks/yacht-offer.json'
import { useNavigate } from "react-router-dom";
const yachts = yachtExamples


export default function Yacht() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">Catálogo de Yates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {yachts.map((yate) => (
          <div
            key={yate.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[500px]" // altura fija
          >
            {/* Imagen ocupa 2/5 del alto: 40% de 500px = 200px */}
            <div className="h-[200px]">
              <img
                src={yate.image}
                alt={yate.boatName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenido: 3/5 del alto */}
            <div className="flex flex-col justify-between flex-grow p-4">
              <div>
                <h2 className="text-xl font-semibold">{yate.boatName}</h2>
                <p className="text-sm text-gray-600 mb-1">{yate.description}</p>
                <p className="text-sm">📍 <strong>Embarque:</strong> {yate.pickUp}</p>
                <p className="text-sm">👥 <strong>Capacidad:</strong> {yate.capacity} personas</p>
                <p className="text-sm mb-2">🎁 <strong>Extras:</strong> {yate.adiditionalInfo}</p>

                <div className="flex justify-between items-center mb-2 mt-2">
                  <p className="font-medium">Ofertas:</p>
                  <button
                    onClick={() => navigate(`/yate/${yate.id}`)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-[#0b1d3a] text-sm px-4 py-1 rounded-full font-semibold"
                  >
                    Ver Detalles
                  </button>
                </div>

                <ul className="text-sm list-disc pl-4">
                  {yate.offers.map((oferta, i) => (
                    <li key={i}>
                      {oferta.durationHours} horas – ${parseFloat(oferta.price).toLocaleString()}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacto e Instagram en la parte inferior */}
              <div className="mt-auto pt-1 border-t border-gray-200 flex justify-between items-center text-sm">
                <a
                  href={`mailto:${yate.email}`}
                  className="text-blue-600 text-sm hover:underline"
                >
                  {yate.email}
                </a>
                <a
                  href={yate.instagran}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    className="w-6 h-6"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
