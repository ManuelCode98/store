import { express } from './src/allImports';
import { dotenv } from './src/allImports';
import { route } from './src/routes/routes';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use( express.json() );

app.use( '/api', route );

app.listen( port, ()=>{

    console.log(`Servidor corriendo en el puerto ${ port }`);
})