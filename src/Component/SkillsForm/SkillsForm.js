import React, { useState } from "react";

function SkillsForm({ setSkills }) {
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [functionalSkills, setFunctionalSkills] = useState("");
  const [skillsList, setSkillsList] = useState({
    technical: [],
    functional: [],
  });

  const handleAddSkills = (e) => {
    e.preventDefault();

    const technicalSkillsArray = technicalSkills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill);
    const functionalSkillsArray = functionalSkills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill);

    const updatedSkillsList = {
      technical: technicalSkillsArray,
      functional: functionalSkillsArray,
    };

    setSkillsList(updatedSkillsList);
    setSkills(updatedSkillsList);

    // Reset the input fields
    setTechnicalSkills("");
    setFunctionalSkills("");
  };

  return (
    <div className="space-y-4 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-semibold">Skills</h2>
      <form onSubmit={handleAddSkills} className="space-y-4">
        <div>
          <label className="block mb-1">
            Technical Skills (separate with commas):
          </label>
          <input
            type="text"
            value={technicalSkills}
            onChange={(e) => setTechnicalSkills(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Python, Java, PHP"
          />
        </div>
        <div>
          <label className="block mb-1">
            Functional Skills (separate with commas):
          </label>
          <input
            type="text"
            value={functionalSkills}
            onChange={(e) => setFunctionalSkills(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Agile, SDLC, JIRA"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Skills
        </button>
      </form>
      <div>
        {skillsList.technical.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold">Technical Skills:</h3>
            <ul className="list-disc list-inside">
              {skillsList.technical.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
        {skillsList.functional.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold">Functional Skills:</h3>
            <ul className="list-disc list-inside">
              {skillsList.functional.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillsForm;
