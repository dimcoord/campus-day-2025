import mongoose from 'mongoose';

connectDB().catch(err => console.log(err));

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI!).then(() => {
    console.log("Connected to DB")
  });
}

export default connectDB