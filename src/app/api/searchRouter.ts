import { Router } from "express";
import { generateEmbedding } from "../../infra/openai/generateEmbedding.js";
import { hybridSearch } from "../../services/search/hybridSearch.js";

export const searchrouter = Router();

searchrouter.post('/', async(req, res) => {
    const query = req.body.query;
    try{
        const embedding = await generateEmbedding(query);
        const result = await hybridSearch(embedding, query);
        res.json({
            success : true,
            data : result
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