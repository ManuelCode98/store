import { useEffect, useState } from 'react';
import updateProductService from './services/updateProduct.service';
import './UpdateProduct.css';

interface ProductData {
  product_name: string, 
  brand: string,
  model:string, 
  category:string, 
  description:string, 
  size:string, 
  color:string, 
  gender:string,
  purchase_price:number,
  sale_price:number,
  amount:string,
  photo:string,
  asset:boolean,
  material:string,
  supplier_name:string,
}


interface UpdateProductProps {
  updateSearchBarProducts: React.Dispatch<React.SetStateAction<any>>;
  currentProduct: ProductData
}

const UpdateProduct = ( { updateSearchBarProducts, currentProduct}:UpdateProductProps ) => {


  const [formData, setFormData] = useState<any>({
    id: 0,
    product_name: '',
    brand: '', 
    model:'', 
    category:'Deporte', 
    description:'', 
    size:'Unica', 
    color:'', 
    gender:'Dama',
    purchase_price:0,
    sale_price:0,
    amount:0,
    photo:'',
    asset: true,
    material:'',
    supplier_name:'',
  });
    
  useEffect(()=>{
    setFormData( currentProduct )
  }, [currentProduct])
 
  const handleChange = (e:any) => {
   
    const { name, value, type, files, checked } = e.target;
    const newValue = type === 'file' ? files[0] : type === 'checkbox' ? checked : value;

    setFormData((prev:any) => ({
      ...prev,
      [name]: newValue
    }));
  };

  return (
    <form className='form' onSubmit={ (e)=> updateProductService( e, updateSearchBarProducts, formData ) } encType="multipart/form-data">
      <div className='container-label'>
        <label>
          Nombre del producto:  <br/>
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className='container-label'>
        <label>
          Marca:  <br/>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className='container-label'>
        <label>
          Proveedor del producto: <br/>
          <input
            type="text"
            name="supplier_name"
            value={formData.supplier_name}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className='container-label'>
        <label>
          Modelo: <br/>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className='container-label'>
        <label>
          Categoría: <br/>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Deporte">Deporte</option>
            <option value="Herramienta">Herramienta</option>
            <option value="Accesorio">Accesorio</option>
            <option value="Abarrotes">Abarrotes</option>
            <option value="Papeleria">Papelería</option>
            <option value="Articulos de limpieza">Artículos de limpieza</option>
            <option value="ArtículosHogar">Artículos para el hogar</option>
            <option value="CuidadoPersonal">Cuidado personal</option>
            <option value="Juguetes">Juguetes</option>
            <option value="Tecnologia">Tecnología</option>
            {/* Puedes agregar más opciones aquí si lo deseas */}
          </select>
        </label>
      </div>

      <div className='container-label'>
        <label>
          Descripción: <br/>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            // required
          />
        </label>
      </div>

      { formData.category === 'Deporte' 
        ? <div className='container-label'>
            <label>
              Talla: <br/>
              <select name="size" value={ formData.size } onChange={handleChange}>
                <option value='Unica'>Unica</option>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='S'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
              </select>
              {/* <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
              /> */}
            </label>
          </div>
        : ''
      }
      

      <div className='container-label'>
        <label> 
          Color: <br/>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      { formData.category === 'Deporte'
        ?
          <div className='container-label'>
            <label>
              Género: <br/>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="dama">Dama</option>
                <option value="caballero">Caballero</option>
              </select>
            </label>
          </div>
        : ''
      }

      <div className='container-label'>
        <label>
          Precio de compra: <br/>
          <input
            type="number"
            name="purchase_price"
            value={formData.purchase_price}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </label>
      </div>

      <div className='container-label'>
        <label>
          Precio de venta: <br/>
          <input
            type="number"
            name="sale_price"
            value={formData.sale_price}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </label>
      </div>

      <div className='container-label'>
        <label>
          Cantidad: <br/>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
      </div>

      <div className='container-label'>
        <label>
          Foto: <br/>
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            accept="image/*"
          />
        </label>
      </div>

      <div className='container-label'>
        <label>
          Activo: <br/>
          <input className='input-checkbox'
            type="checkbox"
            name="asset"
            checked={ formData.asset }
            onChange={handleChange}
          />
        </label>
      </div>

      <div className='container-label'>
        <label>
          Material: <br/>
          <input
            type="text"
            name="material"
            value={formData.material}
            onChange={handleChange}
            // required
          />
        </label>
      </div>

      <button className='button-submit' type="submit">Guardar</button>
    </form>
  );
};

export default UpdateProduct;