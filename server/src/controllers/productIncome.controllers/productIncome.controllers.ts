import { addSoldProductService } from "../../services/productIncome.services/addSoldProduct.service"
import { deleteSoldProductService } from "../../services/productIncome.services/deleteSoldProduct.service"
import { getSoldProductService } from "../../services/productIncome.services/getSoldProduct.service"
import { getSoldProductsService } from "../../services/productIncome.services/getSoldProducts.service"
import { updateSoldProductService } from "../../services/productIncome.services/updateSoldProduct.service"



const controllers = {
    getSoldProducts: (req:any, res:any)=>{

        getSoldProductsService( req, res )
        
    }, 

    getSoldProduct: (req:any, res:any)=>{
        getSoldProductService( req, res )            

    }, 

    addSoldProduct: (req:any, res:any)=>{
        addSoldProductService( req, res )            

    }, 

    updateSoldProduct: (req:any, res:any)=>{
    updateSoldProductService( req, res )            

    }, 

    deleteSoldProduct: (req:any, res:any)=>{
        deleteSoldProductService( req, res )            

    }

}

export {
    controllers
}