"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "degree",
    placeholder: "Enter Degree Name",
    type: "text",
    label: "Degree Name",
  },
  {
    name: "year",
    placeholder: "Enter Year of Graduation",
    type: "text",
    label: "Year of Graduation",
  },
  {
    name: "institution",
    placeholder: "Enter Institution Name",
    type: "text",
    label: "Institution Name",
  },
];
export default function AdminEducationView({
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
                  Degree: {item.degree}
                </h2>
                <p className="text-lg text-gray-600">Year: {item.year}</p>
                <p className="text-lg text-gray-600">
                  Institution: {item.institution}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No education data available.
            </p>
          )}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("education")}
          className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-xl cursor-pointer"
        >
          Add Education
        </button>
      </div>
    </div>
  );
}
