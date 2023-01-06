import { academicInfo, awardAndScholarshipInfo, experienceInfo, publicationInfo, teachingInfo, trainingInfo, userGeneralInfo } from "../assets/test-data/userInfo";
import { showAlert, showAlertPopup } from "../utils/alert";
import { domRefToFormData } from "../utils/formFieldConverter";
import { postData, getData, putData } from "../utils/request";

export const baseUrl = '/users';

export const fetchUserInfo = async (type) => {
    try {
        if(process.env.REACT_APP_DATA_TYPE === "json") {
            let res = {};
            switch (type) {
                case "academicinfo":
                    res = academicInfo;
                    break;
                case "traininginfo":
                    res = trainingInfo;
                    break;
                case "teachinginfo":
                    res = teachingInfo;
                    break;
                case "publicationinfo":
                    res = publicationInfo;
                    break;
                case "awardscholarshipinfo":
                    res = awardAndScholarshipInfo;
                    break;
                case "experienceinfo":
                    res = experienceInfo;
                    break;
                default:
                    break;
            }
            return res;
        }
        const url = `${baseUrl}/${type}/`;
        const response = await getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const fetchUser = async ({ id }) => {
    try {
        if(process.env.REACT_APP_DATA_TYPE === "json") {
            return userGeneralInfo;
        }
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

export const addOtherInfo = async (type, id, ref) => {
    try {
        const url = `${baseUrl}/${type}/${id}/`;
        const formData = domRefToFormData(ref);
        const response = await postData(url, formData, {});
        showAlertPopup(response.status, response.message);
        return response;
    } catch (error) {
        console.log(error);
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

