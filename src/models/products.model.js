import { Schema, model } from "mongoose";

const productShema= new Schema({
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    brand: String,
    price: Number,
    cost: Number,
    stock: Number,
    experidDate: String,
    status:Number
},{
    versionKey: false, // Para que no se inserte en los documentos "_versionV"
    timestamps:true
});

export default model('Products', productShema); // y ocupamos el esquema que vamos a ocupar