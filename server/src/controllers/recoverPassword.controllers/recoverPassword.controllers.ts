import { recoverPasswordService } from "../../services/recoverPassword.services/recoverPassword.service";




const controllers = {
    // getUsers: (req:any, res:any)=>{

    //     getUsersService( req, res )
        
    // }, 

    // getProduct: (req:any, res:any)=>{
    //     getProductService( req, res )            

    // }, 

    recoverPassword: (req:any, res:any)=>{
        recoverPasswordService( req, res );     

    }, 

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