# POPKID Website — Setup Guide

## Files
- `index.html` — your full website
- `server.js` — backend that securely calls the AI API
- `package.json` — Node.js dependencies

## How to Run Locally

1. Install Node.js from https://nodejs.org (v18 or higher)

2. Install dependencies:
   ```
   npm install
   ```

3. Set your Anthropic API key:
   - Get one free at https://console.anthropic.com
   - Open server.js and replace `YOUR_API_KEY_HERE` with your key
   - OR set it as an environment variable:
     ```
     # Windows
     set ANTHROPIC_API_KEY=sk-ant-xxxxxxxx

     # Mac/Linux
     export ANTHROPIC_API_KEY=sk-ant-xxxxxxxx
     ```

4. Start the server:
   ```
   npm start
   ```

5. Open your browser at:
   ```
   http://localhost:3000
   ```

The chatbot will now work fully! ✅

---

## Deploy to Render.com (FREE - recommended)

1. Push all files to a GitHub repo
2. Go to https://render.com → New → Web Service
3. Connect your GitHub repo
4. Set these:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add Environment Variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-your-key-here`
6. Click Deploy!

Your site + chatbot will be live at a free render.com URL 🚀

---

## Get a Free Anthropic API Key

1. Go to https://console.anthropic.com
2. Sign up for free
3. Go to API Keys → Create Key
4. Copy the key (starts with sk-ant-)

Free tier gives you plenty of credits to get started!
