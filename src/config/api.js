import axios from "axios";

const token = JSON.parse(localStorage.getItem("currentUser"))
console.log(token);

export const API = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const setAuthToken = (token) => {
    if(token){
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }else{
        delete API.defaults.headers.common['Authorization']
    }
};