import React, { useEffect, useState } from 'react';
import getProductsService from './services/getProducts.service';
import './SearchBar.css';
import UpdateProduct from '../UpdateProduct/UpdateProduct';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

// Definimos el tipo de los datos que vamos a buscar
interface Item {
  id: number;
  product_name: string;
  brand: string;
  model: string; 
  category: string; 
  description: string; 
  amount: number;
  asset: boolean;
  gender: string;
  material: string;
  photo: string;
  purchase_price: number;
  sale_price: number;
  size: string;
  color: string;
  supplier_name: string;
  created_at: string;
}

const SearchBar: React.FC = () => {
  // Datos de ejemplo

  const [ allProductsState, setAllProductsState ] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>('');
  const [ productDataState, setProductDataState ] = useState<any>({})
  const [ productActiveState, setProductActiveState ] = useState(true)

  useEffect(() => {
    const products = async()=> setAllProductsState( await getProductsService() )

    products();
  }, []);

  // Funcion para llenar el formulario con el elemento que se clico
  const setAllData = ( { currentTarget }:any, asset:boolean, id:number )=>{
  // console.log(currentTarget);

    const selectAllTd = currentTarget.querySelectorAll('td');
    
    const photo = selectAllTd[0].querySelector('img').src;
    const product_name = selectAllTd[1].innerText; 
    const brand = selectAllTd[2].innerText; 
    const model = selectAllTd[3].innerText;
    const color = selectAllTd[4].innerText;
    const size = selectAllTd[5].innerText;
    const gender = selectAllTd[6].innerText;
    const purchase_price = selectAllTd[7].innerText;
    const sale_price = selectAllTd[8].innerText;
    const amount = selectAllTd[9].innerText;
    const category = selectAllTd[10].innerText;
    const description = selectAllTd[11].innerText;
    const material = selectAllTd[12].innerText;
    const supplier_name = selectAllTd[14].innerText;
    const created_at = selectAllTd[15].innerText;

    // console.log(selectAllTd[11]);
    

    setProductDataState({id, photo, product_name, brand, model, color, size, gender, sale_price, purchase_price, category, description, material, asset, amount, supplier_name, created_at})
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

  const resultados = filtrarResultados( allProductsState, terminoBusqueda);

  const resetSearch = ()=>{
    setTerminoBusqueda('')
  }
// console.log(resultados);

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
              <th>Producto</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Color</th>
              <th>Talla</th>
              <th>Genero</th>
              <th>Precio de compra</th>
              <th>Precio de venta</th>
              <th>Unidades</th>
              <th>Categoria</th>
              <th>Descripción</th>
              <th>Material</th>
              <th>Activo</th>
              <th>Proveedor</th>
              <th>Creado</th>
            </tr>
          </thead>
          <tbody>
            
              {resultados.length > 0 ? (
                resultados.map((item) => (
                  <tr key={ item.id } onClick={ (e)=> {setAllData( e, item.asset, item.id ), resetSearch()} }>
                    <td><img src={item.photo} width={'50'} height={'50'} /></td>
                    <td>{item.product_name}</td>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.color}</td>
                    <td>{item.size}</td>
                    <td>{item.gender}</td>
                    <td>{item.purchase_price}</td>
                    <td>{item.sale_price}</td>
                    <td>{item.amount}</td>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.material}</td>
                    <td>{item.asset === true ? 'Activo' : 'Agotado' }</td>
                    <td>{item.supplier_name}</td>
                    <td>{item.created_at}</td>
                  </tr>
                ))
              ) : (
                <span>No se encontraron resultados.</span>
              )}
            
          </tbody>
        </table>
      : ''
      }
      
      {/* { productDataState && <UpdateProduct set={ setAllProductsState } currentProduct={ productDataState } /> } */}
      <UpdateProduct updateSearchBarProducts={ setAllProductsState } currentProduct={ productDataState } />
      {/* <DeleteProduct data = { {setAllProductsState, productDataState} } /> */}
        
      {/* </ul> */}
    </div>
  );
};

export default SearchBar;