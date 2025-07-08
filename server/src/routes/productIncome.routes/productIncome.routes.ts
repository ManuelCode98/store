

import { Router } from "../../allImports";
import { controllers } from "../../controllers/productIncome.controllers/productIncome.controllers";

const productIncomeRoute = Router();

const { getSoldProducts, getSoldProduct, addSoldProduct, updateSoldProduct, deleteSoldProduct } = controllers

productIncomeRoute.get( '/products-income', getSoldProducts );
productIncomeRoute.get( '/products-income/:id', getSoldProduct );
productIncomeRoute.post( '/products-income/:id', addSoldProduct );
productIncomeRoute.put( '/products-income/:id', updateSoldProduct );
productIncomeRoute.delete( '/products-income/:id', deleteSoldProduct );


export {
    productIncomeRoute
}
