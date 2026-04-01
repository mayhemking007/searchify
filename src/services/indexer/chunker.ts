export const chunker = (text : string, size : number, overlap : number) => {
    const words = text.split(" ");
    let chunks : string[] = []
    for(let i = 0; i < words.length; i += size - overlap){
        const chunk = words.slice(i, i + size).join(" ");
        chunks.push(chunk);
    }
    return chunks;
}