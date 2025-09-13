import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    aboutme: String,
    noofprojects: String,
    yearofexperience: String,
    noofclients: String,
    skills: String,
  },
  { timestamps: true }
);

const AboutModel =
  mongoose.models.About || mongoose.model("About", AboutSchema);
export default AboutModel;
