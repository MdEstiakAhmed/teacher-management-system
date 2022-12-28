import { showAlert } from "../utils/alert";
import { postData, getData } from "../utils/request";

export const baseUrl = '/todo';

export const fetchTodo = async () => {
    try {
        const url = `${baseUrl}/`;
        const response = await getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}