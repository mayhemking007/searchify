import { openai } from "./openaiClient.js"

export const generateEmbedding = async (text : string) => {
    const response = await openai.embeddings.create({
        model : "text-embedding-3-small",
        input : text
    });
    if(!response) throw new Error("Cannot generate Embedding");
    return response.data[0]?.embedding;
}