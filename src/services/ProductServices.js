import jugueteModel from "../models/ProductModels.js"
import Products from '../components/products/Products';

export const findProducts = async () => {
    try {
        const Products = await productModel.find()
        return Products
    } catch (error) {
        return error
    }

}

export const createToy = async (Products) => {
    try {
        const newProducts = new productModel(Products)
        await newProducts.save()
        return newProducts
    } catch (error) {
        return error
    }

}

