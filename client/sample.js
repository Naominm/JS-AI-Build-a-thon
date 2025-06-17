import 'dotenv/config';
import fetch from 'node-fetch';

const endpoint = "https://<your-resource-name>.openai.azure.com/openai/deployments/<deployment-id>/completions?api-version=2023-05-15";
const apiKey = process.env.Personal_Access_Token;

async function getCompletion(prompt) {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-key": apiKey
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 100
        })
    });

    if (!response.ok) {
        console.error("Error:", response.status, await response.text());
        return;
    }

    const data = await response.json();
    console.log(data.choices[0].text);
}

getCompletion("Hello, Azure!").catch(console.error);