import { pool } from "../../connectionDb";

const updateProductService = async( req:any, res:any )=>{ 

    const { id } = req.params;
   
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
            UPDATE product 
            SET 
            product_name = $1, 
            model= $2, 
            category = $3, 
            description = $4, 
            size = $5, 
            color = $6, 
            gender = $7, 
            price = $8, 
            amount = $9, 
            photo = $10, 
            asset = $11, 
            material = $12
            WHERE id = $13
            RETURNING *
        `,[  
            product_name, 
            model, category, 
            description, 
            size, 
            color, 
            gender, 
            price, 
            amount, 
            photo, 
            asset, 
            material,
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