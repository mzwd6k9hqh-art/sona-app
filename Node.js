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
import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/members", async (req, res) => {
  const r = await fetch("https://api.whop.com/api/v2/members", {
    headers: {
      Authorization: `Bearer YOUR_WHOP_API_KEY`
    }
  });
  res.json(await r.json());
});

app.get("/products", async (req, res) => {
  const r = await fetch("https://api.whop.com/api/v2/products", {
    headers: {
      Authorization: `Bearer YOUR_WHOP_API_KEY`
    }
  });
  res.json(await r.json());
});

app.listen(3000);
