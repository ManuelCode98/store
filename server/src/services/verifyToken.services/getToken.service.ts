import { jwt } from "../../allImports";

// import { pool } from "../../connectionDb";


const getTokenService = async( req:any, res:any )=>{ 

    const JWT_SECRET = process.env.JWT_SECRET || 'token_secreto_default';

    try {
        
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

        if (!token) {

            return res.status(401).json({ 
                message: 'Acceso denegado. No se proporcionó token.' 
            });
        }

        jwt.verify(token, JWT_SECRET, (err:any, decoded:any) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ 
                        message: 'Token expirado' 
                    });
                }
                return res.status(403).json({ 
                    message: 'Token inválido' 
                });
            }
        
            // Guardar datos del usuario en la request
            req.user = decoded;
        });

    } catch (error) {
        console.log(error);
    }

    // try {
    //     const { rows } = await pool.query(`SELECT * FROM users`);

    //     if( !rows.length ){
    //         res.status(404).send('No se encontraron usuarios...');
    //         return
    //     }

    //     res.status(200).json( {message: `Usuarios encontrados`, data: rows} );

    // } catch (error:any) {
    //     res.status(409).send( error)
    // }

};

export {
    getTokenService
}