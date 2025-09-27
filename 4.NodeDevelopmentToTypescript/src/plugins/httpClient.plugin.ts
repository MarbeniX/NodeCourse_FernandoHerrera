import axios from "axios";

interface HttpClientPlugin {
    get: (url: string) => Promise<any>;
    post: (url: string, body: any) => Promise<any>;
    put: (url: string, body: any) => Promise<any>;
    delete: (url: string, body: any) => Promise<any>;
}

export const httpClientPlugin: HttpClientPlugin = {
    get: async (url: string): Promise<any> => {
        const response = await axios.get(url);
        return response.data;
    },
    post: async (url: string, body: any): Promise<any> => {},
    put: async (url: string, body: any): Promise<any> => {},
    delete: async (url: string, body: any): Promise<any> => {},
};
