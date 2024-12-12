
import { BASE_URL } from "../constants/Constants";
import axios from "axios";

export const login =async  (email: String, password: String) => {
    try {
        const body = {
            username: email,
            password: password,
        };
        return await axios
        .post(`${BASE_URL}/auth/login`, body)
    }catch (error) {
        throw error;
    }


    
};