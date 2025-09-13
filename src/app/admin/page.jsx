"use client";

import { addData, getData, updateData } from "@/services";
import AdminAboutView from "../component/admin-view/about";
import AdminContactView from "../component/admin-view/contact";
import AdminEducationView from "../component/admin-view/education";
import AdminExperienceView from "../component/admin-view/experience";
import AdminHomeView from "../component/admin-view/home";
import AdminProjectView from "../component/admin-view/project";
import { useEffect, useState } from "react";
import Login from "../component/admin-view/login";

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
const initialLoginFormData = {
  username: "",
  password: "",
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

  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      experience: experienceViewFormData,
      education: educationViewFormData,
      project: projectViewFormData,
    };
    const response = update
      ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
      : await addData(currentSelectedTab, dataMap[currentSelectedTab]);

    console.log(response, "response");
    if (response?.success) {
      resetFormDatas();
      extractAllDatas();
    }
  }
  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);
  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);
    if (
      currentSelectedTab == "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response && response.data[0]);
      setUpdate(true);
    }
    if (
      currentSelectedTab == "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response && response.data[0]);
      setUpdate(true);
    }
    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }
  }
  // console.log(allData, homeViewFormData, "homeViewFormData");
  function resetFormDatas() {
    setHomeViewFormData(initialHomeFormData);
    setAboutViewFormData(initialAboutFormData);
    setExperienceViewFormData(initialExperienceFormData);
    setEducationViewFormData(initialEducationFormData);
    setProjectViewFormData(initialProjectFormData);
  }

  if (!authUser) {
    return (
      <Login
        formData={loginFormData}
        setFormData={setLoginFormData}
        handleSaveData={handleSaveData}
      />
    );
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
          data={allData?.experience}
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
          data={allData?.education}
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
          data={allData?.project}
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
            className="p-4 font-bold text-xl text-black hover:cursor-pointer"
            onClick={() => {
              setCurrentSelectedTab(item.id);
              resetFormDatas();
              setUpdate(false);
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
