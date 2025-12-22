export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const userMessage = req.body.message;

  const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer process.env.OPENAI_KEY`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant for Whop users." },
        { role: "user", content: userMessage }
      ]
    })
  });

  const data = await aiResponse.json();

  res.status(200).json({
    reply: data.choices[0].message.content
  });
}
