import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig.extra.API_URL;

const fetchAnnouncementByUser = async (token, userId) => {
    return await fetch(`${apiUrl}/announcement/get-by-user?user=${userId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => data);
};

const fetchAnnouncement = async (token, annonce_id) => {
    return await fetch(`${apiUrl}/announcement/get?announcement=${annonce_id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => data);
};

const fetchAllAnnouncements = async (token) => {
    return await fetch(`${apiUrl}/announcement/get-all`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => data);
};

const createAnnouncement = async (token, date_debut, date_fin, periodicite_entretien, image, nom_plante, description, proprietaire_id) => {
    return await fetch(`${apiUrl}/announcement/create`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }, body: {
            date_debut: date_debut,
            date_fin: date_fin,
            periodicite_entretien: periodicite_entretien,
            image: image,
            nom_plante: nom_plante,
            description: description,
            proprietaire_id: proprietaire_id
        }
    })
};

const editAnnouncement = async (token, announcement, date_debut, date_fin, periodicite_entretien, gardien_id) => {
    return await fetch(`${apiUrl}/announcement/edit`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }, body: {
            annonce_id: announcement.id,
            date_debut: date_debut || announcement.date_debut,
            date_fin: date_fin || announcement.date_fin,
            periodicite_entretien: periodicite_entretien || announcement.periodicite_entretien,
            gardien_id: gardien_id || announcement.gardien_id,
        }
    })
};

const deleteAnnouncement = async (token, announcement_id) => {
    return await fetch(`${apiUrl}/announcement/delete`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }, body: {
            annonce_id: announcement_id
        }
    })
};

const fetchAnnouncementAddressCoords = async (address) => {
    return await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                return {
                    latitude: parseFloat(data[0].lat),
                    longitude: parseFloat(data[0].lon),
                }
            } else {
                return "Adresse non trouvée. Veuillez entrer une adresse valide.";
            }
        })
        .catch(error => {
            return "Erreur de géocodage :";
        });
};

export {
    fetchAnnouncementByUser,
    fetchAnnouncement,
    fetchAllAnnouncements,
    createAnnouncement,
    editAnnouncement,
    fetchAnnouncementAddressCoords
};