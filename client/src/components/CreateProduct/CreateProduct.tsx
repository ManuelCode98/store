import { useState } from 'react';
import createProductService from './services/createProduct.service';
import './CreateProduct.css';

const CreateProduct = () => {

  const [formData, setFormData] = useState({
    product_name:'', 
    brand: '',
    model:'', 
    category:'Deporte', 
    description:'', 
    size:'Unica', 
    color:'', 
    gender:'Dama',
    purchase_price:'',
    sale_price:'',
    amount:1,
    photo:'',
    asset:true,
    material:'',
    supplier_name:'',
  });

  const handleChange = (e:any) => {
  
    const { name, value, type, files, checked } = e.target;
    const newValue = type === 'file' ? files[0] : type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue
    }));
  };

  return (
    <form className='form' onSubmit={ (e)=> createProductService( e, formData ) } encType="multipart/form-data">
      <div className='container-label'>
        <label>
          Nombre de la producto:  <br/>
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
          {/*Todo Esta parte esta pendiente quiero hacer que uno seleccione los colores y se vallan agregando */}
          {/* <select onChange={handleChange} name='color'>
            <option></option>
            <option value="#FF0000" style={{background: '#FF0000', color: 'white'}}>Rojo (#FF0000)</option>
            <option value="#00FF00" style={{background: '#00FF00', color: 'black'}}>Verde (#00FF00)</option>
            <option value="#0000FF" style={{background: '#0000FF', color: 'white'}}>Azul (#0000FF)</option>
            <option value="#FFFF00" style={{background: '#FFFF00', color: 'black'}}>Amarillo (#FFFF00)</option>
            <option value="#FFA500" style={{background: '#FFA500', color: 'black'}}>Naranja (#FFA500)</option>
            <option value="#800080" style={{background: '#800080', color: 'white'}}>Morado (#800080)</option>
            <option value="#FFC0CB" style={{background: '#FFC0CB', color: 'black'}}>Rosado (#FFC0CB)</option>
            <option value="#00FFFF" style={{background: '#00FFFF', color: 'black'}}>Cyan (#00FFFF)</option>
            <option value="#A52A2A" style={{background: '#A52A2A', color: 'white'}}>Marrón (#A52A2A)</option>
            <option value="#808080" style={{background: '#808080', color: 'white'}}>Gris (#808080)</option>
          </select> */}
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
            checked={formData.asset}
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

export default CreateProduct;