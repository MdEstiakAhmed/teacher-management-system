import { eventListResponse } from "../assets/test-data/eventResponse";
import { showAlertPopup } from "../utils/alert";
import { domRefToFormData } from "../utils/formFieldConverter";
import { postData, getData, putData } from "../utils/request";

export const baseUrl = '/event';

export const fetchEvents = async () => {
    try {
        if(process.env.REACT_APP_DATA_TYPE === "json") {
            return eventListResponse;
        }
        const url = `${baseUrl}/`;
        const response = await getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const addEvent = async (ref) => {
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