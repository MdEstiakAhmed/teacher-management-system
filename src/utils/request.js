import axios from "axios";

const AppInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getData = async (url, headers) => {
    try {
        const response = await AppInstance.get(url, { headers: { ...headers } });
        return response.data;
    }
    catch (error) {
        return { status: false, message: error.message };
    }
}

export const postData = async (url, data, headers) => {
    try {
        console.log(url, data, headers)
        const response = await AppInstance.post(url, data, { headers: { ...headers } });
        return response.data;
    }
    catch (error) {
        return { status: false, message: error.message };
    }
}