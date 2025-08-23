// evaluationDataset.js
// Sample evaluation dataset and judge prompt for testing framework

const evaluationDataset = [
  {
    role: "Frontend Developer",
    question: "What is the Virtual DOM in React?",
    expected: "Lightweight copy of the real DOM for optimization.",
  },
  {
    role: "Frontend Developer",
    question: "What are React hooks?",
    expected: "Functions to use state/features in functional components.",
  },
  {
    role: "Backend Developer",
    question: "What is REST API?",
    expected: "Architectural style for networked applications.",
  },
  {
    role: "Data Scientist",
    question: "What is overfitting in machine learning?",
    expected: "Model fits training data too well, poor generalization.",
  },
  {
    role: "Product Manager",
    question: "How do you prioritize features?",
    expected: "Based on impact, effort, user needs, business.",
  },
];

const judgePrompt = (candidateAnswer, expectedAnswer) =>
  `Compare the candidate's answer to the expected answer.\nCandidate: ${candidateAnswer}\nExpected: ${expectedAnswer}\nGive a score out of 10 and a brief justification.`;

module.exports = { evaluationDataset, judgePrompt };
