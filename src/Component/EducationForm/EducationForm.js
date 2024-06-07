import React, { useState } from "react";

function EducationForm({ setEducation }) {
  const [educations, setEducations] = useState([]);
  const [institute, setInstitute] = useState("");
  const [location, setLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [gpa, setGpa] = useState("");
  const [coursework, setCoursework] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEducation = {
      institute,
      location,
      degree,
      startDate,
      endDate,
      gpa,
      coursework,
    };

    const updatedEducations = [newEducation, ...educations];

    setEducations(updatedEducations);
    setEducation(updatedEducations);

    // Reset form fields
    setInstitute("");
    setLocation("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setGpa("");
    setCoursework("");
  };

  return (
    <div className="space-y-4 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-semibold">Education</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Institute Name*:</label>
          <input
            type="text"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. MIT"
          />
        </div>
        <div>
          <label className="block mb-1">Location*:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Massachusetts"
          />
        </div>
        <div>
          <label className="block mb-1">Degree*:</label>
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. B.Tech in Computer Science"
          />
        </div>
        <div>
          <label className="block mb-1">Start - End Date*:</label>
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Aug'19"
          />
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Apr'20"
          />
        </div>
        <div>
          <label className="block mb-1">
            GPA* (Mention on a scale of 4. Example: 3.86):
          </label>
          <input
            type="text"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. 3.86"
          />
        </div>
        <div>
          <label className="block mb-1">Relevant coursework:</label>
          <textarea
            value={coursework}
            onChange={(e) => setCoursework(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Software Engineering, Discrete Mathematics, Paradigms of Programming, Data Structures and Algorithms"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Education
        </button>
      </form>
      <div>
        {educations.map((edu, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-lg font-semibold">
              {edu.degree} at {edu.institute}
            </h3>
            <p className="text-gray-600">
              {edu.startDate} - {edu.endDate}
            </p>
            <p>{edu.location}</p>
            <p>GPA: {edu.gpa}</p>
            <pre className="whitespace-pre-wrap">{edu.coursework}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationForm;
