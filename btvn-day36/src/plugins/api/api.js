import axios from 'axios';

const baseUrl = 'https://api-todolist-multiuser.onrender.com/Vanh/todos';

export const getMethod = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export const postMethod = async (body) => {
    const response = await axios.post(baseUrl, body);
    return response.data;
};

export const putMethod = async (id, body) => {
    const response = await axios.put(`${baseUrl}/${id}`, body);
    return response.data;
};

export const deleteMethod = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.status === 200;
};
