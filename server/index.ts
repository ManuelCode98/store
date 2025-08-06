import { express } from './src/allImports';
import { dotenv } from './src/allImports';
import { inventoryRoute } from './src/routes/inventory.routes/inventory.routes';
import { productIncomeRoute } from './src/routes/productIncome.routes/productIncome.routes';
import { cors } from './src/allImports';
import { registerRoute } from './src/routes/register.routes/register.routes';
import { loginRoute } from './src/routes/login.routes/login.routes';
import { verifyTokenRoute } from './src/routes/verifyToken.routes/verifyToken.route';
import { logOutRoute } from './src/routes/logOut.routes/logOut.route';
import { sendVerificationCodeCreateUserRoute } from './src/routes/sendVerificationCodeCreateUser.routes/sendVerificationCodeCreateUser.route';
import { recoverPasswordRoute } from './src/routes/recoverPassword.routes/recoverPassword.route';
import { sendVerificationCodeRecoverPasswordRoute } from './src/routes/sendVerificationCodeRecoverPassword.routes/sendVerificationCodeRecoverPassword.route';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use( cors() )
app.use( express.json() );

app.use( '/api', inventoryRoute );
app.use( '/api', productIncomeRoute );
app.use( '/api', registerRoute );
app.use( '/api', loginRoute );
app.use( '/api', verifyTokenRoute );
app.use( '/api', logOutRoute );
app.use( '/api', sendVerificationCodeCreateUserRoute );
app.use( '/api', sendVerificationCodeRecoverPasswordRoute );
app.use( '/api', recoverPasswordRoute );

app.listen( port, ()=>{

    console.log(`Servidor corriendo en el puerto ${ port }`);
})