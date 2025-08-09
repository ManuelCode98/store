import { useEffect, useState } from 'react';
import deleteProductService from './services/deleteProduct.service';
import './DeleteProduct.css';
import type { ProductState } from '../../interfaces/ProductState.interfce';




// photo:string, product_name:string, model:string, color:string, size:string, gender:string, sale_price:string, category:string, material:string, asset:string, amount:string
const DeleteProduct = ( {setAllProductsState, productDataState}:ProductState ) => {
 
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

  return (
    <>
      <h2 className='delete-product-Subtitle'>Que producto quieres elliminar del inventario</h2>
      <form className='form-delete-product' onSubmit={ (e)=> setFormData( deleteProductService( e, formData, setAllProductsState ) ) } encType="multipart/form-data">
        <div className='photo-delete-product'>
          <img src={formData.photo} width={'300'} height={'300'} />
        </div>
        
        <div className='data-delete-product'>
          <div className='product-name-delete-product'>
            Producto: <span>{formData.product_name}</span>
          </div>

          <div className='product-name-delete-product'>
            Marca: <span>{formData.brand}</span>
          </div>

          <div className='product-name-delete-product'>
            Modelo: <span>{formData.model}</span>
          </div>

          <div className='product-name-delete-product'>
            Proveedor: <span>{formData.supplier_name}</span>
          </div>

          <div className='product-name-delete-product'>
            Precio de compra: <span>${formData.purchase_price}</span>
          </div>

          <div className='product-name-delete-product'>
            Precio de venta: <span>${formData.sale_price}</span>
          </div>
        </div>
        { productDataState.product_name
          ? <button className='button-submit button-delete' type="submit">Eliminar</button>
          : ''
        }
        
      </form>
    </>
  );
};

export default DeleteProduct;