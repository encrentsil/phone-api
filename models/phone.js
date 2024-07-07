import { model, Schema } from "mongoose";
import { toJSON } from '@reis/mongoose-to-json'
const productSchema = new Schema({
    name: { type: String },
    category: { type: String, enum: ['Mobile Phones', 'Tablets', 'Accessories'] },
    description: { type: String },
    brand: { type: String },
    price: { type: Number },
    size: { type: String },
    color: { type: String },
    image: { type: String },
    status: {type: String, enum:['available', 'out of stocks']},
}, {
    timestamps: true
});

productSchema.plugin(toJSON);

export const ProductModel = model('product', productSchema)
