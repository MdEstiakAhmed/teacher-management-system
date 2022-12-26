import { showAlert } from "../utils/alert";
import { postData } from "../utils/request";

export const baseUrl = '/auth';

export const login = async (data) => {
    try {
        const url = `${baseUrl}/signin/`;
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

export const signup = async (data) => {
    console.log(data);
    try {
        const url = `${baseUrl}/signup/`;
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

export const changePassword = async (data) => {
    try {
        const url = `${baseUrl}/signin/`;
        const formData = new FormData();
        for (const property in data) {
            formData.append(property, data[property]);
        }
        const response = await postData(url, formData, {});
        if (response.status) {
            showAlert.successAlert(response.message);
        }
        else {
            showAlert.errorAlert(response.message);
        }
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}