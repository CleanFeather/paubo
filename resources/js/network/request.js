import axios from 'axios';

export const request = config => {
    console.log(this);
    let instance = axios.create({
        baseURL: '/api',
        timeout: 5000,
        headers: {
            'Authorization': localStorage.getItem('access_token')
        }
    })
    instance.interceptors.response.use(response => {
        if ('authorization' in response.headers) {
            localStorage.setItem('access_token', response.headers.authorization);
        }
        return response;
    }, error => {
        switch (error.response.status) {
            case 401:
                localStorage.removeItem('auth');
                _app.$store.commit('setStatus',false);
                _app.$message.error('请登录');
                _app.$router.push({ name: 'login' });
            break;
            default:
                _app.$message.error('操作失败');
        }
        return Promise.reject(error);
    });
    return instance(config);
};