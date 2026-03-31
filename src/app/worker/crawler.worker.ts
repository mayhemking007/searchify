import { Worker } from "bullmq"
import { redisConnection } from "../../infra/redis/redisConnection.js";

export const startCrawlerWorker = async () => {
    const crawler = new Worker("crawler", async() => {

    }, {
        connection : redisConnection,
        concurrency : 5
    });

    return crawler;
}