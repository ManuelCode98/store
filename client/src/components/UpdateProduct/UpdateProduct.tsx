import { useState } from 'react';
import updateProductService from './services/updateProduct.service';
import './UpdateProduct.css';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    product_name:'', 
    model:'', 
    category:'Deporte', 
    description:'', 
    size:'Unica', 
    color:'', 
    gender:'Dama',
    purchase_price:'',
    sale_price:'',
    amount:'',
    photo:'',
    asset:true,
    material:'',
    supplier_name:'',
  });

  const handleChange = (e:any) => {
    // console.log(e.target.value);
    const { name, value, type, files, checked } = e.target;
    const newValue = type === 'file' ? files[0] : type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue
    }));
  };


  return (
    <form className='form' onSubmit={ (e)=> updateProductService( e, formData ) } encType="multipart/form-data">
      <div className='container-label'>
        <label>
          Nombre de la prenda:  <br/>
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
          Proveedor de la prenda: <br/>
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
            <option value="deporte">Deporte</option>
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

      <div className='container-label'>
        <label>
          Talla: <br/>
          <select name="size" id="">
            <option>Unica</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
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

      <div className='container-label'>
        <label>
          Género: <br/>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="dama">Dama</option>
            <option value="caballero">Caballero</option>
          </select>
        </label>
      </div>

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