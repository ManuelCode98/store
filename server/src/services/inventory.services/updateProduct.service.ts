import { pool } from "../../connectionDb";

const updateProductService = async( req:any, res:any )=>{ 

    const { id } = req.params;
   
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
        supplier_name,
    } = req.body;


    try {
        const { rows } = await pool.query(`
            UPDATE product 
            SET 
            product_name = $1, 
            brand = $2,
            model = $3, 
            category = $4, 
            description = $5, 
            size = $6, 
            color = $7, 
            gender = $8, 
            purchase_price = $9,
            sale_price = $10, 
            amount = $11, 
            photo = $12, 
            asset = $13, 
            material = $14,
            supplier_name = $15
            WHERE id = $16
            RETURNING *
        `,[  
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
            supplier_name,
            id 
        ]);

        if( !rows.length ){
            res.status(404).send(`No se encontro ningun producto con el id: ${id}`);
            return
        }
        
        res.status(200).json( {message: `Se actualizo el producto de manera exitosa `,data:rows[0]} );
    } catch (error) {
        res.status(409).send( error )
    }

};

export {
    updateProductService
}