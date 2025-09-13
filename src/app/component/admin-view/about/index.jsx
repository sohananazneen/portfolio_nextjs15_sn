"use client";
import FormControls from "../form-controls";

const controls = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },
  {
    name: "noofprojects",
    placeholder: "Enter Number of Projects",
    type: "text",
    label: "Number of Projects",
  },
  {
    name: "yearofexperience",
    placeholder: "Enter Year of Experience",
    type: "text",
    label: "Year of Experience",
  },
  {
    name: "noofclients",
    placeholder: "Enter Number of Clients",
    type: "text",
    label: "Number of Clients",
  },
  {
    name: "skills",
    placeholder: "Enter Your Skills",
    type: "text",
    label: "Skills",
  },
];
export default function AdminAboutView({
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
          onClick={() => handleSaveData("about")}
          className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-xl"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
