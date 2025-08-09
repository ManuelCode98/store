import { http, swal } from '../../../../index';
import { savePhotoOfTheNewProductService } from '../../../services/photo/savePhotoOfTheNewProduct.service';
import getProductsService from '../../SearchBar/services/getProducts.service';


const createProductService = async( e:any, formData:any, setAllProductsState:Function ) => {

    e.preventDefault();

    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;
    let assetValue:boolean = true;
    let genderValue:string = 'Dama';
    let sizeValue:string = 'Unica';

    const { 
        product_name,
        brand, 
        model, 
        category, 
        description, 
        size, 
        color, 
        gender,
        purchase_price,
        sale_price,
        amount,
        asset,
        material,
        supplier_name,
    } = formData;

    if( category !== 'Deporte' ){

        genderValue = '';
        sizeValue = '';

    }

    if( amount <= 0 ){
        assetValue = false
    }

    const { url }:any = await savePhotoOfTheNewProductService(formData.photo);

    const { data } = await http.post(`${urlConnectionBanckend}api/products-inventory`, {
        product_name, 
        brand,
        model, 
        category, 
        description, 
        size: sizeValue, 
        color, 
        gender: genderValue,
        purchase_price,
        sale_price,
        amount,
        photo: url,
        asset: assetValue,
        material,
        supplier_name,
    }, { timeout: 5000 })

    if( data ){
        swal.fire({
            text: data.message,
            icon:'success',
            color: 'red',
            background: '#00000087',
            timer: 3000,
            confirmButtonColor:'#01a503'
        })
    } 

    setAllProductsState( await getProductsService() )
}

export default createProductService
