import { prisma } from "../../infra/db/prismaClient.js";
import { indexerQueue } from "../../infra/queues/indexerQueue.js";
import { getPageContent } from "./getPageContent.js";
import { getPageUrls } from "./getPageUrls.js";
import { UrlEnqueue } from "./urlEnqueue.js";

export const handlePage = async (page : any, url : string) => {
    const {title, content} = getPageContent(page);
    let urls = getPageUrls(page, url);
    urls = urls.slice(0,10);
    try{
        await UrlEnqueue(urls);
        const doc = await prisma.document.create({
            data : {
                title : title,
                content : content,
                url : url,
                links : urls
            }
        });
        await indexerQueue.add("docs", {docId : doc.id});
    }
    catch(e){
        console.log(e);
        throw e;
    }

    
}