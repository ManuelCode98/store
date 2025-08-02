import { bcryptjs, jwt } from '../../allImports';
import { pool } from "../../connectionDb";


const logOutService = async( req:any, res:any )=>{ 
    

    const authHeader = req.headers['authorization'];
    const JWT_SECRET = process.env.JWT_SECRET || 'token_secret_default';
    // const SESSION_DURATION = '7d'; 

    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ 
            message: 'Acceso denegado. Token no proporcionado.' 
        });
    }

    jwt.verify( token, JWT_SECRET, ( err:any, user:any )=>{

        if (err) {
            return res.status(401).json({ 
                message: 'Token inválido o expirado.' 
            });
        }


    } );

    try {
      // Decodificamos el token para obtener cuándo expira
    //   const decoded = jwt.decode(token);
        const decoded = jwt.decode(token) as { exp?: number } | null;
        const expiresAt = decoded?.exp || 0; // timestamp en segundos

        // 🔴 Paso 3: INSERTAR el token en la tabla token_blacklist
        const insertQuery = `
            INSERT INTO token_blacklist (token, expires_at)
            VALUES ($1, $2)
            ON CONFLICT (token) DO NOTHING  -- si ya existe, no hagas nada
        `;
        await pool.query(insertQuery, [token, expiresAt]);

        // ✅ Paso 4: Respuesta exitosa
        return res.status(200).json({
            message: 'Sesión cerrada correctamente.',
        });

    } catch (error) {
        // Si falla al guardar en la base de datos
        console.error('Error al cerrar sesión:', error);
        return res.status(500).json({
            message: 'Error interno del servidor.',
        });
    }

    
    // Todo este es solo para verificar si esta el token en la lista negra
    // try {
    //     const consultTokenBlacklist = `SELECT * FROM TABLE token_blacklist WHERE token = $1`;
    //     const result = await pool.query( consultTokenBlacklist, [token] );
        
    //     if( result.rows.length > 0 ){

    //         return res.status(401).json({ 
    //             message: 'Token inválido: la sesión ha sido cerrada.' 
    //         });
    //     }

    //     // req.user = user;

    // } catch (dbError) {

    //     console.error('Error al verificar blacklist:', dbError);
    //     return res.status(500).json({ 
    //         message: 'Error interno del servidor.' 
    //     });
    // }


};

export {
    logOutService
}