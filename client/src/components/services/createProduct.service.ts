import { http } from '../../../index';
import { savePhotoOfTheNewProductService } from './photo/savePhotoOfTheNewProduct.service';


const createProductService = async( e:any, formData:any ) => {

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

    // const optimizePhoto = await optimizeImageService( formData.photo );

    const { success, url }:any = await savePhotoOfTheNewProductService(formData.photo);

    console.log(success, url);

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
        photo: url,
        asset,
        material,
        supplier_name  
    }, { timeout: 5000 })

    console.log( data );

}

export default createProductService
