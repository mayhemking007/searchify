import { Queue } from "bullmq";
import { redisConnection } from "../redis/redisConnection.js";

export const crawlerQueue = new Queue("crawler", {
    connection : redisConnection
});