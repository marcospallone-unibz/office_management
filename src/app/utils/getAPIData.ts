import axios from "axios";
import { useRouter } from "next/navigation";

const router = useRouter();
const url = 'http://54.87.175.86:3000/';

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
        await axios.post(endpoint, data);
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const register = async (formData: any) => {
    try {
        const result = await postData(url+'register', formData);
        console.log('Data successfully posted:', result);
        router.push('/');
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const login = async (formData: any) => {
    try {
        const result = await postData(url+'login', formData);
        console.log('Data successfully posted:', result);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const getOffices = async () => {
    try {
        const result = await getData(url+'offices');
        return result;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}