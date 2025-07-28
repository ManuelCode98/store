import { createProductService } from "../../services/inventory.services/createProduct.service";
import { deleteProductsService } from "../../services/inventory.services/deleteProducts.service";
import { deleteProductService } from "../../services/inventory.services/deleteProduct.service";
import { getProductService } from "../../services/inventory.services/getProduct.service";
import { getProductsService } from "../../services/inventory.services/getProducts.service";
import { updateProductService } from "../../services/inventory.services/updateProduct.service";


const controllers = {
    getProducts: (req:any, res:any)=>{

        getProductsService( req, res )
        
    }, 

    getProduct: (req:any, res:any)=>{
        getProductService( req, res )            

    }, 

    createProduct: (req:any, res:any)=>{
        createProductService( req, res )            

    }, 

    updateProduct: (req:any, res:any)=>{
    updateProductService( req, res )            

    }, 

    deleteProduct: (req:any, res:any)=>{
        deleteProductService( req, res )            

    },

    deleteProducts: (req:any, res:any)=>{
        deleteProductsService( req, res )            

    }

}

export {
    controllers
}