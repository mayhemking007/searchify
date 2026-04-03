export const chunker = (text : string, size : number, overlap : number) => {
    const sentences = text.split(/[.?!]/);
    let chunks : string[] = []
    let current = "";
    for(const sentence of sentences){
        if((current + sentence).length > size){ 
            chunks.push(current);
            current = sentence;
        }
        else{
            current += sentence + ". ";
        }
    }
    if(current){
        chunks.push(current);
    }
    return chunks;
}