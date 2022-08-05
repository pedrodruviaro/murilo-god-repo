import axios from "axios";
const API_ENDPOINT = "https://postmanmaster.herokuapp.com/fruit/";

const api = axios.create({
    baseURL: API_ENDPOINT,
});

export default api;
