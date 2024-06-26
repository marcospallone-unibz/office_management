import axios from "axios";

const url = 'http://54.91.75.138:3000/';

const postData = async (endpoint: string, data: any) => {
    try {
        const results = await axios.post(endpoint, data);
        return results;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const register = async (formData: any) => {
    try {
        const results = await postData(url + 'register', formData);
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const login = async (formData: any) => {
    try {
        const results = await postData(url + 'login', formData);
        return results;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const getOffices = async (id: any) => {
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

export const getSingleOffice = async (id: any) => {
    try {
        const result = await axios.get(url + 'singleOffice', {
            params: {
                id: id
            }
        })
        return result;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const newOffice = async (formData: any) => {
    try {
        const results = await postData(url + 'newOffice', formData);
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const deleteOffice = async (formData: any) => {
    try {
        const results = await postData(url + 'deleteOffice', formData);
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const getEmployees = async (id: any) => {
    try {
        const result = await axios.get(url + 'employees', {
            params: {
                id: id
            }
        })
        return result;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const newEmployee = async (formData: any) => {
    try {
        const results = await postData(url + 'newEmployee', formData);
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const updateEmployee = async (formData: any) => {
    try {
        const results = await postData(url + 'updateEmployee', formData);
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const deleteEmployee = async (formData: any) => {
    try {
        const results = await postData(url + 'deleteEmployee', formData);
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const getDevicesByOffice = async (id: any) => {
    try {
        const result = await axios.get(url + 'devices', {
            params: {
                id: id
            }
        })
        return result;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const getSingleDevice = async (id: any) => {
    try {
        const result = await axios.get(url + 'singleDevice', {
            params: {
                id: id
            }
        })
        return result;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const newDevice = async (formData: any) => {
    try {
        const results = await postData(url + 'newDevice', formData);
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const updateDevice = async (formData: any) => {
    try {
        const results = await postData(url + 'updateDevice', formData);
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const deleteDevice = async (formData: any) => {
    try {
        const results = await postData(url + 'deleteDevice', formData);
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const generateQRCode = async () => {
    try {
        const results = await postData(url + 'generateQR', {});
        return results
    } catch (error) {
        console.error('Error posting data:', error);
    }
}
