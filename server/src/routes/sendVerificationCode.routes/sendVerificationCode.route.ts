import { Router } from "../../allImports";
import { controllers } from "../../controllers/sendVerificationCode.controllers/sendVerificationCode.controllers";

const sendVerificationCodeRoute = Router();

const { sendVerificationCode } = controllers

// sendVerificationCodeRoute.get( '/register', getUsers );
// inventoryRoute.get( '/products-inventory/:id', getProduct );
sendVerificationCodeRoute.post( '/send-email', sendVerificationCode );
// inventoryRoute.put( '/products-inventory/:id', updateProduct );
// inventoryRoute.delete( '/products-inventory/:id', deleteProduct );
// inventoryRoute.delete( '/products-inventory', deleteProducts );


export {
    sendVerificationCodeRoute
}
