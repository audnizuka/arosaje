import * as SecureStore from "expo-secure-store";
import {Buffer} from "buffer";

const decodeToken = (token) => {
    const parts = token.split('.').map(part => Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());
    return JSON.parse(parts[1]);
}

const tokenIsValid = (token) => {
    const payload = decodeToken(token);
    console.log(payload.exp);
    console.log(Date.now() / 1000);
    console.log(payload.exp > Date.now() / 1000);
    return payload.exp > (Date.now() / 1000);
};

const checkAuthOnStart = async ({ navigation }) => {
    const token = await SecureStore.getItemAsync('token');
    const payload = decodeToken(token);
    console.log(payload.exp);
    console.log(Date.now() / 1000);
    console.log(payload.exp > Date.now() / 1000);
    if (tokenIsValid(token)) {
        navigation.navigate('Home');
    }
};

const checkAuth = async ({ navigation }) => {
    const token = await SecureStore.getItemAsync('token');
    const payload = decodeToken(token);
    console.log(payload.exp);
    console.log(Date.now() / 1000);
    console.log(payload.exp > Date.now() / 1000);
    if (!payload.exp > Date.now() / 1000) {
        navigation.navigate('LoginScreen');
    }
};

export {checkAuth, checkAuthOnStart, decodeToken, tokenIsValid};