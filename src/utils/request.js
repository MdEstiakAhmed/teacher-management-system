import axios from "axios";

const AppInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getData = async (url, headers) => {
    try {
        const localData = await localStorage.getItem("tms_data");
        const token = JSON.parse(localData || {}).access;
        const response = await AppInstance.get(url, { headers: { ...headers, Authorization: `Bearer ${token}` } });
        return response.data;
    }
    catch (error) {
        return { status: false, message: error.message };
    }
}

export const postData = async (url, data, headers) => {
    try {
        const localData = await localStorage.getItem("tms_data");
        let token;
        if(localData){
            token = JSON.parse(localData || {}).access;
        }
        const response = await AppInstance.post(url, data, { headers: { ...headers, Authorization: `Bearer ${token}` } });
        return response.data;
    }
    catch (error) {
        return { status: false, message: error.message };
    }
}

export const putData = async (url, data, headers) => {
    try {
        const localData = await localStorage.getItem("tms_data");
        let token;
        if(localData){
            token = JSON.parse(localData || {}).access;
        }
        const response = await AppInstance.put(url, data, { headers: { ...headers, Authorization: `Bearer ${token}` } });
        return response.data;
    }
    catch (error) {
        return { status: false, message: error.message };
    }
}