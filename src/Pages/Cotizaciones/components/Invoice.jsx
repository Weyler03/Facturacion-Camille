import  { useState } from "react";
import InvoicePrint from "./InvoicePrint"; // Importa el componente de impresión

const productos = [
  { nombre: "Pree Poo", precio: 850 },
  { nombre: "Jalea", precio: 900 },
  { nombre: "Gotero", precio: 800 },
  { nombre: "Cajas de Ampollas 3/1", precio: 370 },
  { nombre: "Garrafón de Shampoo", precio: 1000 },
  { nombre: "Garrafón Acondicionador", precio: 1100 },
  { nombre: "Línea Cuidado Personal Diario Uva (Grande)", precio: 3800 },
  { nombre: "Línea para Cuidado Personal Pequeña", precio: 1500 },
  { nombre: "Línea de Rizos", precio: 2700 },
];

export default function Invoice() {
  const [factura, setFactura] = useState([]);
  const [mostrarFactura, setMostrarFactura] = useState(false);

  const agregarProducto = (producto) => {
    setFactura([...factura, { ...producto, cantidad: 1 }]);
  };

  const cambiarCantidad = (index, cantidad) => {
    const nuevaFactura = [...factura];
    nuevaFactura[index].cantidad = cantidad;
    setFactura(nuevaFactura);
  };

  const calcularTotal = () => {
    return factura.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Facturación</h2>

      {/* Lista de productos disponibles */}
      <ul className="mb-4">
        {productos.map((producto, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>{producto.nombre} - DOP {producto.precio}</span>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => agregarProducto(producto)}
            >
              Agregar
            </button>
          </li>
        ))}
      </ul>

      {/* Factura actual */}
      <h3 className="text-lg font-semibold mt-4">Productos en la factura</h3>
      {factura.length > 0 ? (
        <ul>
          {factura.map((item, index) => (
            <li key={index} className="flex justify-between p-2 border-b">
              <span>{item.nombre} - DOP {item.precio}</span>
              <input
                type="number"
                min="1"
                value={item.cantidad}
                onChange={(e) => cambiarCantidad(index, parseInt(e.target.value))}
                className="w-16 border px-2"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No hay productos en la factura.</p>
      )}

      {/* Total y botón de impresión */}
      <div className="mt-4 text-right">
        <h3 className="text-lg font-bold">Total: DOP {calcularTotal()}</h3>
        <button
          className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
          onClick={() => setMostrarFactura(true)}
        >
          Imprimir Factura
        </button>
      </div>

      {mostrarFactura && <InvoicePrint factura={factura} total={calcularTotal()} onClose={() => setMostrarFactura(false)} />}
    </div>
  );
}
