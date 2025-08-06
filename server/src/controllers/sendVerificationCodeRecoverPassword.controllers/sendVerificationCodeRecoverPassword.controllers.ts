import { sendVerificationCodeRecoverPasswordService } from "../../services/recoverPassword.services/sendVerificationCodeRecoverPassword.service";




const controllers = {
    // getUsers: (req:any, res:any)=>{

    //     getUsersService( req, res )
        
    // }, 

    // getProduct: (req:any, res:any)=>{
    //     getProductService( req, res )            

    // }, 

    sendVerificationCodeRecoverPassword: (req:any, res:any)=>{
        sendVerificationCodeRecoverPasswordService( req, res );     

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