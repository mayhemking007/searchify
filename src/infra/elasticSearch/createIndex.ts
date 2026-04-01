import { es } from "./elasticClient.js"

export const createIndex = async() => {
    const indexExist = await es.indices.exists({index : "chunks"})
    if(indexExist){
        console.log("Index already exists");
        return;
    }
    await es.indices.create({
        index : "chunks",
        mappings : {
            properties : {
                content : {type : "text"},
                title : {type : "text"},
                url : {type : "keyword"},
                docId : {type : "keyword"},
                embedding : {
                    type : "dense_vector",
                    dims : 1536
                },
                created_at : {type : "date"}
            }
        }
    });
    console.log("Chunks index created");
} 