import { getUsersService } from "../../services/register.services/getUsers.service";
import { registerService } from "../../services/register.services/register.service"



const controllers = {
    getUsers: (req:any, res:any)=>{

        getUsersService( req, res )
        
    }, 

    // getProduct: (req:any, res:any)=>{
    //     getProductService( req, res )            

    // }, 

    createUser: (req:any, res:any)=>{
        registerService( req, res );     

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