import React, { useState } from 'react';
import axios from 'axios';

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResponse(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);  // key 'resume' must match backend multer field name

    try {
      setLoading(true);
      setError(null);
      setResponse(null);
      const res = await axios.post('http://localhost:5000/api/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResponse(res.data);
    } catch (err) {
      setError('Upload failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-warning mb-3">Upload Your Resume</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="form-control mb-3"
          onChange={handleFileChange}
        />
        <button type="submit" className="btn btn-warning" disabled={loading}>
          {loading ? 'Analyzing...' : 'Upload Resume'}
        </button>
      </form>

      {loading && (
        <p className="text-info">Please wait, your resume is being analyzed...</p>
      )}

      {error && <p className="text-danger">{error}</p>}

      {response && (
        <div className="mt-4">
          <h4 className="text-success">Analysis Result</h4>
          <p><strong>Message:</strong> {response.message}</p>
          <p><strong>Filename:</strong> {response.filename}</p>
          {response.analysis && response.analysis.score && (
            <p><strong>Score:</strong> {response.analysis.score}</p>
          )}
          {response.analysis && Array.isArray(response.analysis.suggestions) && (
            <>
              <h5>Suggestions:</h5>
              <ul>
                {response.analysis.suggestions.map((suggestion, idx) => (
                  <li key={idx}>{suggestion}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
