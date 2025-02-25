import { useState } from "react";
import TableProducts from "./components/TableProducts";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // const handleEdit = (id_Producto) => {
  //   const producto = productos.find((prod) => prod.id_Producto === id_Producto);
  //   if (producto) {
  //     setSelectedProducto({ ...producto, componentes: producto.componentes || [] });
  //     setIsEditing(true);
  //     setModalShow(true);
  //   }
  // };

  const handleCreate = () => {
    setSelectedProducto({ nombre_Producto: "", descripcion_Producto: "", componentes: [] });
    setIsEditing(false);
    setModalShow(true);
  };

  const handleSave = () => {
    if (selectedProducto) {
      if (isEditing) {
        setProductos(productos.map((prod) =>
          prod.id_Producto === selectedProducto.id_Producto ? selectedProducto : prod
        ));
      } else {
        setProductos([...productos, selectedProducto]);
      }
      setModalShow(false);
      setSelectedProducto(null);
    }
  };

  // const handleDelete = (id_Producto) => {
  //   setProductos(productos.filter((producto) => producto.id_Producto !== id_Producto));
  // };

  return (
    <div className="p-6 mt-0 flex flex-col items-center">
      <h1 className=" font-semibold mb-4 text-center">Lista de Productos</h1>
      <button
        onClick={handleCreate}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6"
      >
        Crear Producto
      </button>

      {/* Contenedor de la tabla con scroll horizontal en pantallas pequeñas */}
      {/* <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg table-auto">
            <thead className="bg-gray-200">
              <tr className="text-left">
                <th className="border p-2 sm:p-3">ID</th>
                <th className="border p-2 sm:p-3">Nombre</th>
                <th className="border p-2 sm:p-3">Descripción</th>
                <th className="border p-2 sm:p-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {productos.length > 0 ? (
                productos.map((producto) => (
                  <tr key={producto.id_Producto} className="border">
                    <td className="border p-2 sm:p-3">{producto.id_Producto}</td>
                    <td className="border p-2 sm:p-3">{producto.nombre_Producto}</td>
                    <td className="border p-2 sm:p-3">{producto.descripcion_Producto}</td>
                    <td className="border p-2 sm:p-3">
                      {producto.componentes && producto.componentes.length > 0
                        ? producto.componentes
                            .map((componente) => `${componente.nombre_Componente} (${componente.cantidad_Componente})`)
                            .join(", ")
                        : "No hay componentes"}
                    </td>
                    <td className="border p-2 sm:p-3 flex justify-center space-x-2">
                      <button
                        onClick={() => handleEdit(producto.id_Producto)}
                        className="bg-yellow-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded hover:bg-yellow-600"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(producto.id_Producto)}
                        className="bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded hover:bg-red-600"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="border p-2 sm:p-3 text-center text-gray-500">
                    No hay productos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div> */}

      {/* Modal Responsivo */}
      {modalShow && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4 text-center">
              {isEditing ? "Editar Producto" : "Crear Producto"}
            </h3>
            <input
              type="text"
              placeholder="Nombre del Producto"
              value={selectedProducto.nombre_Producto}
              onChange={(e) => setSelectedProducto({ ...selectedProducto, nombre_Producto: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Descripción"
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
    <TableProducts/>
    </div>
  );
};

export default Productos;
