import { bcryptjs } from '../../allImports';
import { pool } from "../../connectionDb";


const verificationCodeService = async( req:any, res:any )=>{ 
    //Todo modificar todo esto para enviar el codigo por correo y validarlo para recibir
    // Todo desde el frontEnd el mismo codigo que se envio desde el backend
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
    verificationCodeService as registerService
}