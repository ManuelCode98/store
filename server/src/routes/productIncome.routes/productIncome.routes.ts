

import { Router } from "../../allImports";
import { controllers } from "../../controllers/productIncome.controllers/productIncome.controllers";

const productIncomeRoute = Router();

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = controllers

productIncomeRoute.get( '/products-income', getProducts );
productIncomeRoute.get( '/products-income/:id', getProduct );
productIncomeRoute.post( '/products-income', createProduct );
productIncomeRoute.put( '/products-income/:id', updateProduct );
productIncomeRoute.delete( '/products-income/:id', deleteProduct );


export {
    productIncomeRoute
}
