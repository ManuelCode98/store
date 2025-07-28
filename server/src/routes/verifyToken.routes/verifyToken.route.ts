import { Router } from "../../allImports";
import { controllers } from "../../controllers/verifyToken.controllers/verifyToken.controllers";

const verifyTokenRoute = Router();

const { getToken } = controllers

verifyTokenRoute.get( '/verify-token', getToken );
// inventoryRoute.get( '/products-inventory/:id', getProduct );
// verifyTokenRoute.post( '/register', createUser );
// inventoryRoute.put( '/products-inventory/:id', updateProduct );
// inventoryRoute.delete( '/products-inventory/:id', deleteProduct );
// inventoryRoute.delete( '/products-inventory', deleteProducts );


export {
    verifyTokenRoute
}
