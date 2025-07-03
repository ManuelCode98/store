import { pool } from "../connectionDb";

const createProductService = async( req:any, res:any )=>{ 

    const {
        product_name, 
        model, 
        category, 
        description, 
        size, 
        color, 
        gender,
        price,
        amount,
        photo,
        asset,
        material
    } = req.body;

    try {
        
        const { rows } = await pool.query(`
            INSERT INTO product ( 
                product_name, 
                model, 
                category, 
                description, 
                size, 
                color, 
                gender,
                price,
                amount,
                photo,
                asset,
                material
            ) 
            VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 )
            RETURNING *
        `,
        [
            product_name, 
            model, 
            category, 
            description, 
            size, 
            color, 
            gender,
            price,
            amount,
            photo,
            asset,
            material
        ]
    );

    res.status(200).json( rows[0] );

    } catch (error) {
        res.status(409).send( error ) ;
    }

};

export {
    createProductService
}