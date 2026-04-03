import * as cheerio from "cheerio";
import { cleanText } from "../../shared/cleanText.js";


export const getPageContent = (page : any) => {
    const $ = cheerio.load(page);
    $("nav").remove();
    $("header").remove();
    $("footer").remove();
    $("aside").remove();
    $("script").remove();
    $("style").remove();
    $("nocript").remove();
    $("iframe").remove();

    const title = $("title").text();
    const content = $("p").map((i, el) => $(el).text()).get().join("\n");
    
    const cleanContent = cleanText(content);
    return {title : title, content : cleanContent};
} 