import express from "express";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.routes.js"

import path from "path"
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());

const __dirname = path.resolve();

app.use("/api/products", productRouter)

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    connectDB();
    console.log('Server is Running')
})