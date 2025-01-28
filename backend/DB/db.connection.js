import mongoose from "mongoose";

const conn = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@meterinfo.plphr.mongodb.net/`);

        console.log('Successfully connected to the database');
    } catch (error) {
        console.error(`Error in DB connection: `, error);

    }
}


export default conn;