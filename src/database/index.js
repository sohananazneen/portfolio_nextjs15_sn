import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      " mongodb+srv://mongodb_username_sn:sn_db_pass@cluster0.5ox2zvg.mongodb.net/"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
