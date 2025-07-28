import { Router } from "../../allImports";
import { controllers } from "../../controllers/register.controllers/register.controllers";

const registerRoute = Router();

const { createUser, getUsers } = controllers

registerRoute.get( '/register', getUsers );
// inventoryRoute.get( '/products-inventory/:id', getProduct );
registerRoute.post( '/register', createUser );
// inventoryRoute.put( '/products-inventory/:id', updateProduct );
// inventoryRoute.delete( '/products-inventory/:id', deleteProduct );
// inventoryRoute.delete( '/products-inventory', deleteProducts );


export {
    registerRoute
}
