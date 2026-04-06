import {openai} from "./openaiClient.js";

export const generateResponse = async (text : string, query : string) => {
    const systemPrompt = `You are a sharp, concise search assistant. 
You answer questions using only the provided sources.
You always end with one critique — the single most important caveat, 
assumption, or gap that the mainstream answer glosses over.
Be direct. No fluff. No hallucination beyond the sources.
Always respond in valid JSON only. No markdown, no explanation outside the JSON.`;

    const userPrompt = `Sources:
${text}

Question: ${query}

Using only the sources above, respond in this exact JSON format:
{
  "answer": "3-4 line summary answering the question. End with the most relevant source URL inline like (source: url)",
  "critique": "The single most important thing the answer glosses over — a weak assumption, missing context, or understudied angle. 1-2 lines max. Sharp, not alarmist."
}`

    const response = await openai.chat.completions.create({
        model : "gpt-4o-mini",
        messages : [
            {role : "system", content : systemPrompt},
            {role : "user", content : userPrompt}
        ],
        temperature : 0.4
    });
    if(!response){
        throw new Error("Failed to generate response");
    }
    return JSON.parse(response.choices[0]!.message.content as string);
}