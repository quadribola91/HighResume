import React, { useState } from "react";

function ExperienceForm({ setExperience }) {
  const [experiences, setExperiences] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExperience = {
      company,
      position,
      startDate,
      endDate,
      location,
      details,
    };

    const updatedExperiences = [newExperience, ...experiences];

    setExperiences(updatedExperiences);
    setExperience(updatedExperiences);

    // Reset form fields
    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setDetails("");
  };

  return (
    <div className="space-y-4 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-semibold">Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Company Name:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. HiCounselor"
          />
        </div>
        <div>
          <label className="block mb-1">Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Software Developer"
          />
        </div>
        <div>
          <label className="block mb-1">Start - End Date:</label>
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Aug'19 - Apr'20"
          />
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Present"
          />
        </div>
        <div>
          <label className="block mb-1">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. San Francisco, California"
          />
        </div>
        <div>
          <label className="block mb-1">Details:</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Designed backend applications and programs using Python, contributing to operations continuity and increasing efficiency by 24%.&#10;&#10;Note 1: For better sentence framing, you can refer to the link attached below 'Resume Bullet Points'&#10;Note 2: Add space between lines to make bulleted points"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Experience
        </button>
      </form>
      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-lg font-semibold">
              {exp.position} at {exp.company}
            </h3>
            <p className="text-gray-600">
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.location}</p>
            <pre className="whitespace-pre-wrap">{exp.details}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceForm;
