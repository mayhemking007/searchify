export const isValidPathDepth = (url : string, maxDepth : number) : boolean => {
    const pathname = new URL(url).pathname;
    const depth = pathname.split("/").filter(Boolean).length;
    return depth <= maxDepth;
}