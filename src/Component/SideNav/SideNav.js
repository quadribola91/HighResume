import React from "react";

function SideNav({ activeSection, selectSection, isSidebarVisible }) {
  return (
    <nav
      className={`SideNav bg-gray-800 text-white h-full fixed top-0 left-0 md:w-64 p-4 ${
        isSidebarVisible ? "block" : "hidden"
      } md:block`}
    >
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => selectSection("contacts")}
            className={`w-full text-left ${
              activeSection === "contacts" ? "underline" : ""
            }`}
          >
            Contacts
          </button>
        </li>
        <li>
          <button
            onClick={() => selectSection("experience")}
            className={`w-full text-left ${
              activeSection === "experience" ? "underline" : ""
            }`}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => selectSection("education")}
            className={`w-full text-left ${
              activeSection === "education" ? "underline" : ""
            }`}
          >
            Education
          </button>
        </li>
        <li>
          <button
            onClick={() => selectSection("skills")}
            className={`w-full text-left ${
              activeSection === "skills" ? "underline" : ""
            }`}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => selectSection("projects")}
            className={`w-full text-left ${
              activeSection === "projects" ? "underline" : ""
            }`}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => selectSection("achievements")}
            className={`w-full text-left ${
              activeSection === "achievements" ? "underline" : ""
            }`}
          >
            Achievements
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
