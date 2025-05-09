import mongoose from "mongoose";
const {Schema} = mongoose

const productScheema = new Schema({
    name: {
        type: String,
        required: true  
    },
    price: {
        type: Number,
        required: true  
    },
    image:{
        type: String,
        required: true
    }
},  {timestamps: true})

const Product = mongoose.model("Product", productScheema)

export default Product