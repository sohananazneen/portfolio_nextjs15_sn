import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema(
  {
    degree: String,
    year: String,
    institution: String,
  },
  { timestamps: true }
);

const EducationModel =
  mongoose.model.Education || mongoose.model("Education", EducationSchema);
export default EducationModel;
