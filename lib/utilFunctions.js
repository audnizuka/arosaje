import * as SecureStore from "expo-secure-store";
import {Buffer} from "buffer";
import dayjs from "dayjs";

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const decodeToken = (token) => {
    const parts = token.split('.').map(part => Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());
    return JSON.parse(parts[1]);
}

const tokenIsValid = (token) => {
    const payload = decodeToken(token);
    return payload.exp > (Date.now() / 1000);
};

const formatDate = (date) => {
    return dayjs(date).format("DD/MM/YYYY à HH:mm");
};

export {decodeToken, tokenIsValid, capitalize, formatDate};