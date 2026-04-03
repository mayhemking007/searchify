import { startCrawlerWorker } from "./crawler.worker.js"
import { startIndexerWorker } from "./indexer.worker.js";


export const startWorker = async () => {
    startCrawlerWorker();
    startIndexerWorker();

    console.log("All workers are running.")
}

startWorker();