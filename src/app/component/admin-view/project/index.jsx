"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "title",
    placeholder: "Enter Project Title",
    type: "text",
    label: "Project Title",
  },
  {
    name: "website",
    placeholder: "Enter Project Website Link",
    type: "text",
    label: "Project Website Link",
  },
  {
    name: "technologies",
    placeholder: "Enter Project Technologies Used",
    type: "text",
    label: "Project Technologies Used",
  },
  {
    name: "github",
    placeholder: "Enter Project GitHub Link",
    type: "text",
    label: "Project GitHub Link",
  },
];
export default function AdminProjectView({
  formData,
  setFormData,
  handleSaveData,
}) {
  // console.log(formData);
  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("project")}
          className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-xl"
        >
          Add Project
        </button>
      </div>
    </div>
  );
}
