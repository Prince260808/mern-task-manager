import mongoose from 'mongoose';

const connectDB = async () => {
   try{
    const conct = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conct.connection.host}`);
   }catch(error){
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
   }
}

export default connectDB;
