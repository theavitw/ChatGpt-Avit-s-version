// 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
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-5t9StBDqT2h1Bw2Ogz3EVg77",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

// can you plz add corse here

const app = express();
app.use(bodyparser.json());
app.use(cors());

const port = 3080;

app.post("/", async (req, res) => {
  const { message } = req.body;
  console.log(message,"message")
  console.log(message);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });

  res.json({
    message: response.data.choices[0].text,
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
