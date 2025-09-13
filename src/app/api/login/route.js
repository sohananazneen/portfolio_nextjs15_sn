import connectToDB from "@/database";
import UserModel from "@/models/UserModel";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();
    const checkUser = await UserModel.findOne({ username });

    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }
    const hashPassword = await hash(checkUser.password, 12);
    const checkPassword = await compare(password, hashPassword);
    if (!checkPassword) {
      return NextResponse.json({
        success: false,
        message: "Invalid password",
      });
    }
    return NextResponse.json({
      success: true,
      message: "Login successful",
    });
  } catch (e) {
    console.log(e);
  }
}
