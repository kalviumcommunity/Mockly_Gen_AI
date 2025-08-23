# Mockly - AI Interview Simulator

## Overview

**Mockly** is an intelligent application designed to help users practice interviews and improve their communication, technical knowledge, and problem-solving skills.  
It has two main modes:

1. **General Chat Mode** – Acts as a conversational AI assistant focused on solving interview doubts or guidiing on how to prepare for interviews.
2. **Interview Mode** – Voice-based interactive interview tailored to a specific role, generating a detailed performance report at the end.

This tool is ideal for job seekers, students, and professionals preparing for interviews in technology, management, and other domains.

## Prompting Techniques

### One Shot Prompting

Mockly now supports **one shot prompting** in its backend. One shot prompting is a technique where the AI is given a single example Q&A before being asked to answer a new question. This helps guide the AI's response style and context, improving answer relevance and quality.

**Example:**

```
You are an interviewer for the role of Frontend Developer.
Here is an example:
Q: What is the Virtual DOM in React?
A: The Virtual DOM is a lightweight copy of the real DOM that React uses to optimize UI updates.
Now, ask the following question and wait for the candidate's answer:
Q: Explain the concept of component lifecycle in React.
```

### Multi Shot Prompting

Mockly also supports **multi shot prompting** in its backend. Multi shot prompting is a technique where the AI is given multiple example Q&A pairs before being asked to answer a new question. This further improves the AI's understanding of the expected answer style and context, especially for more complex or nuanced interview scenarios.

**Example:**

```
You are an interviewer for the role of Frontend Developer.
Here are some examples:
Example 1:
Q: What is the Virtual DOM in React?
A: The Virtual DOM is a lightweight copy of the real DOM that React uses to optimize UI updates.
Example 2:
Q: What are React hooks?
A: Hooks are special functions in React that let you use state and other features without writing a class.
Now, ask the following question and wait for the candidate's answer:
Q: Explain the concept of component lifecycle in React.
```

This technique is implemented in the backend as a utility function and can be used for any role and set of example questions.

---

### Dynamic Prompting

Mockly supports **dynamic prompting** in its backend. Dynamic prompting means the AI can generate new prompts or questions based on the candidate's previous answers, performance, or the current context of the interview. This allows for a more adaptive and personalized interview experience.

**Example:**

```
You are an interviewer for the role of Frontend Developer.
Here is the conversation so far:
Q1: What is the Virtual DOM in React?
A1: The Virtual DOM is a lightweight copy of the real DOM.
Q2: What are React hooks?
A2: Hooks let you use state and other features in React.
Based on the candidate's previous answers, ask a relevant follow-up question.
Q: How would you optimize a React app for performance?
```

This technique is implemented in the backend as a utility function and can be used to make interviews more interactive and context-aware.

---
### Chain of Thought Prompting

Mockly supports **chain of thought prompting** in its backend. Chain of thought prompting is a technique where the AI is encouraged to reason step-by-step, breaking down its thought process before arriving at a final answer. This is especially useful for complex or multi-step interview questions, as it helps the AI provide more transparent and logical responses.

**Example:**

```
You are an interviewer for the role of Frontend Developer.
Q: How would you debug a performance issue in a React application?
A: Let's think step by step.
First, I would identify the symptoms of the performance issue, such as slow rendering or laggy UI.
Next, I would use React DevTools to profile the component tree and look for unnecessary re-renders.
Then, I would check for expensive operations inside render methods or effects.
Finally, I would optimize the code by memoizing components, using React.PureComponent, or splitting large components.
In summary, debugging performance in React involves profiling, identifying bottlenecks, and applying targeted optimizations.
```

This technique is implemented in the backend as a utility function and can be used to encourage the AI to reason step-by-step for any interview question.

## Features

- **General Chat Mode**
  - Conversational AI for general queries.
  - Supports text and voice input/output.
- **Interview Mode**

  - Voice-based interviews for selected roles.
  - Role-specific technical and behavioral questions.
  - Tracks user performance in real-time.
  - Generates structured performance reports in JSON format:
    ```json
    {
      "role": "<role>",
      "overall_score": "<score out of 10>",
      "strengths": ["..."],
      "weaknesses": ["..."],
      "recommendations": ["..."],
      "detailed_feedback": {
        "clarity": "<score + feedback>",
        "confidence": "<score + feedback>",
        "knowledge": "<score + feedback>",
        "communication": "<score + feedback>",
        "problem_solving": "<score + feedback>"
      }
    }
    ```

- **Prompt Engineering & AI Design**
  - Structured prompts to handle both chat and interview modes.
  - Function calling and structured outputs for report generation.
  - Modular AI design for future enhancements.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js + Express.js
- **AI:** AI API with structured prompting, function calling, and RAG (Retrieval-Augmented Generation) for dynamic interview questions
- **Voice Integration:** Web Speech API or third-party SDKs (e.g., AssemblyAI, ElevenLabs)
- **Database:** MongoDB to store interview history and reports

---

## Installation

1. Clone the repository:

   ```bash
   https://github.com/kalviumcommunity/Mockly_Gen_AI.git
   ```

2. Install dependencies:

   ```bash
   cd ai-interview-simulator
   npm install
   ```

3. Add your AI API key to `.env`:

   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

5. Start the frontend:
   ```bash
   npm run dev
   ```
