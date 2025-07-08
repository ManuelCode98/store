import { pool } from "../../connectionDb";

const updateSoldProductService = async( req:any, res:any )=>{ 

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
        material,
        supplier_name
    } = req.body;


    try {
        const { rows } = await pool.query(`
            UPDATE productIncome 
            SET 
            product_name = $1, 
            model= $2, 
            category = $3, 
            description = $4, 
            size = $5, 
            color = $6, 
            gender = $7,
            purchase_price=$8,
            sale_price=$9,  
            amount = $10, 
            photo = $11,  
            material = $12
            supplier_name = $13,
            WHERE id = $14
            RETURNING *
        `,[  
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
    updateSoldProductService
}