import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
});

export const get = async (path, option = {}) => {
    const res = await httpRequest.get(path, option);
    return res.data;
};

export default httpRequest;

//cac loai moi truong
//local / development
//test / staging
//UAT
//production
