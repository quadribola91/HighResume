import React from "react";

function Navbar({ activeSection, selectSection }) {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">Resume Builder</div>
      <div className="hidden md:flex space-x-4">
        <button
          onClick={() => selectSection("contacts")}
          className={`hover:underline ${
            activeSection === "contacts" ? "underline" : ""
          }`}
        >
          Contacts
        </button>
        <button
          onClick={() => selectSection("experience")}
          className={`hover:underline ${
            activeSection === "experience" ? "underline" : ""
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => selectSection("education")}
          className={`hover:underline ${
            activeSection === "education" ? "underline" : ""
          }`}
        >
          Education
        </button>
        <button
          onClick={() => selectSection("skills")}
          className={`hover:underline ${
            activeSection === "skills" ? "underline" : ""
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => selectSection("projects")}
          className={`hover:underline ${
            activeSection === "projects" ? "underline" : ""
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => selectSection("achievements")}
          className={`hover:underline ${
            activeSection === "achievements" ? "underline" : ""
          }`}
        >
          Achievements
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
