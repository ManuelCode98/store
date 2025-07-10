import React, { useState } from 'react';

// Definimos el tipo de los datos que vamos a buscar
interface Item {
  id: number;
  nombre: string;
}

const SearchBar: React.FC = () => {
  // Datos de ejemplo
  const datos: Item[] = [
    { id: 1, nombre: 'Top Picapiedra' },
    { id: 2, nombre: 'Scooby Doo' },
    { id: 3, nombre: 'Top Gear' },
    { id: 4, nombre: 'Looney Tunes' },
    { id: 5, nombre: 'Picapiedra' },
  ];

  // Estado para el término de búsqueda
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>('');

  // Función para filtrar los resultados
  const filtrarResultados = (datos: Item[], termino: string): Item[] => {
    if (!termino.trim()) return datos;

    const terminoMinusculas = termino.toLowerCase();

    return datos.filter((item) =>
      item.nombre.toLowerCase().includes(terminoMinusculas)
    );
  };

  const resultados = filtrarResultados(datos, terminoBusqueda);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Barra de Búsqueda</h2>
      <input
        type="text"
        placeholder="Buscar..."
        value={terminoBusqueda}
        onChange={(e) => setTerminoBusqueda(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />

      <ul>
        {resultados.length > 0 ? (
          resultados.map((item) => (
            <li key={item.id}>{item.nombre}</li>
          ))
        ) : (
          <li>No se encontraron resultados.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;