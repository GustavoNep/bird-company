import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGFjZjRkMzdjYjNlYWMzMjExYWE5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTA5NjM5MSwiZXhwIjoxNjg1MzU1NTkxfQ.v2z10OAZNzHhCSvMkvbz2Fn664D0XxIm2VZJwPurOKo"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});