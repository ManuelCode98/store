import { logOutService } from "../../services/logOut.services/logOut.service";




const controllers = {
    // getUsers: (req:any, res:any)=>{

    //     getUsersService( req, res )
        
    // }, 

    // getProduct: (req:any, res:any)=>{
    //     getProductService( req, res )            

    // }, 

    logOut: (req:any, res:any)=>{
        logOutService( req, res );     

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