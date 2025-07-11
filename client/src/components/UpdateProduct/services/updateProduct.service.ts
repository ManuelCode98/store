import { http } from '../../../../index';
import { savePhotoOfTheNewProductService } from '../../../services/photo/savePhotoOfTheNewProduct.service';


const updateProductService = async( e:any, formData:any ) => {

    e.preventDefault();

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


    const { success, url }:any = await savePhotoOfTheNewProductService(formData.photo);

    const { data } = await http.put(`${urlConnectionBanckend}api/products-inventory/`, {
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
        photo: url,
        asset,
        material,
        supplier_name  
    }, { timeout: 5000 })



}

export default updateProductService
