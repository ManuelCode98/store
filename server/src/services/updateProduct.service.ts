import { pool } from "../connectionDb";

const updateProductService = async( req:any, res:any )=>{ 

    try {
        const { rows } = await pool.query(``);
    } catch (error) {
        
    }

};

export {
    updateProductService
}