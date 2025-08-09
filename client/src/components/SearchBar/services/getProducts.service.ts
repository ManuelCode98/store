import { http } from "../../../..";


const getProductsService = async() => {

    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

    const { data } = await http.get(`${urlConnectionBanckend}api/products-inventory`, { timeout: 5000 });

    // console.log(data.data);

    return data.data

}

export default getProductsService
