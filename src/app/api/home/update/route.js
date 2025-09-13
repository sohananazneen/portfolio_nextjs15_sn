import connectToDB from "@/database";
import HomeModel from "@/models/HomeModel";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const { _id, heading, summary } = extractData;
    const updateData = await HomeModel.findByIdAndUpdate(
      { _id },
      { heading, summary },
      { new: true }
    );
    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "Data updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: e.message });
  }
}
