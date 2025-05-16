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
    formData.append('resume', file);

    try {
      setLoading(true);
      setError(null);
      const res = await axios.post('http://localhost:5000/api/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(res.data);
    } catch (err) {
      setError('Upload failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Resume'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {response && (
        <div>
          <h3>Analysis Result</h3>
          <p>{response.message}</p>
          <p>Filename: {response.filename}</p>
          {/* You can also show analysis details here */}
          <pre>{JSON.stringify(response.analysis, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
