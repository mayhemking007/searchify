import { Router } from "express";

export const searchrouter = Router();

searchrouter.post('/search', async(req, res) => {
    const query = req.body.query;
    try{

    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            error : "Internal Server Error."
        })
    }
});