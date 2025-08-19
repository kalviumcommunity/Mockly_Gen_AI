# Mockly - AI Interview Simulator

## Overview
**Mockly** is an intelligent application designed to help users practice interviews and improve their communication, technical knowledge, and problem-solving skills.  
It has two main modes:  

1. **General Chat Mode** – Acts as a conversational AI assistant.  
2. **Interview Mode** – Voice-based interactive interview tailored to a specific role, generating a detailed performance report at the end.

This tool is ideal for job seekers, students, and professionals preparing for interviews in technology, management, and other domains.

---

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
    API_KEY=your_api_key_here
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

5. Start the frontend:
    ```bash
    npm run dev
    ```
