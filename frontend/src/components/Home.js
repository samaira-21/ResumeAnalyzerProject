import React, { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResponse(null);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please upload your resume first!');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      setResponse(data);
      setError('');
    } catch (err) {
      setError('Error uploading file. Please try again.');
      setResponse(null);
    }
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

      {error && <p className="text-danger">{error}</p>}

      {response && (
        <div className="text-white">
          <p>
            <strong>Server says:</strong> {response.message || 'File uploaded'} (File: {response.filename})
          </p>

          {response.score !== undefined && (
            <p><strong>Score:</strong> {response.score}</p>
          )}

          {response.suggestions && response.suggestions.length > 0 && (
            <>
              <h5>Suggestions:</h5>
              <ul>
                {response.suggestions.map((sugg, idx) => (
                  <li key={idx}>{sugg}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
