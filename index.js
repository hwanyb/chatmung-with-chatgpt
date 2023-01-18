import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import path from 'path';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(config);

app.use(express.json());
app.use(cors());

app.post('/api/chat', async (req, res) => {
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

function generatePrompt(question) {
    return `질문에 대한 대답 끝에 꼭 멍 을 붙여주고, 한국어로 말하되 꼭 반말로 대답해줘. ${question}`;
}

// 리액트 정적파일 제공
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    // 라우트 설정
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    })

}


app.listen(port, () => {
    console.log("Example app port: " + port);
})