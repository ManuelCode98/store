
import { getTokenService } from "../../services/verifyToken.services/getToken.service";





const controllers = {
    getToken: (req:any, res:any)=>{

        getTokenService( req, res );
        
    }, 

    // getProduct: (req:any, res:any)=>{
    //     getProductService( req, res )            

    // }, 

    // createUser: (req:any, res:any)=>{
    //     registerService( req, res );     

    // }, 

    // updateProduct: (req:any, res:any)=>{
    // updateProductService( req, res )            

    // }, 

    // deleteProduct: (req:any, res:any)=>{
    //     deleteProductService( req, res )            

    // },

    // deleteProducts: (req:any, res:any)=>{
    //     deleteProductsService( req, res )            

    // }

}

export {
    controllers
}