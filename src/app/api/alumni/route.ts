import connectDB from "@/config/dbConnection"
import Alumni from "@/model/schema"
import { NextResponse } from "next/server"

export async function GET() {
    await connectDB()
    try {
        const alumni = await Alumni.find({})
        console.log(alumni)
        return NextResponse.json(alumni)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        return NextResponse.json({error: err.message})
    }
  }