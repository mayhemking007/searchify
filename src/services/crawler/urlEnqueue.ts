import { prisma } from "../../infra/db/prismaClient.js";
import { crawlerQueue } from "../../infra/queues/crawlerQueue.js";
import { isUrlVisited } from "./isUrlVisited.js";


export const UrlEnqueue = async (urls : string[]) => {
    try{
        const links = [];
        for(const url of urls){
            if(await isUrlVisited(url)){
                continue;
            }
            else{
                const urlCount = await prisma.visitedUrls.count();
                if(urlCount > 300) return;
                await prisma.visitedUrls.create({
                    data : {
                        url : url,
                        status : 'VISITED'
                    }
                });
                links.push(url);
            }
        }
        const jobs = links.map((li) => ({
            name : 'urls',
            data : {url : li}
        }));
        await crawlerQueue.addBulk(jobs);
    }
    catch(e){
        console.log(e);
        throw e;
    }
}