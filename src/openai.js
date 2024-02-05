const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
  const res = await openai.createCompletion({
    engine: "text-davinci-003",
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presense_penalty: 0,
  });
  return res.data.choices[0].text;
}
