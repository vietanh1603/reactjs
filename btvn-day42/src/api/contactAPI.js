import axios from 'axios';

const baseUrl = 'https://api-todolist-multiuser.onrender.com/Vanh/contacts'

const contactAPI = {
    getAll: () => axios.get(baseUrl),

    create: (data) => axios.post(baseUrl, data),

    update: (data) => axios.put(`${baseUrl}/${data.id}`, data),

    remove: (id) => axios.delete(`${baseUrl}/${id}`)
};

export default contactAPI;
