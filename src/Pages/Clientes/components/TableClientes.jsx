const salons = [
    { name: "Salón Bella Estética", direccion: "Av. 27 de Febrero #120, Santo Domingo",balance:"5000" },
    { name: "Glamour Beauty Center", direccion: "Calle El Conde #45, Zona Colonial, Santo Domingo",balance:"2000" },
    { name: "Elegance Hair Studio", direccion: "Av. Sarasota #98, Bella Vista, Santo Domingo",balance:"5500" },
    { name: "Diva Spa & Salon", direccion: "Calle del Sol #30, Santiago de los Caballeros",balance:"55000" },
    { name: "Luxury Hair & Nails", direccion: "Av. España #85, Santo Domingo Este",balance:"35000" },
    { name: "Estética Perla", direccion: "Calle Duarte #200, San Pedro de Macorís",balance:"75000" },
    { name: "Reina Beauty Salon", direccion: "Av. Barceló #14, Punta Cana",balance:"8000" },
  ];
  
  export default function TableClientes() {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border px-4 py-2 text-left">Salón de Belleza</th>
              <th className="border px-4 py-2 text-left">Dirección</th>
              <th className="border px-4 py-2 text-left">Balance</th>
            </tr>
          </thead>
          <tbody>
            {salons.map((salon, index) => (
              <tr key={index} className="border text-gray-900">
                <td className="border px-4 py-2">{salon.name}</td>
                <td className="border px-4 py-2">{salon.direccion}</td>
                <td className="border px-4 py-2">{salon.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  