import { Router } from "../allImports";
import { controllers } from "../controllers/controllers";

const route = Router();

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = controllers

route.get( '/products', getProducts );
route.get( '/products/:id', getProduct );
route.post( '/products', createProduct );
route.put( '/products', updateProduct );
route.delete( '/products', deleteProduct );


export {
    route
}
