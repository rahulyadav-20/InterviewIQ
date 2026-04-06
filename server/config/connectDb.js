import mongoose from "mongoose";

const connectDb =async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongo Database connect")
    }catch(error){
        console.log(`Mongo Databse Error ${error}`)
    }
}

export default connectDb