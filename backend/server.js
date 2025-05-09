import express from "express";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.routes.js"
const app = express()

app.use(express.json());

app.use("/api/products", productRouter)

app.listen("5000", () => {
    connectDB();
    console.log('Server is Running')
})