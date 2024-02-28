const fetchGenders = async () => {
    return await fetch('http://192.168.1.65:3000/api/gender/get-all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => data);
};

const fetchUserData = async (token, userId) => {
    return await fetch(`http://192.168.1.65:3000/api/user/get?user=${userId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => data);
};

const createUser = async (pseudo, mail, password, rue, ville, code_postal, gender, isBotanist) => {
    return await fetch('http://192.168.1.65:3000/api/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pseudo: pseudo,
            mail: mail,
            mot_de_passe: password,
            rue: rue,
            ville: ville,
            code_postal: code_postal,
            genre: gender,
            est_botaniste: isBotanist,
            est_admin: false,
            image: '',
        })
    })
};

export {fetchGenders, fetchUserData, createUser};