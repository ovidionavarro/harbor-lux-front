export default function About() {
  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-[#0b1d3a]">Sobre Harbor Lux</h2>
      <p className="text-gray-700 mb-6">
        En <span className="font-semibold text-yellow-500">Harbor Lux</span> nos dedicamos a ofrecer experiencias de lujo en alta mar, combinando confort, exclusividad y atención personalizada. Nuestra flota de yates está equipada con todo lo necesario para que vivas momentos inolvidables, ya sea en una escapada romántica, una celebración especial o un evento corporativo.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#0b1d3a]">Nuestra Misión</h3>
          <p className="text-gray-600">
            Brindar a nuestros clientes un servicio de excelencia, garantizando seguridad, comodidad y experiencias únicas en cada travesía.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#0b1d3a]">Por qué elegirnos</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Tripulación profesional y calificada</li>
            <li>Yates modernos y equipados</li>
            <li>Atención personalizada</li>
            <li>Ofertas flexibles y adaptadas a tus necesidades</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h4 className="font-semibold text-[#0b1d3a] mb-1">Contacto</h4>
          <p className="text-gray-600">Email: <a href="mailto:info@harborlux.com" className="text-blue-600 hover:underline">info@harborlux.com</a></p>
          <p className="text-gray-600">Teléfono: <a href="tel:+34123456789" className="text-blue-600 hover:underline">+34 123 456 789</a></p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
          <span className="text-gray-600">Síguenos en Instagram</span>
        </div>
      </div>
    </div>
  );
}