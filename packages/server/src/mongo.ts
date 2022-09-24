import mongoose from 'mongoose';

export async function connectToMongo(): Promise<mongoose.Mongoose> {
  return await mongoose.connect(
    process.env.MONGO_URI || 'mongodb://localhost/27017',
  );
}
