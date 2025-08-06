import { Router } from "../../allImports";
import { controllers } from "../../controllers/recoverPassword.controllers/recoverPassword.controllers";

const recoverPasswordRoute = Router();

const { recoverPassword } = controllers

// recoverPasswordRoute.get( '/register', getUsers );
// inventoryRoute.get( '/products-inventory/:id', getProduct );
recoverPasswordRoute.post( '/recover-password', recoverPassword );
// inventoryRoute.put( '/products-inventory/:id', updateProduct );
// inventoryRoute.delete( '/products-inventory/:id', deleteProduct );
// inventoryRoute.delete( '/products-inventory', deleteProducts );


export {
    recoverPasswordRoute
}
