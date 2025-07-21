import { http, swal } from '../../../../index';
import { savePhotoOfTheNewProductService } from '../../../services/photo/savePhotoOfTheNewProduct.service';


const deleteProductService = async( e:any, formData:any ) => {

    e.preventDefault();
    const { id } = formData;

    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;


   try {
    
        const { data } = await http.delete(`${urlConnectionBanckend}api/products-inventory/${id}`, { timeout: 5000 })

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

        return {
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
        }

   } catch (error:any) {
    
        console.log(error.message);
        
        swal.fire({
            text: error.message,
            icon:'error',
            color: 'red',
            background: '#00000087',
            timer: 3000,
            confirmButtonColor:'#01a503'
        });

   }

}

export default deleteProductService
