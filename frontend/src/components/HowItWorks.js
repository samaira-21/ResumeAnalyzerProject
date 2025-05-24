import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: "Upload Your Resume",
    description: "Choose your resume file in PDF, DOC, or TXT format to get started.",
  },
  {
    number: 2,
    title: "Automatic Scoring",
    description: "Our system evaluates your resume using key factors like format, keywords, and grammar.",
  },
  {
    number: 3,
    title: "Get Detailed Feedback",
    description: "Receive instant suggestions on improving content, layout, and keywords based on your score.",
  },
  {
    number: 4,
    title: "Boost Your Chances",
    description: "Refine your resume based on expert advice to impress recruiters and land interviews.",
  },
];

export default function HowItWorks() {
  return (
    <div className="how-it-works">
      <h1 className="mb-5 text-warning text-center">How It Works</h1>
      <div className="d-flex flex-column flex-md-row justify-content-around">
        {steps.map(({ number, title, description }) => (
          <motion.div
            key={number}
            className="step bg-dark p-4 rounded mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: number * 0.3, duration: 0.5 }}
            style={{ maxWidth: '250px', flex: 1, margin: '0 10px' }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ff6f00',
                color: '#fff',
                textAlign: 'center',
                lineHeight: '40px',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginBottom: '15px',
                userSelect: 'none',
              }}
            >
              {number}
            </div>
            <h4 className="text-warning">{title}</h4>
            <p>{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
