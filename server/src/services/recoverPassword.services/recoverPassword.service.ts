import { bcryptjs } from '../../allImports';
import { pool } from "../../connectionDb";
import { checkIfTheEmailExistsService } from './checkIfTheEmailExists.service';


const recoverPasswordService = async( req:any, res:any )=>{ 
    
    const {
        email,
        password, 
        verificationCode
    } = req.body;

    const saltRounds:number = 12;
    const hashedPassword = await bcryptjs.hash( password, saltRounds )

    try {
        
        // Todo aca va la consulta a la base de datos para saber si el codigo que me envia el front es igual al que esta guardado en db 

        const result = await pool.query(`SELECT * FROM verification_code WHERE email = $1`,[email])

        if( result.rows[0].length === 0 ){

            console.log(`Este correo ${email} no tiene ningun codigo asignado`);

            return res.status(400).json({
                success: false,
                message: `Este correo ${email} no tiene ningun codigo asignado`
            });
        }

        
        const storedCodeRecord = result.rows[0]; // El registro guardado

       // Comparar el código
        if ( storedCodeRecord.code !== verificationCode ){

            const resultAttempts = await pool.query(`SELECT * FROM verification_code WHERE email = $1`,[email])


            if( resultAttempts.rows[0].attempts < 3 ){

                const attempts:number = resultAttempts.rows[0].attempts + 1;

                await pool.query(`UPDATE verification_code SET attempts=$2 WHERE email = $1`,[email, attempts])

                return res.status(400).json({
                    success: false,
                    message: 'Código incorrecto'
                });


            }

            if( resultAttempts.rows[0].attempts >= 3 ){

               return res.status(400).json({
                    success: false,
                    message: 'Muchos intentos a la hora de ingresar el codigo de validacion espera 10 minutos'
                }); 

            }
                

                
        }
            

        // Verificar expiración (si usas TIMESTAMPTZ)
        if (new Date(storedCodeRecord.expires_at) < new Date()) {
            return res.status(400).json({
                success: false,
                message: 'El código ha expirado. Solicita uno nuevo.'
            });
        }

        
        const { rowCount } = await pool.query(`
            UPDATE users SET password = $2 WHERE email = $1`,
        [
            email,
            hashedPassword
        ]
    );
    
    if( rowCount && rowCount > 0 ){

        // 🧹 Eliminar el código usado
        await pool.query('DELETE FROM verification_code WHERE email = $1', [email]);

        res.json({
        success: true,
        message: 'Código verificado y contraseña actualizado'
        });
        return
    }

    res.status(404).send(`No pudimos actualizar la contraseña...`);

    } catch (error) {
        res.status(409).send( error ) ;
    }

};

export {
    recoverPasswordService
}