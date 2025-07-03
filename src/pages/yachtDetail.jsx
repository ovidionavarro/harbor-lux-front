import { useParams } from "react-router-dom";
import { useState } from "react";
import yachtExamples from '../mooks/yacht-offer.json';
import ReservationModal from "../components/reservationModal"; // importa tu modal

export default function YachtDetail() {
  const { id } = useParams();
  const yate = yachtExamples.find(y => y.id === id);

  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [note, setNote] = useState("");

  const handleOpenModal = (offer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStartTime("");
    setEndTime("");
    setNote("");
  };

  const handleReservationSubmit = () => {
    // Aquí podrías enviar los datos a una API o backend
    console.log({
      offer: selectedOffer,
      startDate,
      startTime,
      endTime,
      note,
      yacht: yate.boatName
    });

    alert("Reserva enviada correctamente 🎉");
    handleCloseModal();
  };

  if (!yate) {
    return <p className="text-center mt-20 text-red-600">Yate no encontrado.</p>;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto my-12 p-10 bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-10">
        {/* Imagen */}
        <div className="md:w-1/2 h-96 md:h-auto rounded-lg overflow-hidden shadow-md">
          <img
            src={yate.image}
            alt={yate.boatName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detalles */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">{yate.boatName}</h2>
            <p className="text-gray-700 mb-4">{yate.description}</p>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-4 text-gray-600 mb-4">
              <p className="flex items-center gap-2">
                📍 <strong>Embarque:</strong> {yate.pickUp}
              </p>
              <p className="flex items-center gap-2 md:mt-1 md:ml-0 md:w-full">
                👥 <strong>Capacidad:</strong> {yate.capacity} personas
              </p>
            </div>

            {/* Extras */}
            <div className="mb-4 md:hidden">
              <span className="flex items-center gap-2 text-gray-600">
                🎁 <strong>Extras:</strong>
              </span>
              <span className="block ml-7 text-gray-600">
                {yate.adiditionalInfo}
              </span>
            </div>
            <div className="hidden md:flex text-gray-600 mb-4">
              <p className="flex items-center gap-2">
                🎁 <strong>Extras:</strong> {yate.adiditionalInfo}
              </p>
            </div>

            {/* Especificaciones */}
            <div className="mb-4 md:hidden">
              <span className="flex items-center gap-2 text-gray-600">
                📏 <strong>Especificaciones:</strong>
              </span>
              <span className="block ml-7 text-gray-600">
                Largo {yate.length} m, Manga {yate.beam} m, Calado {yate.draft} m
              </span>
            </div>
            <div className="hidden md:flex text-gray-600 mb-4">
              <p className="flex items-center gap-2">
                📏 <strong>Especificaciones:</strong> Largo {yate.length} m, Manga {yate.beam} m, Calado {yate.draft} m
              </p>
            </div>

            {/* Teléfono */}
            <p className="flex items-center gap-2 text-gray-600 mb-6">
              📞 <strong>Teléfono:</strong> {yate.phone}
            </p>

            {/* Ofertas como botones */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Ofertas disponibles</h3>
              <div className="flex flex-wrap gap-3">
                {yate.offers.map(offer => (
                  <button
                    key={offer.id}
                    className="bg-yellow-400 hover:bg-yellow-500 text-[#0b1d3a] font-semibold px-4 py-2 rounded-full transition"
                    onClick={() => handleOpenModal(offer)}
                  >
                    {offer.durationHours} horas – ${parseFloat(offer.price).toLocaleString()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contacto e Instagram */}
          <div className="mt-6 flex justify-between items-center border-t border-gray-300 pt-4">
            <a
              href={`mailto:${yate.email}`}
              className="text-blue-600 hover:underline"
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
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Modal de reserva */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        offer={selectedOffer}
        startDate={startDate}
        setStartDate={setStartDate}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        note={note}
        setNote={setNote}
        onSubmit={handleReservationSubmit}
      />
    </>
  );
}
