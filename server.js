const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // serves index.html from same folder

// Your Anthropic API key - set this as environment variable
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || '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';

app.post('/chat', async (req, res) => {
  try {
    const { messages, system } = req.body;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        system: system,
        messages: messages
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`POPKID server running on port ${PORT}`));
