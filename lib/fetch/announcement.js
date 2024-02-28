const fetchAnnouncementByUser = async (token, userId) => {
    return await fetch(`http://192.168.1.65:3000/api/announcement/get-by-user?user=${userId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, // token is missing
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => data);
};

export {fetchAnnouncementByUser};