import { http } from "../../../..";



const urlBackend = import.meta.env.VITE_CONNECTION_DB;


const getProductsService = async() => {

    const { data } = await http.get(`${urlBackend}api/products-inventory`, { timeout: 5000 });

    // console.log(data.data);

    return data.data

}

export default getProductsService
