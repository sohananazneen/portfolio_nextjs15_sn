import connectToDB from "@/database";
import ExperienceModel from "@/models/ExperienceModel";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await ExperienceModel.find({});

    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
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
