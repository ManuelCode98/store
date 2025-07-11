import React, { useEffect, useState } from 'react';
import getProductsService from './services/getProducts.service';
import './SearchBar.css';

// Definimos el tipo de los datos que vamos a buscar
interface Item {
  id: number;
  product_name: string;
  model: string, 
  category: string, 
  description: string, 
  amount: number,
  asset: boolean,
  gender: string,
  material: string,
  photo: string,
  purchase_price: number
  sale_price: number,
  size: string,
  color: string,
  supplier_name: string
}

const SearchBar: React.FC = () => {
  // Datos de ejemplo

  const [ productsNameState, setProductNameState ] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>('');

  // Todo se debe hacer una peticion para trae todos lo nombre de los productos
  useEffect(() => {
    const products = async()=> setProductNameState( await getProductsService() )

    products();
  }, []);

  // console.log(productsNameState);

  // const datos: Item[] = [
  //   { id: 1, nombre: 'Top Picapiedra' },
  //   { id: 2, nombre: 'Scooby Doo' },
  //   { id: 3, nombre: 'Top Gear' },
  //   { id: 4, nombre: 'Looney Tunes' },
  //   { id: 5, nombre: 'Picapiedra' },
  // ];

  // Estado para el término de búsqueda
  

  // Función para filtrar los resultados
  const filtrarResultados = ( products: Item[], termino: string): Item[] => {
    if (!termino.trim()) return products;

    const terminoMinusculas = termino.toLowerCase();

    return products.filter((item) =>
      item.product_name.toLowerCase().includes(terminoMinusculas)
    );
  };

  const resultados = filtrarResultados( productsNameState, terminoBusqueda);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Que producto quieres actualizar del inventario</h2>
      <input
        type="text"
        placeholder="Buscar..."
        value={terminoBusqueda}
        onChange={(e) => setTerminoBusqueda(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />

      {/* <ul> */}
      { terminoBusqueda.length > 0 
        ? 
        <table border={1} className='table-container'>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Prenda</th>
              <th>Modelo</th>
              <th>Color</th>
              <th>Talla</th>
              <th>Genero</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Materia</th>
              <th>Activo</th>
              <th>Unidades</th>
            </tr>
          </thead>
          <tbody>
            
              {resultados.length > 0 ? (
                resultados.map((item) => (
                  <tr>
                    <td><img src={item.photo} width={50} height={50} /></td>
                    <td>{item.product_name}</td>
                    <td>{item.model}</td>
                    <td>{item.color}</td>
                    <td>{item.size}</td>
                    <td>{item.gender}</td>
                    <td>{item.sale_price}</td>
                    <td>{item.category}</td>
                    <td>{item.material}</td>
                    <td>{item.asset}</td>
                    <td>{item.amount}</td>
                  </tr>
                  // <li key={item.id}>{`${item.product_name} ${ item.model } ${ item.color }`}</li>
                ))
              ) : (
                <span>No se encontraron resultados.</span>
              )}
            
          </tbody>
        </table>
      : ''
      }
      
        
      {/* </ul> */}
    </div>
  );
};

export default SearchBar;