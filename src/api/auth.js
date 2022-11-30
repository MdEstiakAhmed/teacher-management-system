import { postData } from "../utils/request";

export const baseUrl = '/auth';

export const login = async (data) => {
    const url = `${baseUrl}/login`;
    const response = await postData(url, data, {});
    return response;
}