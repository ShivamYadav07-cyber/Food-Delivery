import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://shivamyaduvanshi876_db_user:E2t2cAl9q00c4cRo@cluster0.as0vvp9.mongodb.net/Food_Delivery"
        );

        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connection Error:", error);
    }
};