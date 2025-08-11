import { http } from '../../../../index';



const getProductsService = async(id:string)=>{

    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

    const result = await http.get(`${ urlConnectionBanckend }api/products-inventory/${id}`) ;
    console.log(result.data.data);
    
    return result.data.data;

}

export {
    getProductsService
}
