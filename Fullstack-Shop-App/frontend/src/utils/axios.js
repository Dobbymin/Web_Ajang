import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.enb.PROD ? '' : 'http://localohst:4000',
});

export default axiosInstance;
