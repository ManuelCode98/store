import { pool } from "../../connectionDb";

const getProductsService = async( req:any, res:any )=>{ 

    try {
        const { rows } = await pool.query(`SELECT * FROM product`);

        if( !rows.length ){
            res.status(404).send('No se encontraron productos...');
            return
        }

        res.status(200).json( {message: `Productos encontrados`, data: rows} );

    } catch (error:any) {
        res.status(409).send( error)
    }

};

export {
    getProductsService
}