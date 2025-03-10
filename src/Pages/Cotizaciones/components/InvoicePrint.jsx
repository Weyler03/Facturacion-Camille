import { useRef } from "react";
import printJS from "print-js";

export default function InvoicePrint({ cliente, factura, total, onClose }) {
  const facturaRef = useRef();

  const imprimirFactura = () => {
    printJS({
      printable: facturaRef.current.innerHTML,
      type: "raw-html",
      style: `
        body { font-family: Arial, sans-serif; font-size: 14px; }
        .factura { width: 300px; margin: auto; }
        .titulo { text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 10px; }
        .cliente { text-align: left; margin-bottom: 10px; font-size: 14px; font-weight: bold; }
        .linea { display: flex; justify-content: space-between; border-bottom: 1px dashed #000; padding: 5px 0; }
        .total { font-weight: bold; text-align: right; margin-top: 10px; font-size: 16px; }
      `,
    });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div ref={facturaRef} className="factura">
          <h2 className="titulo">Factura</h2>

          {/* Datos del Cliente */}
          <div className="cliente">
            <p>Cliente: {cliente.nombre}</p>
            <p>Dirección: {cliente.direccion}</p>
          </div>

          {/* Productos */}
          {factura.map((item, index) => (
            <div key={index} className="linea">
              <span>{item.nombre} x{item.cantidad}</span>
              <span>DOP {item.precio * item.cantidad}</span>
            </div>
          ))}

          <div className="total">Total: DOP {total}</div>
        </div>

        <div className="mt-4 flex justify-between">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Cerrar
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={imprimirFactura}>
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
}
