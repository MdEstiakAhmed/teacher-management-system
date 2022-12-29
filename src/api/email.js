import { emailListResponse } from "../assets/test-data/emailResponse";
import { showAlertPopup } from "../utils/alert";
import { domRefToFormData } from "../utils/formFieldConverter";
import { postData, getData } from "../utils/request";

export const baseUrl = '/email';

export const fetchEmails = async () => {
    try {
        if(process.env.REACT_APP_DATA_TYPE === "json") {
            return emailListResponse;
        }
        const url = `${baseUrl}/`;
        const response = await getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const addEmail = async (ref) => {
    try {
        const url = `${baseUrl}/`;
        const formData = domRefToFormData(ref);
        const response = await postData(url, formData, {});
        showAlertPopup(response.status, response.message);
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}