
import { http } from '../../../../index';




const sendInvoiceService = async( formData:any ) => {
  
    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

    console.log(formData);
    // await http.post(`${ urlConnectionBanckend }api/send-invoice`, formData);

}

export default sendInvoiceService
