import mongoose from "mongoose";

let isConnected = false;

export const DBconnection = async () => {
  if (isConnected) {
    console.log("✅ Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    isConnected = mongoose.connection.readyState === 1;

    if (isConnected) {
      console.log("✅ MongoDB connected");
    } else {
      console.log("⚠️ MongoDB connection failed, state:", mongoose.connection.readyState);
    }
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
