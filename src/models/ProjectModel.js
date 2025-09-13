import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    website: String,
    technologies: String,
    github: String,
  },
  { timestamps: true }
);

const ProjectModel =
  mongoose.model.Project || mongoose.model("Project", ProjectSchema);
export default ProjectModel;
