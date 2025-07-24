import { http, swal } from '../../../../index';
import { savePhotoOfTheNewProductService } from '../../../services/photo/savePhotoOfTheNewProduct.service';
import getProductsService from '../../SearchBar/services/getProducts.service';



const updateProductService = async( e:any, updateSearchBarProducts:Function, formData:any ) => {

    e.preventDefault();

    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

    let assetValue:boolean = true;
    let genderValue:string = 'Dama';
    let sizeValue:string = 'Unica';

    const { 
        id,
        product_name, 
        brand,
        model, 
        category, 
        description, 
        color,
        purchase_price,
        sale_price,
        amount,
        material,
        supplier_name
    } = formData;

    if( category !== 'Deporte' ){

        genderValue = '';
        sizeValue = '';

    }

    if( amount <= 0 ){
        assetValue = false
    }

    const { url }:any = await savePhotoOfTheNewProductService(formData.photo);

    const { data } = await http.put(`${urlConnectionBanckend}api/products-inventory/${id}`, {
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

        // const products = await http.get(`${urlConnectionBanckend}api/products-inventory`, { timeout: 5000 })

        updateSearchBarProducts( await getProductsService() )
        swal.fire({
            text: data.message,
            icon:'success',
            color: 'red',
            background: '#00000087',
            timer: 3000,
            confirmButtonColor:'#01a503'
        })
    }    

}

export default updateProductService
