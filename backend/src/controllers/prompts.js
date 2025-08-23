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
