import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/me", async (req, res) => {
  const token = req.headers.authorization;

  const r = await fetch("https://api.whop.com/api/v2/me", {
    headers: {
      Authorization: token,
    },
  });

  const data = await r.json();
  res.json(data);
});

app.listen(3000);
