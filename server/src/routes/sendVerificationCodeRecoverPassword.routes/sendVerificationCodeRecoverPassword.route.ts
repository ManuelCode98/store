import { Router } from "../../allImports";
import { controllers } from "../../controllers/sendVerificationCodeRecoverPassword.controllers/sendVerificationCodeRecoverPassword.controllers";

const sendVerificationCodeRecoverPasswordRoute = Router();

const { sendVerificationCodeRecoverPassword } = controllers

// sendVerificationCodeRoute.get( '/register', getUsers );
// inventoryRoute.get( '/products-inventory/:id', getProduct );
sendVerificationCodeRecoverPasswordRoute.post( '/send-email-recover-password', sendVerificationCodeRecoverPassword );
// inventoryRoute.put( '/products-inventory/:id', updateProduct );
// inventoryRoute.delete( '/products-inventory/:id', deleteProduct );
// inventoryRoute.delete( '/products-inventory', deleteProducts );


export {
    sendVerificationCodeRecoverPasswordRoute
}
