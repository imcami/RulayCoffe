import {Router} from "express"
import { getProducts, postProducts } from '../controllers/product.controller';


const routerProducts = Router()
 
routerProducts.get('/', getProducts)
routerProducts.get('/', postProducts)

export default routerProducts