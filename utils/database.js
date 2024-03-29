import mongoose from 'mongoose';

let isConnected = false //false on initial load

export const connectToDb = async () => {
  mongoose.set('strictQuery', true)
  if (isConnected) {
    console.log('MongoDb Connected')
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt', useNewURLParser: true, useUnifiedTopology: true
    })
    isConnected = true
    console.log('MongoDb Now Connected')
  } catch (error) {
    console.log(error)
  }
}