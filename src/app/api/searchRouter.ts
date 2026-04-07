import { Router } from "express";
import { generateEmbedding } from "../../infra/openai/generateEmbedding.js";
import { hybridSearch } from "../../services/search/hybridSearch.js";
import { generateResponse } from "../../infra/openai/generateResponse.js";

export const searchrouter = Router();

searchrouter.post('/', async(req, res) => {
    const query = req.body.query;
    try{
        const embedding = await generateEmbedding(query);
        const result = await hybridSearch(embedding, query);
        const chunkContent = result.map((item:any, i : number) => {
            return `Source ${i+1} : ${item._source.content}
            URL : ${item._source.url}`;
        }).join("\n");
        const summary = await generateResponse(chunkContent, query);
        const formattedResult = result.map((item:any) => ({
            title : item._source.title,
            url : item._source.url,
            content : item._source.content.slice(0,200) + "...",
            score : item._score
        }));
        res.json({
            success : true,
            aiSummary : summary.answer,
            critique : summary.critique,
            data : formattedResult
        });
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            error : "Internal Server Error."
        })
    }
});