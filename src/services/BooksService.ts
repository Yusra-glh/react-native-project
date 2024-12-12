
import { BOOKS_URL } from "../constants/Constants";
import axios from "axios";

export const fetchBooks =async  () => {
    try {
        return await axios
        .get(`${BOOKS_URL}/books`)

    }catch (error) {
        throw error;
    }


    
};