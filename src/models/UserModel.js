import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;
