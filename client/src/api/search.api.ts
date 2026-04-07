import { authClient } from "./client";

export const postSearch = async (query: string) => {
    try {
        const response = await authClient.post('/search', { query });
        return response.data;
    } catch (error) {
        console.error('Error performing search:', error);
        throw error;
    }
}