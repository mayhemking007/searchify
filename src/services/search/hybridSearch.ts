import { es } from "../../infra/elasticSearch/elasticClient.js";
import { searchLatency } from "../../infra/monitoring/metrics.js";

export const hybridSearch : any = async (embedding : any[], query : string) => {
    const end = searchLatency.startTimer();
    try{
        const response = await es.search({
            index : "chunks",
            size : 10,
            query : {
                script_score: {
                    query : {
                        match : {
                            content : query
                        }
                    }
                ,
                script: {
                    source : "0.7 * _score + 0.3 * cosineSimilarity(params.query_vector, 'embedding') + 1.0",
                    params : {
                        query_vector : embedding
                    }
                }
            }
    }});
        return response.hits.hits;
    }
    catch(e){
        console.log(e);
        throw e;
    }
    finally{
        end();
    }
}