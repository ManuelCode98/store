import { useEffect, useState } from 'react';
import { Link } from '../../../index';
import homePageService from './services/service';
import './HomePage.css';


interface ProductData {
  amount:string;
  asset:string;
  brand:string; 
  category:string;
  color:string; 
  created_at:string;
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


const HomePage = () => {
  
  const [productData, setProductData] = useState([]);
  
  const linkWhatsapp = 'https://wa.me/3157382433';
  const backgroundVideo = `${import.meta.env.PUBLIC_URL}/video/video-deportivo.mp4`;

  useEffect(() => {
    const getAllProducts = async()=>{ 

      setProductData( await homePageService( ) );

     };

     getAllProducts();
  }, []);

  return (
    <div className="container-home-page">
        <div className="header-home-page">
          <Link to={'/login'} >Iniciar sesión</Link>
          <Link to={'/register'}>Crear cuenta</Link>
        </div>

        <div className='home-page-background' >
          <img src='https://i.ibb.co/mFGkW0Gr/pexels-maksgelatin-4775192.jpg' />
          {/* <img src='https://i.ibb.co/ZzY9tXHH/pexels-thelazyartist-1271428.jpg' /> */}
          <h1 className='home-page-title'>FITNESS MATI</h1>
        </div>
        <div className='container-video'>
          <video className='video' autoPlay muted loop>
            <source src={'./video/video-deportivo.mp4'} />
          </video>
        </div>
        <div className="container-show-product">{ productData.length && productData.map( (product:ProductData) => (
          <div key={ product.id } className='container-product-photo' >
            <img src={ product.photo } />
            <div className='container-name-and-price'>
              <span className='home-page-product-name'>{ product.product_name }</span>
              <span className='home-page-sale-price'>cop { product.sale_price }</span>
            </div>
            <div className='container-button-buy' >
              <span className='button-name-buy' >Comprar</span>
            </div>
          </div>
        ) ) }
        </div>

        <div className='icons-contact'>
          <a href={linkWhatsapp} target='_blank'><img className='icon whatsapp' src={'./icon/whatsapp.png'}/></a>
        </div>
    </div>
  )
}

export default HomePage
