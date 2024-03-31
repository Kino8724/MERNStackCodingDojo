console.log("import working")
import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
async function dbConnect() {
  try {
    await connect(MONGODB_URI, {
      dbName: 'sample_mflix',
    });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.log("catch is hitting")
    console.log(error);
    throw error;
  }
}
export default dbConnect;


