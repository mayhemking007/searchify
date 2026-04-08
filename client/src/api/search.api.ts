import { authClient } from "./client";

export const getResults = async (query: string) => {
    try {
        const response = await authClient.post('/search', { query });
        console.log(response.data);
        return response.data;
        
    } catch (error) {
        console.error('Error performing search:', error);
        throw error;
    }
}