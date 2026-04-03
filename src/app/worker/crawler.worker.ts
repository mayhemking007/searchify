import { Worker } from "bullmq"
import { redisConnection } from "../../infra/redis/redisConnection.js";
import { prisma } from "../../infra/db/prismaClient.js";
import { getHTML } from "../../services/crawler/getHTML.js";
import { handlePage } from "../../services/crawler/handlePage.js";

export const startCrawlerWorker = async () => {
    const crawler = new Worker("crawler", async(job:any) => {
        if(job.name === "urls"){
            const urlCount = await prisma.visitedUrls.count();
            if(urlCount > 1000) return;
            const url = job.data.url;
            console.log(url);
            const page = await getHTML(url);
            await handlePage(page, url);
        }
    },
    {
        connection : redisConnection,
        concurrency : 5
    });

    return crawler;
}