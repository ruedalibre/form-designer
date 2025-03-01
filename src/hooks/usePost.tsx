import { useState } from "react";
import { HttpClient, IHttpClientOptions, HttpClientResponse }  from '@microsoft/sp-http';
import { IFormData } from "../Interfaces/IFormData";

interface IPostResult {
    postData: (formData: IFormData[]) => Promise<void>;
    isLoading: boolean;
    error: string | undefined;
}

const usePost = (httpClient: HttpClient, url: string): IPostResult => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    
    const postData = async (formData: IFormData[]): Promise<void> => {
        setIsLoading(true);
        setError(undefined);

        const options: IHttpClientOptions = {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response: HttpClientResponse = await httpClient.post(url, HttpClient.configurations.v1, options);

            if (!response.ok) {
                throw new Error("Error en el envío del formualrio");
            }
            const text = await response.text();
            if (text) {
                const data = JSON.parse(text);
                console.log("Exitoso", data);
            } else {
                console.log("No hay respuesta");
            }
        } catch (err) {
            setError((err as Error).message);
            console.error("Error: " + err);
        } finally {
            setIsLoading(false);
        }
    };
    
    return { postData, isLoading, error };
};

export default usePost;