import Product from "../models/product.model.js"
import mongoose from "mongoose";


export const getProducts = async(req,res) =>{ 
    try{
        const products = await Product.find({})
        res.status(200).json({sucess: true, data: products})
    }catch(error){
        console.error("Error in Show All products => ", error.message)
        res.status(500).json({sucess: false, message:"Server Error"})
    }
}
export const createProduct = async(req, res) => {
    const product = req.body
    
    if(!product.name || !product.price || !product.image){
        res.status(400).json({sucess: false, message: 'Please provide all fields/informations '})
    }

    try{
        const newProduct = new Product(product)
        await newProduct.save();
        res.status(201).json({sucess: true, data: newProduct})

    }catch (error) {
        console.error("Error in Create a new product => ", error.message)
        res.status(500).json({sucess: false, message:"Server Error"})
    }
}
export const updateProduct = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({sucess: false, message: "Invalid Product"})
    }

    try{
        const product = req.body;
        const updateProduct = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({sucess: true, data: updateProduct})

    }catch(error){
        res.status(500).json({sucess: false, message:"Server Error"})
    }
}
export const deleteProduct = async (req, res)=> {
    const {id} = req.params
    
    if(!id){
        res.status(404).json({sucess: false, message: "Please provide a Product Id"})
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({sucess: true, message: "product deleted"})
    }catch(error){
        console.error("Error in Delete a product => ", error.message)
        res.status(500).json({sucess: false, message:"Server Error"})
    }
}