export default function WhatsAppButton() {
  const phoneNumber = "1234567890"; // <-- Reemplaza con tu número (código país SIN "+")
  const message = "Hola, quiero más información sobre sus servicios.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      title="Habla con nosotros por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.001 2C6.475 2 2 6.475 2 12c0 1.958.572 3.779 1.55 5.313L2 22l4.826-1.53C8.244 21.393 10.05 22 12 22c5.524 0 10-4.475 10-10S17.525 2 12.001 2zm.001 18c-1.644 0-3.177-.512-4.427-1.387l-.317-.216-2.856.906.937-2.782-.21-.32C4.855 15.018 4.334 13.547 4.334 12c0-4.22 3.445-7.666 7.667-7.666 4.22 0 7.666 3.445 7.666 7.666 0 4.22-3.445 7.666-7.666 7.666zm4.17-5.541c-.229-.114-1.355-.668-1.564-.744-.21-.076-.363-.114-.516.114-.153.229-.591.744-.724.897-.133.152-.267.171-.496.057-.229-.115-.964-.355-1.834-1.133-.678-.604-1.134-1.35-1.267-1.58-.134-.229-.015-.353.1-.467.102-.102.229-.266.343-.4.114-.133.152-.229.229-.381.076-.153.038-.286-.019-.4-.057-.114-.515-1.243-.706-1.7-.186-.444-.375-.381-.515-.381-.134 0-.287-.019-.439-.019-.153 0-.4.057-.611.267-.21.21-.8.781-.8 1.9 0 1.118.82 2.198.935 2.351.114.152 1.618 2.469 3.927 3.463.549.238.977.381 1.311.487.551.175 1.052.15 1.448.091.442-.065 1.355-.553 1.545-1.088.191-.533.191-.991.134-1.088-.057-.096-.21-.153-.439-.267z" />
      </svg>
    </a>
  );
}