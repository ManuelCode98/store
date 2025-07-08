import { pool } from "../../connectionDb";


const addSoldProductService = async( req:any, res:any )=>{ 

    const { id } = req.params;

    const {
        product_name, 
        model, 
        category, 
        description, 
        size, 
        color, 
        gender,
        purchase_price,
        sale_price,
        amount,
        photo,
        material
    } = req.body;

    try {
        
        const { rows } = await pool.query(`
            INSERT INTO productIncome ( 
                id,
                product_name, 
                model, 
                category, 
                description, 
                size, 
                color, 
                gender,
                purchase_price,
                sale_price,
                amount,
                photo,
                material
            ) 
            VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 )
            RETURNING *
        `,
        [
            id,
            product_name, 
            model, 
            category, 
            description, 
            size, 
            color, 
            gender,
            purchase_price,
            sale_price,
            amount,
            photo,
            material
        ]
    );
    
    if( !rows.length ){
        res.status(404).send(`No pudimos guardar el producto en la lista de ventas...`);
        return
    }
    res.status(200).json( {message: `Se agrego el producto a la lista de ventas `,data:rows[0]} );

    } catch (error) {
        res.status(409).send( error ) ;
    }

};

export {
    addSoldProductService
}