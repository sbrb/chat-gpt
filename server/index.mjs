import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { Configuration, OpenAIApi } from 'openai';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const config = new Configuration({
    organization: process.env.ORGANIZATION_EY,
    apiKey: process.env.API_KEY
});

const openAi = new OpenAIApi(config);

app.post('/', async (req, res) => {
    const { message } = req.body

    try {
        const response = await openAi.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            // max_tokens: 100000,
            temperature: 0
        })
        res.json({ message: response.data.choices[0].text })

    } catch (e) {
        console.log(e)
        res.send(e).status(500)
    }
})
app.listen(PORT, () => console.log(`Express app is running on port ${PORT}`));
