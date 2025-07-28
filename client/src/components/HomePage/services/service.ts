import { http } from '../../../../index';


const homePageService = async() => {
    
    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

    const { data } = await http.get(`${urlConnectionBanckend}api/products-inventory`);

    return data.data;


}

export default homePageService
