import { bcryptjs } from '../../allImports';
import { pool } from "../../connectionDb";
import sendEmailService from '../sendEmail.services/sendEmail.service';


const sendVerificationCodeService = async( req:any, res:any )=>{ 
    //Todo modificar todo esto para enviar el codigo por correo y validarlo para recibir
    // Todo desde el frontEnd el mismo codigo que se envio desde el backend
    const {
        code,
        email,
    } = req.body;

    // console.log(req.body);

    // Generar código aleatorio
    const expirationTimeMs = 3 * 60 * 1000; // 180,000 ms
    const expires_at =  new Date(Date.now() + expirationTimeMs );
    
    // const generatedCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 dígitos
    try {

    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 dígitos
        const { rowCount } = await pool.query(`
            INSERT INTO verification_code ( 
                email,
                code,
                expires_at,
                created_at,
                attempts
            ) 
            VALUES ( $1, $2, $3, NOW(), 0 )
            ON CONFLICT (email) 
            DO UPDATE SET code = $2, created_at = NOW(), expires_at = $3, attempts = 0,
        `,
        [
            email,
            generatedCode,
            expires_at
        ]
    );
    
    console.log(rowCount);

    if( rowCount && rowCount > 0 ){

        const { status }:any = sendEmailService( email, generatedCode );
        res.status(200).json( {message: `Se guardo el email con su respectivo codigo`} );

        if( status === 200 ){
            // Todo aca implementaremos la logica para seguir con la creacion de la cuenta
            // Todo si el codigo es enviado correctamente
        }
        return
    }
    res.status(404).send(`No pudimos crear el usuario...`);

    } catch (error) {
        res.status(409).send( error ) ;
    }

// sendEmailService( email, generatedCode );
    ///////////////////////////

    
    // try {
        
    // const createCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 dígitos
    //     const { rowCount } = await pool.query(`
    //         INSERT INTO verification_code ( 
    //             code,
    //             email,
    //         ) 
    //         VALUES ( $1, $2 )
    //     `,
    //     [
    //         code,
    //         email
    //     ]
    // );
    
    // if( rowCount && rowCount > 0 ){

    //     res.status(200).json( {message: `Se guardo el email con su respectivo codigo`} );
    //     return
    // }
    // res.status(404).send(`No pudimos crear el usuario...`);

    // } catch (error) {
    //     res.status(409).send( error ) ;
    // }

};

export {
    sendVerificationCodeService
}