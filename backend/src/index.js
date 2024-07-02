const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIApi, Configuration } = require('openai');

const app = express();
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY',
});
const openai = new OpenAIApi(configuration);

app.post('/evaluate', async (req, res) => {
  const { chat, criteria } = req.body;

  const prompt = `
  Evaluate the following chat based on the criteria:

  Criteria:
  ${criteria.join('\n')}

  Chat Description: ${chat.description}
  Chat Transcript: ${chat.transcript}

  Provide a score out of 10 and any comments:
  `;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 150,
  });

  const evaluation = response.data.choices[0].text.trim();
  const score = parseFloat(evaluation.match(/Score: (\d+\.?\d*)/)[1]);
  const comments = evaluation.replace(/Score: \d+\.?\d*/, '').trim();

  res.json({ score, comments });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
