import { Router } from "../../allImports";
import { controllers } from "../../controllers/login.controllers/login.controllers";

const loginRoute = Router();

const { login } = controllers

// registerRoute.get( '/login', getUsers );
// inventoryRoute.get( '/products-inventory/:id', getProduct );
loginRoute.post( '/login', login );
// inventoryRoute.put( '/products-inventory/:id', updateProduct );
// inventoryRoute.delete( '/products-inventory/:id', deleteProduct );
// inventoryRoute.delete( '/products-inventory', deleteProducts );


export {
    loginRoute
}
