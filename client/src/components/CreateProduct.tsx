import { useState } from 'react';
import createProductService from './services/createProduct.service';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    product_name:'', 
    model:'', 
    category:'Deporte', 
    description:'', 
    size:'', 
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
    <form onSubmit={ (e)=> createProductService( e, formData ) } encType="multipart/form-data">
      <div>
        <label>
          Nombre de la prenda:
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Proveedor de la prenda:
          <input
            type="text"
            name="supplier_name"
            value={formData.supplier_name}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Modelo:
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Categoría:
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="deporte">Deporte</option>
            {/* Puedes agregar más opciones aquí si lo deseas */}
          </select>
        </label>
      </div>

      <div>
        <label>
          Descripción:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Talla:
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Género:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="dama">Dama</option>
            <option value="caballero">Caballero</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Precio de compra:
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

      <div>
        <label>
          Precio de venta:
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

      <div>
        <label>
          Cantidad:
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

      <div>
        <label>
          Foto:
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            accept="image/*"
          />
        </label>
      </div>

      <div>
        <label>
          Activo:
          <input
            type="checkbox"
            name="asset"
            checked={formData.asset}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Material:
          <input
            type="text"
            name="material"
            value={formData.material}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
};

export default CreateProduct;