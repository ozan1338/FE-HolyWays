import axios from "axios";

const token = JSON.parse(localStorage.getItem("currentUser"))
//console.log(token);

export const API = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL || "https://holy-ways-ozan.herokuapp.com/api/v1"||"http://localhost:5000/api/v1",
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