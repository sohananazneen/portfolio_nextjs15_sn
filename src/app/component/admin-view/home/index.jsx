"use client";

import { FormControl } from "@mui/material";
import FormControls from "../form-controls";

const controls = [
  {
    name: "heading",
    placeholder: "Enter Heading Text",
    type: "text",
    label: "Heading Text",
  },
  {
    name: "summary",
    placeholder: "Enter Summary",
    type: "text",
    label: "Summary",
  },
];
export default function AdminHomeView({ formData, setFormData }) {
  console.log(formData);
  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <button className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-xl">
        Add Info
      </button>
    </div>
  );
}
