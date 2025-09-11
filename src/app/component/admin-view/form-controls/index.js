"use client";

export default function FormControls({ controls, formData, setFormData }) {
  return controls.map((controlItem) => {
    const handleChange = (e) =>
      setFormData((prevFormData) => ({
        ...prevFormData,
        [controlItem.name]: e.target.value,
      }));
    return (
      <div className="flex flex-col gap-4" key={controlItem.name}>
        <label className="block text-sm font-bold mb-4">
          {controlItem.label}
          <input
            type={controlItem.type}
            placeholder={controlItem.placeholder}
            name={controlItem.name}
            value={formData[controlItem.name] || ""}
            onChange={handleChange}
            className="border border-blue-200 rounded w-full p-2 mt-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-50"
          />
        </label>
      </div>
    );
  });
}
