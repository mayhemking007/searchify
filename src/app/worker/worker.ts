import { startCrawlerWorker } from "./crawler.worker.js"
import { startIndexerWorker } from "./indexer.worker.js";
import { startSeedWorker } from "./seed.worker.js";

export const startWorker = async () => {
    startCrawlerWorker();
    startIndexerWorker();
    startSeedWorker();

    console.log("All workers are running.")
}

startWorker();