import React, { useState } from "react";
import ContactsForm from "./Component/ContactsForm/ContactsForm";
import ExperienceForm from "./Component/ExperienceForm/ExperienceForm";
import EducationForm from "./Component/EducationForm/EducationForm";
import SkillsForm from "./Component/SkillsForm/SkillsForm";
import ProjectsForm from "./Component/ProjectsForm/ProjectsForm";
import AchievementsForm from "./Component/AchievementsForm/AchievementsForm";
import Navbar from "./Component/Navbar/Navbar";
import SideNav from "./Component/SideNav/SideNav";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("contacts");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const selectSection = (section) => {
    setActiveSection(section);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const renderActiveForm = () => {
    switch (activeSection) {
      case "contacts":
        return <ContactsForm />;
      case "experience":
        return <ExperienceForm />;
      case "education":
        return <EducationForm />;
      case "skills":
        return <SkillsForm />;
      case "projects":
        return <ProjectsForm />;
      case "achievements":
        return <AchievementsForm />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} selectSection={selectSection} />
      <button
        className="toggle-btn md:hidden p-4 bg-blue-500 text-white"
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? "Hide Menu" : "Show Menu"}
      </button>
      <div className="MainContent flex">
        <SideNav
          activeSection={activeSection}
          selectSection={selectSection}
          isSidebarVisible={isSidebarVisible}
        />
        <main className="InputFields p-4 flex-grow mt-0">
          {renderActiveForm()}
        </main>
      </div>
    </div>
  );
}

export default App;
