import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    nombre: {
        type: String, 
        required: true
    }, 
    descripcion:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

const ProductModels = model("Producto", ProductSchema)

export default ProductSchema