const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
require("dotenv").config();

const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

app.use(bodyParser.json());
app.use(cors());

function generatePrompt(question) {
    return `질문에 대한 대답 끝에 꼭 멍 을 붙여주고, 한국어로 말하되 꼭 반말로 대답해줘. ${question}`;
}


app.post('/', async (req, res) => {
    const { question } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(question),
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    if (response.data) {
        if (response.data.choices) {
            res.json({
                message: response.data.choices[0].text
            });
        }
    }
});

app.listen(port, () => {
    console.log("Example app port: " + port);
})

