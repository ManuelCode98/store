import { Router } from "../../allImports";
import { controllers } from "../../controllers/inventory.controllers/inventory.controllers";

const inventoryRoute = Router();

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = controllers

inventoryRoute.get( '/products-inventory', getProducts );
inventoryRoute.get( '/products-inventory/:id', getProduct );
inventoryRoute.post( '/products-inventory', createProduct );
inventoryRoute.put( '/products-inventory/:id', updateProduct );
inventoryRoute.delete( '/products-inventory/:id', deleteProduct );


export {
    inventoryRoute
}
