"use client";

import AdminAboutView from "../component/admin-view/about";
import AdminContactView from "../component/admin-view/contact";
import AdminEducationView from "../component/admin-view/education";
import AdminExperienceView from "../component/admin-view/experience";
import AdminHomeView from "../component/admin-view/home";
import AdminProjectView from "../component/admin-view/project";
import { useState } from "react";

const initialHomeFormData = {
  heading: "",
  summary: "",
};
export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);

  const menuItem = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
        />
      ),
    },
    { id: "about", label: "About", component: <AdminAboutView /> },
    {
      id: "Experience",
      label: "Experience",
      component: <AdminExperienceView />,
    },
    { id: "education", label: "Education", component: <AdminEducationView /> },
    { id: "project", label: "Project", component: <AdminProjectView /> },
    { id: "contact", label: "Contact", component: <AdminContactView /> },
  ];
  return (
    <div className="border-b border-gray-400 ">
      <nav className="mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItem.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => {
              setCurrentSelectedTab(item.id);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 p-10">
        {menuItem.find((item) => item.id === currentSelectedTab)?.component}
      </div>
    </div>
  );
}
