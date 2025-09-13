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
export default function AdminExperienceView({
  formData,
  setFormData,
  handleSaveData,
  data,
}) {
  // console.log(formData);
  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10 space-y-6">
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="bg-[#ffffff] border border-green-600 flex flex-col gap-2 p-6 rounded-lg shadow-md hover:border-green-800 transition duration-300"
              >
                <h2 className="text-lg font-semibold text-gray-600">
                  Position: {item.jobtitle}
                </h2>
                <p className="text-lg text-gray-600">Company: {item.company}</p>
                <p className="text-lg text-gray-600">
                  Duration: {item.duration}
                </p>
                <p className="text-lg text-gray-600">
                  Location: {item.location}
                </p>
                <p className="text-lg text-gray-600">{item.jobprofile}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No experience data available.
            </p>
          )}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("experience")}
          className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-xl"
        >
          Add Experience
        </button>
      </div>
    </div>
  );
}
