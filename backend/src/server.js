const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Import and use the AI router
const aiRouter = require("./routes/ai");
app.use("/api/ai", aiRouter);

app.get("/", (req, res) => {
  res.send("Mockly AI Interview Simulator Backend");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
