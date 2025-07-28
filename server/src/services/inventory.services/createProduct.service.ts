import { pool } from "../../connectionDb";

const createProductService = async( req:any, res:any )=>{ 

    const {
        product_name,
        brand, 
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
        asset,
        material,
        supplier_name
    } = req.body;

    try {
        
        const { rows } = await pool.query(`
            INSERT INTO product ( 
                product_name,
                brand, 
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
                asset,
                material,
                supplier_name
            ) 
            VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15 )
            RETURNING *
        `,
        [
            product_name,
            brand, 
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
            asset,
            material,
            supplier_name
        ]
    );
    
    if( !rows.length ){
        res.status(404).send(`No pudimos crear el producto...`);
        return
    }
    res.status(200).json( {message: `Se creo un producto de manera exitosa `,data:rows[0]} );

    } catch (error) {
        res.status(409).send( error ) ;
    }

};

export {
    createProductService
}