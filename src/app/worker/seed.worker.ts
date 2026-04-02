import { crawlerQueue } from "../../infra/queues/crawlerQueue.js";
import { seedUrl } from "../../shared/seedUrl.js";

export const startSeedWorker = async () => {
     const seeds = seedUrl;
    for(const url of seeds){
        await crawlerQueue.add('urls', {url : url});
    }
}
startSeedWorker();