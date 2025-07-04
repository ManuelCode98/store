import { express } from './src/allImports';
import { dotenv } from './src/allImports';
import { inventoryRoute } from './src/routes/inventory.routes/inventory.routes';
import { productIncomeRoute } from './src/routes/productIncome.routes/productIncome.routes';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use( express.json() );

app.use( '/api', inventoryRoute );
app.use( '/api', productIncomeRoute );

app.listen( port, ()=>{

    console.log(`Servidor corriendo en el puerto ${ port }`);
})