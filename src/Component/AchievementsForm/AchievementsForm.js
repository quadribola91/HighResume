import React, { useState } from "react";

function AchievementsForm({ setAchievements }) {
  const [achievements, setAchievementsList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddAchievement = (e) => {
    e.preventDefault();

    const newAchievement = {
      title,
      description,
    };

    const updatedAchievements = [newAchievement, ...achievements];

    setAchievementsList(updatedAchievements);
    setAchievements(updatedAchievements);

    // Reset form fields
    setTitle("");
    setDescription("");
  };

  return (
    <div className="space-y-4 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-semibold">Achievements</h2>
      <form onSubmit={handleAddAchievement} className="space-y-4">
        <div>
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Dean's List"
          />
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Awarded for maintaining a 4.0 GPA for two consecutive semesters"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Achievement
        </button>
      </form>
      <div>
        {achievements.map((achievement, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-lg font-semibold">{achievement.title}</h3>
            <pre className="whitespace-pre-wrap">{achievement.description}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementsForm;
