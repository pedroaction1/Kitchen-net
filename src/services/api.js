import axios from 'axios'

const api = axios.create ({
    baseURL: "../api/apiRest",
});

export default api;