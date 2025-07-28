import { bcryptjs } from '../../allImports';
import { pool } from "../../connectionDb";


const registerService = async( req:any, res:any )=>{ 
    
    const {
        name,
        email,
        password
    } = req.body;

    const saltRounds:number = 12;
    const hashedPassword = await bcryptjs.hash( password, saltRounds )

    try {
        
        const { rowCount } = await pool.query(`
            INSERT INTO users ( 
                name,
                email,
                password
            ) 
            VALUES ( $1, $2, $3 )
        `,
        [
            name,
            email,
            hashedPassword
        ]
    );
    
    if( rowCount && rowCount > 0 ){

        res.status(200).json( {message: `Se creo el usuario de manera exitosa `} );
        return
    }
    res.status(404).send(`No pudimos crear el usuario...`);

    } catch (error) {
        res.status(409).send( error ) ;
    }

};

export {
    registerService
}