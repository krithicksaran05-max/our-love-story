export default async function handler(req, res) {
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  const text = "💙 Haruuniiii clicked YES on your proposal!";

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
      }),
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}