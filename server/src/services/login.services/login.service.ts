import { bcryptjs, jwt } from '../../allImports';
import { pool } from "../../connectionDb";


const loginService = async( req:any, res:any )=>{ 
    
    const {
        email,
        password
    } = req.body;

    const JWT_SECRET = process.env.JWT_SECRET || 'token_secret_default';
    const SESSION_DURATION = '7d'; 


    try {
        
        const { rows } = await pool.query(`
            SELECT id, name, email, password FROM users WHERE email = $1
        `,
        [ email ]
        );

        if( rows.length === 0 ){

            return res.status(401).json({ 
                message: 'Credenciales inválidas' 
            });
        }

        const user = rows[0];
        
        const isPasswordValid = await bcryptjs.compare( password, user.password )

        if( !isPasswordValid ){

            return res.status(401).json({ 
                message: 'Credenciales inválidas' 
            });
        }

        // token de inicio de sesión

        const token = jwt.sign(
            { id: user.id, name: user.name, email: user.email },
            JWT_SECRET,
            { expiresIn: SESSION_DURATION }
        );

        // Enviar los datos del usuario
        res.status(200).json({

            message: 'Login exitoso',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error:any) {
        
        console.error('Error en login:', error);
        res.status(500).json({ 
            message: 'Error en el servidor',
            error: error.message 
        });
    }

};

export {
    loginService
}