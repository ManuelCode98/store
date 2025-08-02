import { Router } from "../../allImports";
import { controllers } from "../../controllers/logOut.controllers/logOut.controllers";

const logOutRoute = Router();

const { logOut } = controllers

// registerRoute.get( '/login', getUsers );
// inventoryRoute.get( '/products-inventory/:id', getProduct );
logOutRoute.post( '/log-out', logOut );
// inventoryRoute.put( '/products-inventory/:id', updateProduct );
// inventoryRoute.delete( '/products-inventory/:id', deleteProduct );
// inventoryRoute.delete( '/products-inventory', deleteProducts );


export {
    logOutRoute
}
