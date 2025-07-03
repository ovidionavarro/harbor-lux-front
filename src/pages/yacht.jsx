// import yachtExamples from '../mooks/yacht-offer.json'
const yachts = [
  {
    nombre: "Sunseeker",
    capacidad: 12,
    eslora: "20 m",
    manga: "5 m",
    descripcion: "Elegante yate británico con diseño lujoso.",
    embarque: "Puerto Banús",
    extras: ["Bebidas incluidas", "Sistema de sonido premium"],
    ofertas: [
      { duracion: "4 horas", precio: "$1200.00" },
      { duracion: "8 horas", precio: "$2200.00" }
    ],
    imagen: "https://img1.wsimg.com/isteam/ip/b6f9a6ec-877c-4d82-b1dc-ce011833738b/7935a324-1aac-4828-b5e0-cce24c2e465c.JPG/:/cr=t:32.81%25,l:0%25,w:100%25,h:67.19%25/rs=w:388,h:194,cg:true",
    contacto: "info@sunseekeryachts.com",
    instagram: "https://www.instagram.com/p/C1K-y5OroFw/?igsh=czk2aTJlNW5wZXFw"
  },
  {
    nombre: "Azimut",
    capacidad: 14,
    eslora: "23 m",
    manga: "5.5 m",
    descripcion: "Yate moderno ideal para grupos grandes.",
    embarque: "Puerto Mar",
    extras: ["DJ incluido", "Cabina VIP"],
    ofertas: [
      { duracion: "4 horas", precio: "$1100.00" },
      { duracion: "6 horas", precio: "$1600.00" },
      { duracion: "6 horas", precio: "$1600.00" },
      { duracion: "6 horas", precio: "$1600.00" }
    ],
    imagen: "https://img1.wsimg.com/isteam/ip/b6f9a6ec-877c-4d82-b1dc-ce011833738b/IMG_0997.JPG/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
    contacto: "info@azimutyacht.com",
    instagram: "https://www.instagram.com/p/C1NGyxDLcCG/?igsh=ejd6Znl3NmFucW9h"
  },
  {
    nombre: "Fairline",
    capacidad: 10,
    eslora: "18 m",
    manga: "4.8 m",
    descripcion: "Diseño deportivo y confort británico.",
    embarque: "Puerto Sotogrande",
    extras: ["Patrón incluido", "Frutas frescas"],
    ofertas: [
      { duracion: "2 horas", precio: "$600.00" },
      { duracion: "4 horas", precio: "$1000.00" }
    ],
    imagen: "https://img1.wsimg.com/isteam/ip/b6f9a6ec-877c-4d82-b1dc-ce011833738b/7935a324-1aac-4828-b5e0-cce24c2e465c.JPG/:/cr=t:32.81%25,l:0%25,w:100%25,h:67.19%25/rs=w:388,h:194,cg:true",
    contacto: "info@fairlineboats.com",
    instagram: "https://www.instagram.com/p/C1IuWWZsYPv/?igsh=czBuZHVnM2E3ZmFj"
  },
  {
    nombre: "Princess",
    capacidad: 12,
    eslora: "21 m",
    manga: "5.2 m",
    descripcion: "Yate británico con acabados de lujo.",
    embarque: "Puerto Estepona",
    extras: ["Cava incluida", "Solárium amplio"],
    ofertas: [
      { duracion: "3 horas", precio: "$900.00" },
      { duracion: "6 horas", precio: "$1700.00" }
    ],
    imagen: "https://img1.wsimg.com/isteam/ip/b6f9a6ec-877c-4d82-b1dc-ce011833738b/b0bf31e8-c0d1-4c59-a76d-a2079d416cb7.JPG/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
    contacto: "info@princessyachts.com",
    instagram: "https://www.instagram.com/p/C1IKvGKs6FS/?igsh=NTl2dHRoaTZ6Y29s"
  },
  {
    nombre: "Pershing",
    capacidad: 8,
    eslora: "16 m",
    manga: "4.4 m",
    descripcion: "Velocidad y estilo italiano.",
    embarque: "Puerto Marina",
    extras: ["Motor turbo", "Cabina de lujo"],
    ofertas: [
      { duracion: "2 horas", precio: "$800.00" },
      { duracion: "5 horas", precio: "$1500.00" }
    ],
    imagen: "https://img1.wsimg.com/isteam/ip/b6f9a6ec-877c-4d82-b1dc-ce011833738b/2.JPG/:/cr=t:5.36%25,l:15.23%25,w:79.18%25,h:89.29%25/rs=w:388,h:291.72932330827064,cg:true,m",
    contacto: "info@pershing-yacht.com",
    instagram: "https://www.instagram.com/p/C1HBdd3srdx/?igsh=aXEzZWt1ZnhxZ2Jr"
  }
]


export default function Yacht() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">Catálogo de Yates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {yachts.map((yate, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={yate.imagen} alt={yate.nombre} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{yate.nombre}</h2>
              <p className="text-sm text-gray-600 mb-1">{yate.descripcion}</p>
              <p className="text-sm">📍 <strong>Embarque:</strong> {yate.embarque}</p>
              <p className="text-sm">👥 <strong>Capacidad:</strong> {yate.capacidad} personas</p>
              <p className="text-sm">📏 <strong>Eslora:</strong> {yate.eslora} — <strong>Manga:</strong> {yate.manga}</p>
              <p className="text-sm mb-2">🎁 <strong>Extras:</strong> {yate.extras.join(", ")}</p>
              <div className="mb-2">
                <p className="font-medium">Ofertas:</p>
                <ul className="text-sm list-disc pl-4">
                  {yate.ofertas.map((oferta, i) => (
                    <li key={i}>{oferta.duracion} – {oferta.precio}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a href={`mailto:${yate.contacto}`} className="text-blue-600 text-sm hover:underline">
                  {yate.contacto}
                </a>
                <a href={yate.instagram} target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="w-6 h-6" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}