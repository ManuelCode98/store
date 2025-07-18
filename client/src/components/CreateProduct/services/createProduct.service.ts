import { http } from '../../../../index';
import { savePhotoOfTheNewProductService } from '../../../services/photo/savePhotoOfTheNewProduct.service';


const createProductService = async( e:any, formData:any ) => {

    e.preventDefault();

    let urlPhoto:string = '';

    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

    const { 
        product_name, 
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
        supplier_name 
    } = formData;


    const { url }:any = await savePhotoOfTheNewProductService(formData.photo);

    const { data } = await http.post(`${urlConnectionBanckend}api/products-inventory`, {
        product_name, 
        model, 
        category, 
        description, 
        size, 
        color, 
        gender,
        purchase_price,
        sale_price,
        amount,
        photo: urlPhoto,
        asset,
        material,
        supplier_name  
    }, { timeout: 5000 })



}

export default createProductService
