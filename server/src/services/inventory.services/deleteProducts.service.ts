import { pool } from "../../connectionDb";

const deleteProductsService = async( req:any, res:any )=>{ 

    try {
        
        const { rows } = await pool.query(`DELETE FROM product RETURNING *`);

        if( !rows.length ){
            res.status(404).send(`No hay productos para eliminar`);
            return
        }

        res.status(200).json( {message: `Productos eliminados de manera exitosa `,data:rows} );

    } catch (error) {
        console.log( error )        
    }

};

export {
    deleteProductsService
}