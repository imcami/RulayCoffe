import { model, Schema } from 'mongoose'
import paginate from 'mongoose-paginate-v2'

const orderSchema = Schema({
    name: String,
    size: {
        type: String,
        enum: ["latte", "americano", "flat-white", "cappuccino", "mocha", "espresso", "macchiato"],
        default: "americano"
    },
    price: Number,
    quantity: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

orderSchema.plugin(paginate)
const orderModel = model("order", orderSchema)

export default orderModel