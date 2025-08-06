import { pool } from "../../connectionDb"

const checkIfTheEmailExistsService = async( email:string ) => {
  
    let status:number = 404;
    let message:string = ''


    try {

        if( !email ){

            message = 'No se recibio un email';
            return { status, message };
        }
            
        const { rows } = await pool.query(`SELECT * FROM users WHERE email = $1`,[email]);

        if( rows.length === 0 ){

            message = `No hay usuario registrado con este email ${email}`
            return { status, message }
        }

        status = 200;
        message = `Email encontrado: ${ email }, para el cambio de clave`
        return { status, message }

    } catch (error:any) {
        
        message = error.message;
        return { status, message }
    }

    
}

export {
    checkIfTheEmailExistsService
}
