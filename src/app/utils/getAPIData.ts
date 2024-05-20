import axios from "axios";

const url = 'http://54.221.89.138:3000/';

const getData = async (endpoint: string) => {
    try {
        const response = await axios.get(endpoint);
        return response;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

const postData = async (endpoint: string, data: any) => {
    try {
        console.log(data)
        const results = await axios.post(endpoint, data);
        return results;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const register = async (formData: any) => {
    try {
        const results = await postData(url+'register', formData);
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const login = async (formData: any) => {
    try {
        const results = await postData(url+'login', formData);
        return results;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const getOffices = async (id:any) => {
    try {
        const result = await axios.get(url + 'offices', {
            params: {
                id: id
            }
        })
        return result;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}