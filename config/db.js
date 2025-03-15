import mongoose from "mongoose";
 export const connectDB=async()=>{
    const MONGO_URI='mongodb+srv://Thejasree25:Theja9182@cluster0.ekvj2.mongodb.net/express?retryWrites=true&w=majority&appName=Cluster0'
    await mongoose.connect(MONGO_URI).then(()=>{
        console.log('Database Connected')
    })
}