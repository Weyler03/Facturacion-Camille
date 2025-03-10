import { useState } from "react";
import TableClientes from "./components/TableClientes";

const Clientes = () => {

     const [clientes, setClientes] = useState([]);
      const [modalShow, setModalShow] = useState(false);
      const [selectedProducto, setSelectedProducto] = useState(null);
      const [isEditing, setIsEditing] = useState(false);

      const handleCreate = () => {
        setSelectedProducto({ nombre_Producto: "", descripcion_Producto: "", componentes: [] });
        setIsEditing(false);
        setModalShow(true);
      };
    
      const handleSave = () => {
        if (selectedProducto) {
          if (isEditing) {
            setClientes(clientes.map((prod) =>
              prod.id_Producto === selectedProducto.id_Producto ? selectedProducto : prod
            ));
          } else {
            setClientes([...clientes, selectedProducto]);
          }
          setModalShow(false);
          setSelectedProducto(null);
        }
      };
    

  return <div className="p-4 mt-0 flex flex-col items-center">
   <h1 className='mb-2'>
   Página de Clientes
   </h1>
   <button
        onClick={handleCreate}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6"
      >
        Crear Cliente
      </button>
      {modalShow && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4 text-center">
              {isEditing ? "Editar Cliente" : "Crear Cliente"}
            </h3>
            <input
              type="text"
              placeholder="Nombre del Cliente"
              value={selectedProducto.nombre_Producto}
              onChange={(e) => setSelectedProducto({ ...selectedProducto, nombre_Producto: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Direccion"
              value={selectedProducto.descripcion_Producto}
              onChange={(e) => setSelectedProducto({ ...selectedProducto, descripcion_Producto: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setModalShow(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cerrar
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {isEditing ? "Guardar Cambios" : "Crear Producto"}
              </button>
            </div>
          </div>
        </div>
      )}
   <TableClientes/>
   </div>;
};

export default Clientes;