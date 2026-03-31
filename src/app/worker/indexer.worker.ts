import { Worker } from "bullmq";
import { redisConnection } from "../../infra/redis/redisConnection.js";

export const startIndexerWorker = async () => {
    const indexer = new Worker("", async() => {
    
        }, {
            connection : redisConnection,
            concurrency : 5
        });
    
        return indexer;
}