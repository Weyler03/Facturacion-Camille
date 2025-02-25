const products = [
    { name: "Pree Poo", price: "850 DOP",stock :150},
    { name: "Jalea", price: "900 DOP",stock :300 },
    { name: "Gotero", price: "800 DOP",stock :250 },
    { name: "Cajas de Ampollas 3/1", price: "370 DOP",stock :100 },
    { name: "Garrafón de Shampoo", price: "1000 DOP",stock :300 },
    { name: "Garrafón Acondicionador", price: "1100 DOP" ,stock :300},
    { name: "Línea Cuidado Personal Diario Uva (Grande)", price: "3800 DOP",stock :250 },
    { name: "Línea para Cuidado Personal Pequeña", price: "1500 DOP",stock :50 },
    { name: "Línea de Rizos", price: "2700 DOP",stock :100 },
  ];
  
  export default function TableInventario() {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border px-4 py-2 text-left">Producto</th>
              <th className="border px-4 py-2 text-left">Precio (DOP)</th>
              <th className="border px-4 py-2 text-left">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border text-gray-900">
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  