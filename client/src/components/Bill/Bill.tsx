
import { useEffect, useState } from 'react';
import './Bill.css';
import type { ProductBill } from '../../interfaces/ProductBill.interface';
import type { SearchProductData } from '../../interfaces/SearchProduct.interface';
import sendInvoiceService from './services/sendInvoice.service';

const Bill = ( {productData}:{ productData:SearchProductData } ) => {

    const [products, setProducts] = useState<[]>([]);

    useEffect(() => {
            // console.log(productData);

        if( productData && Object.keys( productData ).length > 0 ){
        
            const { id, product_name, amount, sale_price } = productData;
            const total = ((amount*1) * (sale_price*1))
            
            const currentProduct = { id, product_name, amount, sale_price, total }
            setProducts( (prev):any => [...prev, currentProduct] )
        }
    }, [productData]);

    const saveBill = ( e:any, formData:any )=>{ 
        e.preventDefault();
        sendInvoiceService( formData )
    };


  return (
    <div className='container-bill'>
        <div className='container-bill-header'>
            <p>Ref</p>
            <p>Nombre del producto</p>
            <p>Cantida * Precio</p>
            <p>Total</p>
        </div>

        {
            products.length > 0
                ? products.map( (product:any) => (
                    <div key={ product.id } className='container-bill-products'>
                        <p>{ product.id }</p>
                        <p>{ product.product_name }</p>
                        <p>{ product.amount } x { product.sale_price }</p>
                        <p>{ product.total }</p>
                    </div>
                ))
                : <p>Todavia no tienes ningun producto en la factura</p>
        }

        <form >
            <button onClick={ (e)=>saveBill( e, products ) } >Facturar</button>
        </form>

    </div>
    
  )
}

export default Bill
