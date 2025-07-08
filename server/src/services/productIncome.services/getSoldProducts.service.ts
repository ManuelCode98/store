import { pool } from "../../connectionDb";

const getSoldProductsService = async( req:any, res:any )=>{ 

    try {
        const { rows } = await pool.query(`SELECT * FROM productIncome`);

        if( !rows.length ){
            res.status(404).send('No se encontraron productos en la lista de ventas...');
            return
        }

        res.status(200).json( {message: `Estos son los productos vendidos`, data: rows} );

    } catch (error:any) {
        res.status(409).send( error)
    }

};

export {
    getSoldProductsService
}