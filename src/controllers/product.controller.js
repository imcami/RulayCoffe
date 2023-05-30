import { findProducts, createProducts } from '../services/ProductServices';
import { getProducts } from './product.controller';

export const getProducts = async (req, res) => {
    try {
        const Products = await findProducts()
        res.status(200).send(Products)

    } catch (error) {
        res.status(500).send("Ocurrio un error en getProducts", error)
    }

}

export const postProduct = async (req, res) => {
    try {
        const { nombre, descripcion, precio } = req.body
        const newProduct = createProducts({ nombre, descripcion, precio })
        res.status(200).send(createProducts)
    } catch (error) {
        res.status(500).send('Ocurrio un error en postProducts', error)
    }

}