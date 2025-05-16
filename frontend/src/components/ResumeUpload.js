import React, { useState } from 'react';

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please upload a resume file first.');
      return;
    }
    setMessage('Resume uploaded successfully! (Backend integration coming soon)');
  };

  return (
    <div className="resume-upload" style={{ color: '#fff' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          style={{ marginBottom: '10px' }}
        />
        <br />
        <button type="submit" className="btn btn-warning">
          Upload Resume
        </button>
      </form>
      {message && <p style={{ marginTop: '10px', color: 'orange' }}>{message}</p>}
    </div>
  );
}

export default ResumeUpload;
