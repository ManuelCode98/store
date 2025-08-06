import { Router } from "../../allImports";
import { controllers } from "../../controllers/sendVerificationCodeCreateUser.controllers/sendVerificationCodeCreateUser.controllers";

const sendVerificationCodeCreateUserRoute = Router();

const { sendVerificationCodeCreateUser } = controllers

// sendVerificationCodeRoute.get( '/register', getUsers );
// inventoryRoute.get( '/products-inventory/:id', getProduct );
sendVerificationCodeCreateUserRoute.post( '/send-email-create-user', sendVerificationCodeCreateUser );
// inventoryRoute.put( '/products-inventory/:id', updateProduct );
// inventoryRoute.delete( '/products-inventory/:id', deleteProduct );
// inventoryRoute.delete( '/products-inventory', deleteProducts );


export {
    sendVerificationCodeCreateUserRoute
}
