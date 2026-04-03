import { Router } from "express";
import { generateEmbedding } from "../../infra/openai/generateEmbedding.js";
import { hybridSearch } from "../../services/search/hybridSearch.js";

export const searchrouter = Router();

searchrouter.post('/', async(req, res) => {
    const query = req.body.query;
    try{
        const embedding = await generateEmbedding(query);
        const result = await hybridSearch(embedding, query);
        const formattedResult = result.map((item:any) => ({
            title : item._source.title,
            url : item._source.url,
            content : item._source.content.slice(0,200) + "...",
            score : item._score
        }));
        res.json({
            success : true,
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