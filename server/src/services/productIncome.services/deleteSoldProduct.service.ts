import { pool } from "../../connectionDb";

const deleteSoldProductService = async( req:any, res:any )=>{ 

    const { id } = req.params;

    try {
        
        const { rows } = await pool.query(`DELETE FROM productIncome WHERE id = $1 RETURNING *`,[id]);

        if( !rows.length ){
            res.status(404).send(`No hay ningun producto con el id: ${id} para eliminar en la lista de ventas`);
            return
        }

        res.status(200).json( {message: `Producto eliminado de manera exitosa de la lista de ventas`,data:rows[0]} );

    } catch (error) {
        
    }

};

export {
    deleteSoldProductService
}