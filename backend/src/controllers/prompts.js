const fetch = require("node-fetch");
require("dotenv").config();

// Gemini API config
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "API_KEY";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

// System Prompt (RTFC framework)
const systemPrompt = `
You are Mockly, an expert AI interview simulator. Your job is to conduct mock interviews for various roles, ask relevant questions, and provide feedback. Always be professional, clear, and supportive. Use the RTFC (Role, Task, Format, Constraints) framework:
- Role: Interviewer for the selected job role
- Task: Ask questions, evaluate answers, and give feedback
- Format: Use clear, concise language and structured output when required
- Constraints: Stay on topic, avoid personal opinions, and keep responses relevant to the role
`;

// User Prompt (for candidate answer evaluation)
const userPrompt = (role, candidateInput) => `
System: ${systemPrompt}
Role: ${role}
Candidate's Answer: ${candidateInput}
Please evaluate the answer and provide feedback as per the RTFC framework.
`;

// Function to call Gemini API with system and user prompt
async function getGeminiResponse(role, candidateInput) {
  const prompt = userPrompt(role, candidateInput);
  try {
    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });
    const data = await response.json();
    const aiText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AI.";
    return aiText;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

module.exports = { systemPrompt, userPrompt, getGeminiResponse };

// --- One Shot Prompting Utility ---
/**
 * Returns a one-shot prompt for the given role and example.
 * @param {string} role - The interview role (e.g., 'Frontend Developer')
 * @param {string} exampleQ - Example question
 * @param {string} exampleA - Example answer
 * @param {string} userQ - The actual question for the user
 * @returns {string} One-shot prompt
 */
function oneShotPrompt(role, exampleQ, exampleA, userQ) {
  return `You are an interviewer for the role of ${role}.
    Here is an example:
    Q: ${exampleQ}
    A: ${exampleA}
    Now, ask the following question and wait for the candidate's answer:
    Q: ${userQ}`;
    }

// Example usage (for documentation or integration):
const prompt = oneShotPrompt(
  'Frontend Developer',
  'What is the Virtual DOM in React?',
  'The Virtual DOM is a lightweight copy of the real DOM that React uses to optimize UI updates.',
  'Explain the concept of component lifecycle in React.'
);

module.exports.oneShotPrompt = oneShotPrompt;
