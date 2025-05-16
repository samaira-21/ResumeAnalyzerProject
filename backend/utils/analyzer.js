function analyzeResume(fileBuffer) {
  // Dummy analyzer logic for now
  const dummyScore = Math.floor(Math.random() * 100);
  const suggestions = [
    'Add more technical keywords.',
    'Include a summary at the top.',
    'Quantify your achievements.',
  ];

  return {
    score: dummyScore,
    suggestions: suggestions.slice(0, 2),
  };
}

module.exports = analyzeResume;
