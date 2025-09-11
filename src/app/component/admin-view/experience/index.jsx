"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "jobtitle",
    placeholder: "Enter Job Title / Position",
    type: "text",
    label: "Job Title / Position",
  },
  {
    name: "company",
    placeholder: "Enter Company Name",
    type: "text",
    label: "Company Name",
  },
  {
    name: "duration",
    placeholder: "Enter Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Enter Location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobprofile",
    placeholder: "Enter Job Profile",
    type: "text",
    label: "Job Profile",
  },
];
export default function AdminExperienceView({ formData, setFormData }) {
  // console.log(formData);
  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-xl">
          Add Experience
        </button>
      </div>
    </div>
  );
}
