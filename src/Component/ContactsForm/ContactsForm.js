import React, { useState } from "react";

function ContactsForm({ setContacts }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts({
      firstName,
      lastName,
      email,
      phone,
      linkedin,
      github,
      website,
      address,
      summary,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border border-gray-300 rounded"
    >
      <h2 className="text-xl font-semibold">Contacts</h2>
      <div>
        <label className="block mb-1">First Name*:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Last Name*:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Email*:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="e.g. name@domain.com"
        />
      </div>
      <div>
        <label className="block mb-1">Phone*:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="e.g. +1 9876543210"
        />
      </div>
      <div>
        <label className="block mb-1">LinkedIn Profile*:</label>
        <input
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="e.g. linkedin.com"
        />
      </div>
      <div>
        <label className="block mb-1">Github Profile:</label>
        <input
          type="url"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="e.g. github.com"
        />
      </div>
      <div>
        <label className="block mb-1">Website URL:</label>
        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="e.g. hicounselor.com"
        />
      </div>
      <div>
        <label className="block mb-1">Address*:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="e.g. Dallas, Texas"
        />
      </div>
      <div>
        <label className="block mb-1">Resume Summary:</label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="A brief summary about you"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
}

export default ContactsForm;
