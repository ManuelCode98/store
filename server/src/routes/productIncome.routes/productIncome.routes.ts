

import { Router } from "../../allImports";
import { controllers } from "../../controllers/productIncome.controllers/productIncome.controllers";

const productIncomeRoute = Router();

const { getSoldProducts, getSoldProduct, addSoldProduct, updateSoldProduct, deleteSoldProduct } = controllers

productIncomeRoute.get( '/products-sold', getSoldProducts );
productIncomeRoute.get( '/products-sold/:id', getSoldProduct );
productIncomeRoute.post( '/products-sold/:id', addSoldProduct );
productIncomeRoute.put( '/products-sold/:id', updateSoldProduct );
productIncomeRoute.delete( '/products-sold/:id', deleteSoldProduct );


export {
    productIncomeRoute
}
