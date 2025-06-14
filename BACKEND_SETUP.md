
# Backend Setup Instructions

This ChatGPT clone frontend is ready to connect to a backend API. Here's how to set up the backend:

## Express.js Backend Setup

1. Create a new directory for your backend:
```bash
mkdir chatgpt-backend
cd chatgpt-backend
npm init -y
```

2. Install required dependencies:
```bash
npm install express cors dotenv openai
npm install -D @types/express @types/cors typescript ts-node nodemon
```

3. Create `server.js` (or `server.ts` for TypeScript):

```javascript
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, model = 'gpt-4' } = req.body;

    const completion = await openai.chat.completions.create({
      model: model,
      messages: messages,
      max_tokens: 1000,
      temperature: 0.7,
    });

    res.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({
      error: 'Failed to get response from OpenAI',
      details: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

4. Create `.env` file in backend directory:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
```

5. Add scripts to `package.json`:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

6. Run the backend:
```bash
npm run dev
```

## Frontend Configuration

Update the API endpoint in the frontend if your backend runs on a different port:
- The frontend expects the backend to run on port 3001
- If you use a different port, update the fetch URL in `src/lib/api.ts`

## Getting Your OpenAI API Key

1. Go to [OpenAI's website](https://openai.com/api/)
2. Sign up or log in to your account
3. Navigate to the API section
4. Generate a new API key
5. Add it to your `.env` file

## CORS Configuration

The backend includes CORS middleware to allow requests from your frontend. If you deploy to production, make sure to configure CORS properly for your domain.

## Environment Variables

Never commit your `.env` file to version control. Add it to your `.gitignore`:
```
.env
node_modules/
```

## Next Steps

Once your backend is running:
1. Start your frontend development server
2. The chat interface will automatically connect to your backend
3. You can start chatting with GPT-4!

## Troubleshooting

- Make sure your OpenAI API key is valid and has credits
- Check that the backend server is running on the correct port
- Verify CORS is properly configured if you get cross-origin errors
- Check the browser console and server logs for error messages
