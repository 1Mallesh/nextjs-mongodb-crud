import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { DBconnection } from "@/app/utils/config/db";

export async function GET() {
  try {
    await DBconnection();
    const status = mongoose.connection.readyState; // 0,1,2,3

    return NextResponse.json({
      message: "MongoDB connection status",
      status,
      isConnected: status === 1
    });
  } catch (error) {
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}
