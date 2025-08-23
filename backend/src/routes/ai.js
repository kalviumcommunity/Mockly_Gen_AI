const express = require("express");
const router = express.Router();
const {
  getGeminiResponse,
  getZeroShotQuestions,
} = require("../controllers/prompts");

// Route for evaluating candidate answer (RTFC prompt)
router.post("/evaluate", async (req, res) => {
  const { role, candidateInput } = req.body;
  const result = await getGeminiResponse(role, candidateInput);
  res.json({ response: result });
});

// Route for zero-shot interview questions
router.post("/zero-shot-questions", async (req, res) => {
  const { role } = req.body;
  const result = await getZeroShotQuestions(role);
  res.json({ questions: result });
});

module.exports = router;
