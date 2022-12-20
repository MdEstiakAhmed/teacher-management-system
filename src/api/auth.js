import { postData } from "../utils/request";

export const baseUrl = '/auth';

export const login = async (data) => {
    try {
        const url = `${baseUrl}/signin`;
        const formData = new FormData();
        for (const property in data) {
            formData.append(property, data[property]);
        }
        const response = await postData(url, formData, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}