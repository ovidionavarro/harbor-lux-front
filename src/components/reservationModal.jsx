import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReservationModal({
  isOpen,
  onClose,
  offer,
  startDate,
  setStartDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  note,
  setNote,
  onSubmit,
}) {
  const [step, setStep] = useState(1); // Step 1 = datos usuario, Step 2 = reserva
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellidos: "",
    identificacion: "",
    correo: "",
    telefono: "",
  });

  if (!isOpen) return null;

  const handleTimeInputFocus = (e) => {
    e.target.showPicker && e.target.showPicker();
  };

  const handleChangeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => setStep(2);
  const handleBackStep = () => setStep(1);

  const handleFinalSubmit = () => {
    const data = {
      ...userInfo,
      startDate,
      startTime,
      endTime,
      note,
    };
    handleBackStep()
    onSubmit(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative min-h-[440px] transition-all duration-300">
        {/* Botón cerrar */}
        <button
            onClick={() => {
              handleBackStep();
              onClose();
            }}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          {step === 1
            ? "Información del cliente"
            : `Reserva de ${offer.durationHours} horas`}
        </h2>

        {/* Paso 1: Info cliente */}
        {step === 1 && (
          <div className="space-y-4">
            {[
              { label: "Nombre", name: "nombre" },
              { label: "Apellidos", name: "apellidos" },
              { label: "Identificación", name: "identificacion" },
              { label: "Correo electrónico", name: "correo", type: "email" },
              { label: "Teléfono", name: "telefono", type: "tel" },
            ].map(({ label, name, type = "text" }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={userInfo[name]}
                  onChange={handleChangeUserInfo}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
            ))}

            <div className="text-center pt-2">
              <button
                onClick={handleNextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* Paso 2: Reserva */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fecha
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Hora de inicio
              </label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                onFocus={handleTimeInputFocus}
                onClick={handleTimeInputFocus}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Hora de fin
              </label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                onFocus={handleTimeInputFocus}
                onClick={handleTimeInputFocus}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Descripción de la actividad
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                rows={3}
                placeholder="Ej: Fiesta, evento familiar..."
              />
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={handleBackStep}
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                ← Atrás
              </button>
              <button
                onClick={handleFinalSubmit}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Confirmar reserva
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
