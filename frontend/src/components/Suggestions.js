import React from 'react';

export default function Suggestions() {
  return (
    <div className="suggestions">
      <h1 className="mb-4 text-warning">Resume Improvement Suggestions</h1>
      <ul className="list-group">
        <li className="list-group-item bg-dark text-white border-warning">
          Use a clean, professional format with consistent fonts and spacing.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Highlight your achievements with specific numbers and results.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Tailor your resume for each job description, using relevant keywords.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Keep your resume concise, ideally 1-2 pages.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Avoid spelling and grammatical errors by proofreading carefully.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Include clear contact information and professional email addresses.
        </li>
      </ul>
    </div>
  );
}
