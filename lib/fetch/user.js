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

const editUser = async (token, userData, pseudo, mail, rue, ville, code_postal, gender) => {
    return await fetch('http://192.168.1.65:3000/api/user/edit', {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`, // token is missing
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: userData.id,
            pseudo: pseudo || userData.pseudo,
            mail: mail || userData.mail,
            est_botaniste: userData.est_botaniste,
            est_admin: userData.est_admin,
            genre: gender || userData.genre_id,
            image: '' || userData.image_id,
            ville: ville || userData.Adresse.Ville.nom_ville,
            code_postal: code_postal || userData.Adresse.CodePostal.code_postal,
            rue: rue || userData.Adresse.rue,
        })
    })
};

export {fetchGenders, fetchUserData, createUser, editUser};