import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { getProductsService } from './services/getProducts.service';
import { useLocation } from '../../../index';
import './ProductPage.css';

interface ProductData {
    amount:string;
    asset:string;
    brand:string; 
    category:string;
    color:string; 
    description:string;
    gender:string;
    id:string;
    material:string;
    model:string; 
    photo:string;
    product_name:string; 
    purchase_price:string;
    sale_price:string; 
    size:string; 
    supplier_name:string; 
}


const ProductPage = () => {

    const localtion = useLocation();
    const currentPaht = localtion.pathname;

    const [ productState, setProductState ] = useState<ProductData>({
        id:'',
        product_name:'', 
        brand: '',
        model:'', 
        category:'', 
        description:'', 
        size:'', 
        color:'', 
        gender:'',
        purchase_price:'',
        sale_price:'',
        amount:'',
        photo:'',
        asset:'',
        material:'',
        supplier_name:''
    })

    useEffect(()=>{
        
        const getId = currentPaht.split('/product/');
        const id = getId[1];
        
        (async()=>{

            const getProduct = await getProductsService(id)

            setProductState( getProduct );
        })();

  },[])  

  return (
    <div className="container-show-product">{ productState && 
            <div key={ productState.id } className='container-product' >

              <div className='container-product-page-photo'>
                  <img className='product-page-photo' src={ productState.photo } />
              </div>

              <div className='product-features'>
                <div className='container-data'>
                    <span className='home-page-product-name'>{ productState.product_name }</span>
                    <span className='home-page-model'>{ productState.model }</span>
                    <div className="rating" aria-label="Calificación: 4.5 de 5 estrellas">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="rating-text">{/*4.5*/}</span>
                    </div>
                    <span className='home-page-sale-price'>cop { productState.sale_price }</span>
                </div>

                <div className='container-button-buy' >
                    <span className='button-name-buy' >Comprar</span>
                </div>
              </div>

            </div>
            }
          </div>
  );
}

export default ProductPage
