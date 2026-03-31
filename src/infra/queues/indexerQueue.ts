import { Queue } from "bullmq";
import { redisConnection } from "../redis/redisConnection.js";

export const indexerQueue = new Queue("indexer", {
    connection : redisConnection
});