import React, { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload your resume first!');
      return;
    }
    alert(`Resume "${file.name}" submitted for analysis.`);
    // Here you will later connect with backend API
  };

  return (
    <div className="home-page">
      <h1 className="mb-4 text-warning">Upload Your Resume</h1>
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-warning text-dark">
          Analyze Resume
        </button>
      </form>
      <p className="text-muted">
        Upload your resume in PDF, DOC, DOCX or TXT format for instant analysis.
      </p>
    </div>
  );
}
