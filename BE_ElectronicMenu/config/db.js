import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tientvth2209070:31122003@cluster0.ztgs2.mongodb.net/demo_pro').then(()=> console.log("DB Connected"));
}
