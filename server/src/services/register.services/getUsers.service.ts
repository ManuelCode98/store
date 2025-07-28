import { pool } from "../../connectionDb";

const getUsersService = async( req:any, res:any )=>{ 
// console.log('hola');
    try {
        const { rows } = await pool.query(`SELECT * FROM users`);

        if( !rows.length ){
            res.status(404).send('No se encontraron usuarios...');
            return
        }

        res.status(200).json( {message: `Usuarios encontrados`, data: rows} );

    } catch (error:any) {
        res.status(409).send( error)
    }

};

export {
    getUsersService
}