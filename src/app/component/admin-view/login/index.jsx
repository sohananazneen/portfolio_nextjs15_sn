"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "username",
    placeholder: "Enter Username",
    type: "text",
    label: "Username",
  },
  {
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    label: "Password",
  },
];
export default function Login({ formData, setFormData, handleLogin }) {
  // console.log(formData);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-400 rounded-lg shadow-lg px-8 pt-6 pb-8">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}
