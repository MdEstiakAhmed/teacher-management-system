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

// emailId: email id
// type: ReceiverImportant, CcImportant, BccImportant, SenderImportant
// starred: true, false
// state: sent, inbox || ...
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

// export const 

// type: ReceiverLabel, CcLabel, BccLabel, SenderLabel
// label: None, Personal, Important, Private, Company
// state: inbox, sent
export const updateEmailLabel = async ({emailId, type, label, state}) => {
    try {
        let url;
        let labelType = type;
        if(state === "sent"){
            url = `${baseUrl}/sent/${emailId}/`;
            labelType = "SenderLabel"
        }
        else {
            url = `${baseUrl}/${emailId}/`;
        }
        const formData = new FormData();
        formData.append(labelType, label);
        const response = await putData(url, formData, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

// type: ReceiverTrash, CcTrash, BccTrash, SenderTrash
// isTrash: true, false
// state: inbox, sent
export const updateEmailTrash = async ({emailId, type, isTrash, state}) => {
    try {
        let url;
        let labelType = type;
        if(state === "sent"){
            url = `${baseUrl}/sent/${emailId}/`;
            labelType = "SenderTrash"
        }
        else {
            url = `${baseUrl}/${emailId}/`;
        }
        const formData = new FormData();
        formData.append(labelType, isTrash ? 1 : 0);
        const response = await putData(url, formData, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

// type: ReceiverDelete, CcTrash, BccDelete, SenderDelete
// isDelete: true, false
// state: inbox, sent
export const updateEmailDelete = async ({emailId, type, isDelete, state}) => {
    try {
        let url;
        let labelType = type;
        if(state === "sent"){
            url = `${baseUrl}/sent/${emailId}/`;
            labelType = "SenderTrash"
        }
        else {
            url = `${baseUrl}/${emailId}/`;
        }
        const formData = new FormData();
        formData.append(labelType, isDelete ? 1 : 0);
        const response = await putData(url, formData, {});
        return response;
    } catch (error) {
        return { status: false, message: error.message };
    }
}

export const updateEmailRead = async ({emailId, readType, readStatus}) => {
    try {
        let url = `${baseUrl}/${emailId}/`;
        const formData = new FormData();
        formData.append(readType, readStatus ? 1 : 0);
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