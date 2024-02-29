import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig.extra.API_URL;

const fetchAdvice = async (token, advice_id) => {
    return await fetch(`${apiUrl}/advice/get?advice=${advice_id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => data);
};

const fetchAdviceByPlant = async (token, plant_id) => {
    return await fetch(`${apiUrl}/advice/get-by-plant?plant=${plant_id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => data);
};

const createAdvice = async (token, content, plant_id, botanist_id) => {
    return await fetch(`${apiUrl}/advice/create`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contenu: content,
            plante_id: plant_id,
            botaniste_id: botanist_id
        })
    });
};

const editAdvice = async (token, content, advice_id) => {
    return await fetch(`${apiUrl}/advice/edit`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            conseil_id: advice_id,
            contenu: content
        })
    });
};

const deleteAdvice = async (token, conseil_id) => {
    return await fetch(`${apiUrl}/advice/delete`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            conseil_id: conseil_id
        })
    });
};

export {
    createAdvice,
    editAdvice,
    fetchAdvice,
    fetchAdviceByPlant,
    deleteAdvice
};