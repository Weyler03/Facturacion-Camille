import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faBroom } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-center">Laboratorio Camille SRL</h1>
      <p className="text-gray-700 text-center max-w-lg mb-6">
        Somos una empresa dedicada a la fabricación y distribución de productos capilares y de limpieza para el hogar. Contamos con dos marcas especializadas:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-6">
        {/* Salud Capilar */}
        <div className="flex items-center bg-white shadow-md p-4 rounded-lg w-full">
          <FontAwesomeIcon icon={faFlask} className="text-blue-600 text-3xl mr-4" />
          <div>
            <h2 className="font-semibold text-lg">Salud Capilar</h2>
            <p className="text-gray-600 text-sm">Productos de alta calidad para el cuidado y embellecimiento del cabello.</p>
          </div>
        </div>

        {/* Casa Limpia */}
        <div className="flex items-center bg-white shadow-md p-4 rounded-lg w-full">
          <FontAwesomeIcon icon={faBroom} className="text-green-600 text-3xl mr-4" />
          <div>
            <h2 className="font-semibold text-lg">Casa Limpia</h2>
            <p className="text-gray-600 text-sm">Soluciones efectivas para la limpieza y el mantenimiento del hogar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
