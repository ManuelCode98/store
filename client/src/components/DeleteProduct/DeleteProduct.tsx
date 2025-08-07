import { useEffect, useState } from 'react';
import deleteProductService from './services/deleteProduct.service';
import './DeleteProduct.css';

interface ProductData {
  product_name: string, 
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
    supplier_name:string
}

// photo:string, product_name:string, model:string, color:string, size:string, gender:string, sale_price:string, category:string, material:string, asset:string, amount:string
const DeleteProduct = ( productDataState:any ) => {
  
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
    setFormData( productDataState )
  }, [productDataState])
 
  const handleChange = (e:any) => {
   
    const { name, value, type, files, checked } = e.target;
    const newValue = type === 'file' ? files[0] : type === 'checkbox' ? checked : value;

    setFormData((prev:any) => ({
      ...prev,
      [name]: newValue
    }));
  };

  return (
    <>
      <h2 className='delete-product-Subtitle'>Que producto quieres elliminar del inventario</h2>
      <form className='form' onSubmit={ (e)=> setFormData( deleteProductService( e, formData ) ) } encType="multipart/form-data">
        <div className='photo-delete-product'>
          <img src={formData.photo} width={'300'} height={'300'} />
        </div>

        <div className='product-name-delete-product'>
          Producto
          {formData.product_name}
        </div>

        <div className='product-name-delete-product'>
          Marca
          {formData.model}
        </div>

        <div className='product-name-delete-product'>
          Modelo
          {formData.model}
        </div>

        <div className='product-name-delete-product'>
          Proveedor
          {formData.supplier_name}
        </div>

        <div className='product-name-delete-product'>
          Precio de compra
          {formData.purchase_price}
        </div>

        <div className='product-name-delete-product'>
          Precio de venta
          {formData.sale_price}
        </div>

        
        <button className='button-submit' type="submit">Eliminar</button>
      </form>
    </>
  );
};

export default DeleteProduct;