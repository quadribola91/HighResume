import React, { useState } from "react";

function ProjectsForm({ setProjects }) {
  const [projects, setProjectsList] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddProject = (e) => {
    e.preventDefault();

    const newProject = {
      title,
      link,
      startDate,
      endDate,
      description,
    };

    const updatedProjects = [newProject, ...projects];

    setProjectsList(updatedProjects);
    setProjects(updatedProjects);

    // Reset form fields
    setTitle("");
    setLink("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  return (
    <div className="space-y-4 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-semibold">Projects</h2>
      <form onSubmit={handleAddProject} className="space-y-4">
        <div>
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. JobConnect"
          />
        </div>
        <div>
          <label className="block mb-1">Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Jobconnect.vercel.app"
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
            placeholder="e.g. Feb 2024"
          />
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Present"
          />
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Resume Builder"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>
      </form>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {project.link}
              </a>
            </p>
            <p className="text-gray-600">
              {project.startDate} - {project.endDate}
            </p>
            <pre className="whitespace-pre-wrap">{project.description}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsForm;
