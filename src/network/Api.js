import axios from 'axios'

export const backURL = "http://localhost:5000/";
export const tmdbApi = "c1d4c897006018a31e71243656c0b8d1";
const req = axios.create({
    baseURL: backURL + 'api',
})

req.interceptors.request.use(async(config) => {
    const token = localStorage.getItem('bToken');
    config.headers.Authorization = (token ? token : '');
    config.headers.ContentType = 'application/json';
    return config;
});


export const commonApi = async(url) => {
    return await req.post(url)
}

export const commonApiWithValues = async(url, data)=>{
    return await req.post(url, data)
}

export const fileUploadApi = async(url, data)=>{
    return await req.post(url, data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}