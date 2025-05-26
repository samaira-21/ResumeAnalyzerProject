import React from 'react';

export default function Suggestions() {
  return (
    <div className="suggestions">
      <h1 className="mb-4 text-warning"> ATS-Friendly Resume Improvement Suggestions</h1>
      <ul className="list-group">
        <li className="list-group-item bg-dark text-white border-warning">
          Use standard headings like <i>Experience, Education,</i> and <i>Skills</i> to ensure smooth ATS parsing.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Choose professional fonts like Arial, Calibri, or Times New Roman for better readability.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Keep all critical information in the main body of the resume, avoiding footers or headers.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Use concise bullet points starting with strong action verbs like led, developed, optimized.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Create a dedicated Skills section highlighting both techinal and soft skills relevant to the job.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Limit your resume to 1-2 pages focused on relevant achievements and experiences.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Tailor keywords directly from the job description to match the role you're applying for.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Avoid including photos or graphics to prevent parsing errors and biases.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Keep formatting clean and simple - avoid tables, images, and fancy designs.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Spell out acronyms on first use, e.g., "Applicant Tracking System (ATS)" to ensure clarity.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Maintain consistent date formats such as MM/YYYY or month YYYY for clarity.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Ensure your contact details are clear and easily accessible at the top of the resume.
        </li>
        <li className="list-group-item bg-dark text-white border-warning">
          Run your resume through an ATS simulator to identify potential issues before applying.
        </li>
      </ul>
    </div>
  );
}
