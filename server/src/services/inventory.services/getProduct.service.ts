import { pool } from "../../connectionDb";

const getProductService = async( req:any, res:any )=>{ 

    const { id } = req.params;

    try {
        const { rows } = await pool.query(`SELECT * FROM product WHERE id=$1`,[id])

        if( !rows.length ){
            res.status(404).send(`No se encontro el producto con el id ${ id }`);
            return
        }

        res.status(200).json( {message: `Producto encontrado con el id: ${id}`, data:rows[0] } );

    } catch (error) {
        res.status(409).send(error)    
    }

};

export {
    getProductService
}