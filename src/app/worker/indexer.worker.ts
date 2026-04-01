import { Worker } from "bullmq";
import { redisConnection } from "../../infra/redis/redisConnection.js";
import { prisma } from "../../infra/db/prismaClient.js";
import { chunker } from "../../services/indexer/chunker.js";
import { generateEmbedding } from "../../infra/openai/generateEmbedding.js";
import { es } from "../../infra/elasticSearch/elasticClient.js";
import { title } from "node:process";

export const startIndexerWorker = async (job : any) => {
    const indexer = new Worker("indexer", async() => {
        console.log("Indexer worker started");
        if(job.name === "docs"){
            const docId = job.data.docId;
            try{
                const document = await prisma.document.findFirst({
                    where : {id : docId}
                });
                if(!document){
                    throw new Error("Cannot find document for Indexer");
                }
                const chunks = chunker(document.content, 300, 50);
                for(const chunk of chunks){
                    const embedding = await generateEmbedding(chunk);
                    await es.index({
                        index : "chunks",
                        document : {
                            content : document.content,
                            title : document.title,
                            url : document.url,
                            docId : docId,
                            embedding : embedding,
                            created_at : new Date()
                        }
                    });
                    console.log(`Indexed ${chunks.length} chunks for ${document.url}`);
                }
            }
            catch(e){
                console.log(e);
                throw e;
            }
        }
    },
    {
        connection : redisConnection,
        concurrency : 5
    });

    return indexer;
}