import { showAlert } from "../utils/alert";
import { postData, getData } from "../utils/request";

export const baseUrl = '/users';

export const fetchUserInfo = async (type) => {
    try {
        const url = `${baseUrl}/${type}/`;
        const response = await getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const fetchUser = async ({ id }) => {
    try {
        const url = `${baseUrl}/${id}`;
        const response = await getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}