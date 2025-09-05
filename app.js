// api/index.js
import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

export default serverless(app);
