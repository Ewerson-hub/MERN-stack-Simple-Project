import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({path: '../.env'})

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1);//1 = failure, 0 = sucess
    }
}
