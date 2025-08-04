import { bcryptjs } from '../../allImports';
import { pool } from "../../connectionDb";


const registerService = async( req:any, res:any )=>{ 
    
    const {
        name,
        email,
        password, 
        code
    } = req.body;

    const saltRounds:number = 12;
    const hashedPassword = await bcryptjs.hash( password, saltRounds )

    try {
        
        // Todo aca va la consulta a la base de datos para saber si el codigo que me envia el front es igual al que esta guardado en db 

        if( code.length < 6 ){

            return { message: 'Codigo incompleto' }
        }

        const result = pool.query(`SELECT * FROM verification_code WHERE email = $1`,[email])

        console.log( result );
        
    //     const { rowCount } = await pool.query(`
    //         INSERT INTO users ( 
    //             name,
    //             email,
    //             password,
    //             code
    //         ) 
    //         VALUES ( $1, $2, $3 )
    //     `,
    //     [
    //         name,
    //         email,
    //         hashedPassword
    //     ]
    // );
    
    // if( rowCount && rowCount > 0 ){

    //     res.status(200).json( {message: `Se creo el usuario de manera exitosa `} );
    //     return
    // }
    // res.status(404).send(`No pudimos crear el usuario...`);

    } catch (error) {
        res.status(409).send( error ) ;
    }

};

export {
    registerService
}