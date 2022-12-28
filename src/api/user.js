import { showAlert, showAlertPopup } from "../utils/alert";
import { domRefToFormData } from "../utils/formFieldConverter";
import { postData, getData, putData } from "../utils/request";

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
        const url = `${baseUrl}/${id}/`;
        const response = await getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const updateGeneralInfo = async (id, ref) => {
    try {
        const url = `${baseUrl}/${id}/`;
        const formData = domRefToFormData(ref);
        const response = await putData(url, formData, {});
        showAlertPopup(response.status, response.message);
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const updatePersonalInfo = async (id, ref) => {
    try {
        const url = `${baseUrl}/${id}/`;
        const formData = domRefToFormData(ref);
        const response = await putData(url, formData, {});
        showAlertPopup(response.status, response.message);
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const updateOtherInfo = async (type, id, ref) => {
    try {
        const url = `${baseUrl}/${type}/${id}/`;
        const formData = domRefToFormData(ref);
        const response = await putData(url, formData, {});
        showAlertPopup(response.status, response.message);
        return response;
    } catch (error) {
        console.log(error);
        return { status: false, message: error.message };
    }
}

