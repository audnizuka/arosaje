import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig.extra.API_URL;

const fetchSearchPlant = async (token, plante_id) => {
    return await fetch(`${apiUrl}/plant/search?query=${plante_id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => data);
};

export {
    fetchSearchPlant
};