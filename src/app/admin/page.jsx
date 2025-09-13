"use client";

import { addData } from "@/services";
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
const initialAboutFormData = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};
const initialExperienceFormData = {
  jobtitle: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};
const initialEducationFormData = {
  degree: "",
  year: "",
  institution: "",
};
const initialProjectFormData = {
  title: "",
  website: "",
  technologies: "",
  github: "",
};
const initialContactFormData = {
  email: "",
  phone: "",
  message: "",
};
export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [aboutViewFormData, setAboutViewFormData] =
    useState(initialAboutFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceFormData
  );
  const [educationViewFormData, setEducationViewFormData] = useState(
    initialEducationFormData
  );
  const [projectViewFormData, setProjectViewFormData] = useState(
    initialProjectFormData
  );
  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      experience: experienceViewFormData,
      education: educationViewFormData,
      project: projectViewFormData,
    };
    const response = await addData(
      currentSelectedTab,
      dataMap[currentSelectedTab]
    );
    console.log(response, "response");
  }
  const menuItem = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "about",
      label: "About Page",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
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
