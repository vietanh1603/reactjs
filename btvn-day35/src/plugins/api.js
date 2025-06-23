import axios from 'axios';

const baseUrl = 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com';

// lay token moi
const getNewToken = async (callback) => {
    try {
        const response = await axios.post(`${baseUrl}/get_new_token`, {
            refresh: localStorage.getItem('refresh'),
        });

        const data = response.data;
        if (data.access) {
            localStorage.setItem('access', data.access);
            await callback();
        }
    } catch (error) {
        console.log('error');

        window.location.href = '/';
    }
};

// post
const postMethod = async (endpoint, body, retry = true) => {
    try {
        const accessToken = localStorage.getItem('access');
        const response = await axios.post(`${baseUrl}/${endpoint}`, body, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken ? `Bearer ${accessToken}` : '',
            },
        });

        const data = response.data;

        // xu ly token het han
        if (data.detail === 'token expired' && retry) {
            await getNewToken(() => postMethod(endpoint, body, false));
            return;
        }

        return data;
    } catch (error) {
        console.log('error');
        throw error;
    }
};

// Ham xu ly dang nhap
export const handleLogin = async (email, password, navigate) => {
    try {
        const data = await postMethod('login', { email, password });

        if (data?.access) {
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            navigate('/home');
        } else {
            alert('Đăng nhập không thành công');
        }
    } catch (error) {
        console.log('error');
    }
};
