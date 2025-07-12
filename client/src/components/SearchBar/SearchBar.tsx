import React, { useEffect, useState } from 'react';
import getProductsService from './services/getProducts.service';
import './SearchBar.css';
import UpdateProduct from '../UpdateProduct/UpdateProduct';

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
  const [ productDataState, setProductDataState ] = useState<any>({})
  const [ productActiveState, setProductActiveState ] = useState(true)

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
  

  // Funcion para llenar el formulario con el elemento que se clico
  const setAllData = ( { currentTarget }:any )=>{

    const selectAllTd = currentTarget.querySelectorAll('td');
    
    const photo = selectAllTd[0].querySelector('img').src;
    const product_name = selectAllTd[1].innerText; 
    const model = selectAllTd[2].innerText;
    const color = selectAllTd[3].innerText;
    const size = selectAllTd[4].innerText;
    const gender = selectAllTd[5].innerText;
    const sale_price = selectAllTd[6].innerText;
    const category = selectAllTd[7].innerText;
    const material = selectAllTd[8].innerText;
    const asset = selectAllTd[9].innerText;
    const amount = selectAllTd[10].innerText;
    
    if( asset === 'Active' ){

      setProductActiveState( true )

    } else {
      setProductActiveState( false )
    }



    setProductDataState({photo, product_name, model, color, size, gender, sale_price, category, material, asset: productActiveState, amount})
    // const productData = {

    // }

    // <th>Foto</th>
    // <th>Prenda</th>
    // <th>Modelo</th>
    // <th>Color</th>
    // <th>Talla</th>
    // <th>Genero</th>
    // <th>Precio</th>
    // <th>Categoria</th>
    // <th>Materia</th>
    // <th>Activo</th>
    // <th>Unidades</th>
    

  }
  

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
    <div style={{ padding: '20', fontFamily: 'Arial' }}>
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
              <th>Material</th>
              <th>Activo</th>
              <th>Unidades</th>
            </tr>
          </thead>
          <tbody>
            
              {resultados.length > 0 ? (
                resultados.map((item) => (
                  <tr onClick={ (e)=> setAllData( e ) }>
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
      
      <UpdateProduct {...productDataState} />
        
      {/* </ul> */}
    </div>
  );
};

export default SearchBar;