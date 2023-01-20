import { inboxEmailListResponse, emailResponse, sentEmailListResponse } from "../assets/test-data/emailResponse";
import { showAlertPopup } from "../utils/alert";
import { domRefToFormData } from "../utils/formFieldConverter";
import { postData, getData, putData } from "../utils/request";

export const baseUrl = '/email';

export const fetchInboxEmails = async () => {
    try {
        if(process.env.REACT_APP_DATA_TYPE === "json") {
            return inboxEmailListResponse;
        }
        const url = `${baseUrl}/`;
        const response = await getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const fetchSentEmails = async () => {
    try {
        if(process.env.REACT_APP_DATA_TYPE === "json") {
            return sentEmailListResponse;
        }
        const url = `${baseUrl}/sent/`;
        const response = await getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const fetchEmail = async ({emailId}) => {
    try {
        if(process.env.REACT_APP_DATA_TYPE === "json") {
            return emailResponse;
        }
        const url = `${baseUrl}/${emailId}/`;
        const response = await getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const addEmail = async (ref, isDraft) => {
    try {
        const url = `${baseUrl}/sent/`;
        const formData = domRefToFormData(ref);
        isDraft && formData.append("Draft", 1);
        !isDraft && formData.append("Draft", 0);
        formData.delete('Receiver');
        formData.delete('Cc');
        formData.delete('Bcc');
        ;[...ref.current].forEach(input => {
            if (input.name === "Receiver") {
                input.value && formData.append("Receiver[]", input.value);
            }
            if (input.name === "Cc") {
                input.value && formData.append("Cc[]", input.value);
            }
            if (input.name === "Bcc") {
                input.value && formData.append("Bcc[]", input.value);
            }
        });
        const response = await postData(url, formData, {});
        showAlertPopup(response.status, response.message);
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const updateEmailStarred = async ({emailId, type, starred, state}) => {
    try {
        let url;
        let importantType = type;
        if(state === "sent"){
            url = `${baseUrl}/sent/${emailId}/`;
            importantType = "SenderImportant"
        }
        else {
            url = `${baseUrl}/${emailId}/`;
        }
        const formData = new FormData();
        formData.append(importantType, starred ? 1 : 0);
        const response = await putData(url, formData, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const fetchDraftEmail = ({emailId}) => {
    try {
        const url = `${baseUrl}/draft/${emailId}/`;
        const response = getData(url, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const updateDraftEmail = async ({ref, isDraft, emailId}) => {
    try {
        const url = `${baseUrl}/draft/${emailId}/`;
        const formData = domRefToFormData(ref);
        isDraft && formData.append("Draft", 1);
        !isDraft && formData.append("Draft", 0);
        formData.delete('Receiver');
        formData.delete('Cc');
        formData.delete('Bcc');
        ;[...ref.current].forEach(input => {
            if (input.name === "Receiver") {
                input.value && formData.append("Receiver[]", input.value);
            }
            if (input.name === "Cc") {
                input.value && formData.append("Cc[]", input.value);
            }
            if (input.name === "Bcc") {
                input.value && formData.append("Bcc[]", input.value);
            }
        });
        const response = await putData(url, formData, {});
        showAlertPopup(response.status, response.message);
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}