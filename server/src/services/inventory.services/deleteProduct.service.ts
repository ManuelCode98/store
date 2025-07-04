import { pool } from "../../connectionDb";

const deleteProductService = async( req:any, res:any )=>{ 

    const { id } = req.params;

    try {
        
        const { rows } = await pool.query(`DELETE FROM product WHERE id = $1 RETURNING *`,[id]);

        if( !rows.length ){
            res.status(404).send(`No hay ningun producto con el id: ${id} para eliminar`);
            return
        }

        res.status(200).json( {message: `Producto eliminado de manera exitosa `,data:rows[0]} );

    } catch (error) {
        
    }

};

export {
    deleteProductService
}